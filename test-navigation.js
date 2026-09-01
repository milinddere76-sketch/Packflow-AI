const fs = require('fs');

// Minimal Browser DOM Mock
global.window = global;
global.localStorage = { getItem: () => null, setItem: () => null };

// DOM Element Mock
function createMockElement(id = '') {
  return {
    id,
    value: '300',
    innerText: '',
    innerHTML: '',
    style: {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    addEventListener: () => {},
    options: [{ text: 'Plant 1 - Pune Mega Unit' }],
    selectedIndex: 0,
    getContext: () => null
  };
}

global.document = {
  readyState: 'complete',
  addEventListener: () => {},
  documentElement: { getAttribute: () => 'dark', setAttribute: () => {} },
  getElementById: (id) => createMockElement(id),
  querySelector: () => createMockElement(),
  querySelectorAll: () => [],
  body: { appendChild: () => {} }
};

// Extract JS from index.html
const html = fs.readFileSync('index.html', 'utf8');
const scriptStart = html.indexOf('<script>') + '<script>'.length;
const scriptEnd = html.lastIndexOf('</script>');
const jsCode = html.substring(scriptStart, scriptEnd);

eval(jsCode);

console.log('--- TESTING ALL 17 ERP MODULE NAVIGATION TABS ---');

const modules = [
  "dashboard", "crm", "quotations", "costing", "sales", "mrp",
  "inventory", "purchase", "warehouse", "accounting", "invoices",
  "ar", "ap", "hr", "qc", "analytics", "automation"
];

let errors = 0;
modules.forEach(mod => {
  try {
    window.app.navigateTo(mod);
    console.log(`✅ Module '${mod}' navigation succeeded!`);
  } catch (err) {
    console.error(`❌ Module '${mod}' navigation FAILED:`, err);
    errors++;
  }
});

console.log(`\nNavigation test complete. Total modules: ${modules.length}, Errors: ${errors}`);
