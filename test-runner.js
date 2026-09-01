const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const INDEX = path.join(__dirname, 'index.html');
const html = fs.readFileSync(INDEX, 'utf8');

const vConsole = new VirtualConsole();
const errors = [];
const logs = [];

vConsole.on('error', (...args) => {
  try {
    errors.push(args.map(a => {
      if (a && a.stack) return a.stack;
      try { return typeof a === 'string' ? a : JSON.stringify(a); } catch (e) { return String(a); }
    }).join(' '));
  } catch (e) { errors.push(String(args)); }
});

vConsole.on('jsdomError', (err) => {
  errors.push(err && err.stack ? err.stack : String(err));
});

vConsole.on('warn', (w) => logs.push({type: 'warn', msg: String(w)}));
vConsole.on('info', (m) => logs.push({type: 'info', msg: String(m)}));
vConsole.on('log', (m) => logs.push({type: 'log', msg: String(m)}));

(async () => {
  try {
    const dom = new JSDOM(html, {
      runScripts: 'dangerously',
      resources: 'usable',
      url: 'http://localhost:3000/',
      virtualConsole: vConsole,
      pretendToBeVisual: true
    });

    // capture runtime errors from window.onerror
    try {
      dom.window.addEventListener('error', (ev) => {
        try {
          if (ev && ev.error) errors.push(ev.error.stack || String(ev.error));
          else errors.push(ev.message || String(ev));
        } catch (e) { errors.push('error-handler-failed:' + String(e)); }
      });
    } catch (e) {}
    // stub scrollTo to avoid jsdom Not implemented errors
    try { dom.window.scrollTo = function() {}; } catch (e) {}

    // wait for load
    await new Promise(resolve => {
      dom.window.addEventListener('load', () => setTimeout(resolve, 1200));
      // fallback timeout
      setTimeout(resolve, 5000);
    });

    // diagnostic: dump window.app keys
    try {
      const app = dom.window.app;
      console.log('WINDOW.APP KEYS:', app ? Object.keys(app) : 'no-app');
    } catch (e) { console.log('WINDOW.APP KEYS: error', e); }

    try {
      console.log('NAVIGATETO SOURCE:\n', dom.window.navigateTo && dom.window.navigateTo.toString ? dom.window.navigateTo.toString() : 'no-navigateTo');
    } catch (e) { console.log('NAV SRC ERR', e); }
    console.log('---JSDOM LOGS---');
    logs.forEach(l => console.log(`[${l.type}] ${l.msg}`));

    console.log('---JSDOM ERRORS---');
    if (errors.length === 0) {
      console.log('No client-side errors captured by jsdom.');
    } else {
      errors.forEach(e => console.error(e));
      process.exitCode = 1;
    }
  } catch (e) {
    console.error('Runner error:', e && e.stack ? e.stack : e);
    process.exitCode = 2;
  }
})();
