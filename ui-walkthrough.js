const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const INDEX = path.join(__dirname, 'index.html');
const html = fs.readFileSync(INDEX, 'utf8');

const viewsToCheck = [
  'dashboard','costing','crm','quotations','sales','mrp','inventory','purchase','warehouse','accounting','invoices','ar','ap','hr','users','qc','analytics','automation'
];

(async () => {
  const vConsole = new VirtualConsole();
  vConsole.on('error', (e) => {});

  const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', virtualConsole: vConsole, pretendToBeVisual: true });
  try { dom.window.scrollTo = function(){}; } catch(e){}

  await new Promise(resolve => {
    dom.window.addEventListener('load', () => setTimeout(resolve, 600));
    setTimeout(resolve, 5000);
  });

  const doc = dom.window.document;
  const app = dom.window.app;
  const state = dom.window.appState;

  const report = [];

  for (const v of viewsToCheck) {
    try {
      dom.window.navigateTo(v);
      await new Promise(r => setTimeout(r, 300));
      const panel = doc.getElementById('view-' + v);
      const visible = panel && panel.style && panel.style.display !== 'none';
      const checks = { view: v, visible };

      // basic content checks
      if (v === 'dashboard') {
        checks.kpis = !!doc.getElementById('dashReelValue');
      }
      if (v === 'costing') {
        const cad = doc.getElementById('cadBoxContainer');
        checks.cad = !!(cad && /<svg/.test(cad.innerHTML));
      }
      if (v === 'crm') checks.table = !!doc.getElementById('crmTableBody');
      if (v === 'quotations') checks.table = !!doc.getElementById('quotationsTableBody');
      if (v === 'sales') checks.table = !!doc.getElementById('salesTableBody');
      if (v === 'mrp') checks.machines = !!doc.getElementById('mrpMachineGrid');
      if (v === 'inventory') checks.table = !!doc.getElementById('inventoryTableBody');
      if (v === 'hr') checks.table = !!doc.getElementById('hrTableBody');
      if (v === 'users') {
        checks.table = !!doc.getElementById('usersTableBody');
        // ensure renderUsersTable runs
        if (app && typeof app.renderUsersTable === 'function') app.renderUsersTable();
        await new Promise(r => setTimeout(r, 120));
        const usersCount = state && typeof state.getUsers === 'function' ? state.getUsers().length : null;
        checks.usersCount = usersCount;
        const usersTbody = doc.getElementById('usersTableBody');
        checks.usersRows = usersTbody ? usersTbody.children.length : 0;
      }

      report.push(checks);
    } catch (e) {
      report.push({view: v, error: String(e)});
    }
  }

  // summarize
  console.log('UI WALKTHROUGH REPORT:');
  report.forEach(r => console.log(JSON.stringify(r)));

  // write report file
  fs.writeFileSync(path.join(__dirname, 'ui-walkthrough-report.json'), JSON.stringify(report, null, 2));
  console.log('\nReport written to ui-walkthrough-report.json');
})();
