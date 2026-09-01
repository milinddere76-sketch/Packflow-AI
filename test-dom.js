const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('HTML File Size:', html.length, 'bytes');
console.log('Includes sidebarNav container:', html.includes('id="sidebarNav"'));
console.log('Includes mainContent container:', html.includes('id="mainContent"'));
console.log('Includes startERP function:', html.includes('function startERP'));

// Test executing the scripts using JSDOM-like environment
global.window = global;
global.localStorage = { getItem: () => null, setItem: () => null };
global.document = {
  readyState: 'complete',
  addEventListener: (evt, fn) => { if (evt === 'DOMContentLoaded') fn(); },
  documentElement: { getAttribute: () => 'dark', setAttribute: () => {} },
  getElementById: (id) => {
    return {
      id,
      addEventListener: () => {},
      classList: { toggle: () => {}, remove: () => {} },
      innerHTML: '',
      appendChild: () => {},
      options: [{ text: 'Plant 1 - Pune Mega Unit' }],
      selectedIndex: 0,
      value: ''
    };
  },
  querySelector: () => ({ classList: { toggle: () => {} } }),
  body: { appendChild: () => {} }
};

// Extract JS from index.html script tag
const scriptStart = html.indexOf('<script>') + '<script>'.length;
const scriptEnd = html.lastIndexOf('</script>');
const jsCode = html.substring(scriptStart, scriptEnd);

console.log('Extracted JS Code Length:', jsCode.length);

try {
  eval(jsCode);
  console.log('✅ JS Execution Succeeded! window.app instance exists:', typeof window.app);
} catch (e) {
  console.error('❌ JS Execution Error:', e);
}
