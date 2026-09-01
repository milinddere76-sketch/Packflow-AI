const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const INDEX = path.join(__dirname, 'index.html');
const html = fs.readFileSync(INDEX, 'utf8');

const vConsole = new VirtualConsole();
const errors = [];
const logs = [];

vConsole.on('error', (...args) => {
  try { errors.push(args.map(a => (a && a.stack) ? a.stack : (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')); } catch (e) { errors.push(String(args)); }
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

    // stub scrollTo
    try { dom.window.scrollTo = function() {}; } catch (e) {}

    // capture window errors
    try {
      dom.window.addEventListener('error', (ev) => {
        try { if (ev && ev.error) errors.push(ev.error.stack || String(ev.error)); else errors.push(ev.message || String(ev)); } catch (e) { errors.push('err-handler:' + String(e)); }
      });
    } catch (e) {}

    await new Promise(resolve => {
      dom.window.addEventListener('load', () => setTimeout(resolve, 800));
      setTimeout(resolve, 8000);
    });

    const doc = dom.window.document;
    const appState = dom.window.appState;

    const results = [];

    function isVisible(id) {
      const el = doc.getElementById(id);
      if (!el) return false;
      const style = el.style && el.style.display ? el.style.display : window.getComputedStyle ? dom.window.getComputedStyle(el).display : el.style.display;
      return style !== 'none';
    }

    // 1) initial dashboard visible
    const dashVisible = isVisible('view-dashboard');
    results.push({name: 'dashboard-visible', ok: !!dashVisible, info: dashVisible});

    // 2) navigate to costing and check CAD SVG rendered
    const beforeQuotations = appState ? appState.getQuotations().length : 0;
    console.log('DIAG: costingEngine present?', !!dom.window.costingEngine);
    console.log('DIAG: app instance present?', !!dom.window.app);
    try {
      const protoNames = dom.window.app ? Object.getOwnPropertyNames(Object.getPrototypeOf(dom.window.app)) : [];
      console.log('DIAG: app.prototype.methods:', protoNames.join(', '));
    } catch (e) { console.log('DIAG: proto inspect error', e); }
    console.log('DIAG: app.updateCostingCalc exists?', !!(dom.window.app && typeof dom.window.app.updateCostingCalc === 'function'));
    console.log('DIAG: app.convertCostingToQuotation exists?', !!(dom.window.app && typeof dom.window.app.convertCostingToQuotation === 'function'));
    console.log('DIAG: appState present?', !!appState, 'quotationsCount=', beforeQuotations);
    dom.window.navigateTo('costing');
    // give the app time to render and initialize costing view
    await new Promise(r => setTimeout(r, 600));
    try { if (dom.window.app && typeof dom.window.app.updateCostingCalc === 'function') dom.window.app.updateCostingCalc(); } catch (e) {}
    await new Promise(r => setTimeout(r, 400));
    const costingVisible = isVisible('view-costing');
    const cadEl = doc.getElementById('cadBoxContainer');
    const cadHasSVG = cadEl && /<svg/.test(cadEl.innerHTML);
    results.push({name: 'costing-visible', ok: !!costingVisible, info: costingVisible});
    if (!cadHasSVG) {
      console.log('CAD CONTAINER HTML LENGTH:', cadEl ? cadEl.innerHTML.length : 0);
      console.log('CAD CONTAINER HTML PREVIEW:', cadEl ? cadEl.innerHTML.slice(0, 400) : '<missing>');
    }
    results.push({name: 'cad-svg', ok: !!cadHasSVG, info: cadHasSVG});

    // 3) convert costing to quotation
    try {
      // call convert function
      if (dom.window.app && typeof dom.window.app.convertCostingToQuotation === 'function') dom.window.app.convertCostingToQuotation();
      // wait for state update
      await new Promise(r => setTimeout(r, 600));
      const afterQuotations = appState ? appState.getQuotations().length : 0;
      const added = afterQuotations > beforeQuotations;
      results.push({name: 'convert-to-quotation', ok: !!added, info: {before: beforeQuotations, after: afterQuotations}});
    } catch (e) {
      results.push({name: 'convert-to-quotation', ok: false, info: String(e)});
    }

    // 4) AI chat query (costing)
    try {
      const aiInput = doc.getElementById('aiInput');
      const aiBtn = doc.getElementById('aiSendBtn');
      const chatContainer = doc.getElementById('chatMessages');
      const initialChatCount = chatContainer ? chatContainer.children.length : 0;
      if (aiInput && aiBtn) {
      aiInput.value = 'Cost a 5 ply box 18x12x10 with 5000 qty';
      aiBtn.click();
      await new Promise(r => setTimeout(r, 800));
        const finalChatCount = chatContainer ? chatContainer.children.length : 0;
        const replyPresent = finalChatCount > initialChatCount;
        // also check navigation to costing (reply.action may navigate)
        results.push({name: 'ai-reply', ok: !!replyPresent, info: {before: initialChatCount, after: finalChatCount}});
      } else {
        results.push({name: 'ai-reply', ok: false, info: 'ai elements missing'});
      }
    } catch (e) { results.push({name: 'ai-reply', ok: false, info: String(e)}); }

    // 5) System Users: create a new user and verify uniqueness validation
    try {
      const beforeUsers = appState ? appState.getUsers().length : 0;
      // navigate to users view
      dom.window.navigateTo('users');
      await new Promise(r => setTimeout(r, 400));

      // open Add User modal
      if (typeof dom.window.showAddUserModal === 'function') dom.window.showAddUserModal();
      await new Promise(r => setTimeout(r, 200));

      // populate form fields
      const nameEl = doc.getElementById('mUserName');
      const codeEl = doc.getElementById('mUserCode');
      const roleEl = doc.getElementById('mUserRole');
      const emailEl = doc.getElementById('mUserEmail');

      if (nameEl) nameEl.value = 'Auto Test User';
      if (codeEl) codeEl.value = 'AUTOT1';
      if (roleEl) roleEl.value = 'User';
      if (emailEl) emailEl.value = 'autotest@example.com';

      // click Save
      const submitBtn = doc.getElementById('modalBtnSubmit');
      if (submitBtn) submitBtn.click();
      await new Promise(r => setTimeout(r, 400));

      const afterUsers = appState ? appState.getUsers().length : 0;
      const added = afterUsers > beforeUsers;
      results.push({name: 'users-create', ok: !!added, info: {before: beforeUsers, after: afterUsers}});

      // Attempt duplicate by re-opening modal and using same email/code
      const beforeDup = appState ? appState.getUsers().length : 0;
      if (typeof dom.window.showAddUserModal === 'function') dom.window.showAddUserModal();
      await new Promise(r => setTimeout(r, 200));
      // re-query modal inputs for the new overlay instance
      const nameEl2 = doc.getElementById('mUserName');
      const codeEl2 = doc.getElementById('mUserCode');
      const roleEl2 = doc.getElementById('mUserRole');
      const emailEl2 = doc.getElementById('mUserEmail');
      const submitBtn2 = doc.getElementById('modalBtnSubmit');
      if (nameEl2) nameEl2.value = 'Auto Test User 2';
      if (codeEl2) codeEl2.value = 'AUTOT1';
      if (emailEl2) emailEl2.value = 'autotest@example.com';
      if (submitBtn2) submitBtn2.click();
      await new Promise(r => setTimeout(r, 300));

      const afterDup = appState ? appState.getUsers().length : 0;
      const dupBlocked = afterDup === beforeDup;
      // Also check modal still present (onSave should return false and keep modal open)
      const modalPresent = !!doc.getElementById('customModalOverlay');
      results.push({name: 'users-duplicate-block', ok: !!(dupBlocked && modalPresent), info: {before: beforeDup, after: afterDup, modalPresent}});
      // close modal if still open
      try { const ov = doc.getElementById('customModalOverlay'); if (ov) ov.remove(); } catch (e) {}
    } catch (e) {
      results.push({name: 'users-create', ok: false, info: String(e)});
    }

    // Summarize
    const failed = results.filter(r => !r.ok);
    console.log('\nSMOKE TEST RESULTS:');
    results.forEach(r => console.log(`- ${r.name}: ${r.ok ? 'PASS' : 'FAIL'} ${r.info ? JSON.stringify(r.info) : ''}`));

    if (errors.length) {
      console.error('\nCLIENT ERRORS:');
      errors.forEach(e => console.error(e));
    }

    if (failed.length) {
      console.error('\nSMOKE TEST FAILED');
      process.exitCode = 1;
    } else {
      console.log('\nSMOKE TEST PASSED');
      process.exitCode = 0;
    }
  } catch (e) {
    console.error('Smoke runner error:', e && e.stack ? e.stack : e);
    process.exitCode = 2;
  }
})();
