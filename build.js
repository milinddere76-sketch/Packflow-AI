const fs = require('fs');

// Combine CSS
const cssFiles = ['css/main.css', 'css/components.css', 'css/modules.css'];
const cssContent = cssFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n\n/* --- END CSS MODULE --- */\n\n');

// Combine JS
const jsFiles = [
  'js/mock-data.js',
  'js/state.js',
  'js/costing-calculator.js',
  'js/accounting-engine.js',
  'js/mrp-engine.js',
  'js/automation-engine.js',
  'js/ai-engine.js',
  'js/pdf-generator.js',
  'js/app.js'
];
const jsBundle = jsFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n\n/* --- END MODULE --- */\n\n');

const htmlTemplate = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PackFlow AI ERP - Corrugated Packaging Enterprise System</title>

  <!-- Complete Embedded ERP Stylesheet (Zero External Dependencies) -->
  <style>
${cssContent}
  </style>

  <!-- Instant Inline Global Handlers (Zero-Dependency) -->
  <script>
    window.navigateTo = function(viewId) {
      try {
        var navItems = document.querySelectorAll("#sidebarNav .nav-item");
        for (var i = 0; i < navItems.length; i++) {
          var item = navItems[i];
          if (item.getAttribute("data-view") === viewId) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        }

        var topSelector = document.getElementById("topbarModuleSelector");
        if (topSelector) topSelector.value = viewId;

        var panels = document.querySelectorAll(".erp-view-panel");
        var targetFound = false;
        for (var j = 0; j < panels.length; j++) {
          var panel = panels[j];
          if (panel.id === "view-" + viewId) {
            panel.style.display = "block";
            targetFound = true;
          } else {
            panel.style.display = "none";
          }
        }

        if (!targetFound && panels.length > 0) {
          var dash = document.getElementById("view-dashboard");
          if (dash) dash.style.display = "block";
        }

        if (window.app) {
          window.app.currentView = viewId;
          if (typeof window.app.refreshModuleView === "function") window.app.refreshModuleView(viewId);
        }

        window.scrollTo(0, 0);
      } catch (err) {
        console.error("navigateTo error:", err);
      }
    };

    window.convertCostingToQuotation = function() {
      if (window.app && typeof window.app.convertCostingToQuotation === "function") {
        window.app.convertCostingToQuotation();
      }
    };

    window.showAddCustomerModal = function() {
      if (window.app && typeof window.app.showAddCustomerModal === "function") window.app.showAddCustomerModal();
    };
    window.showAddReelModal = function() {
      if (window.app && typeof window.app.showAddReelModal === "function") window.app.showAddReelModal();
    };
    window.showAddPOModal = function() {
      if (window.app && typeof window.app.showAddPOModal === "function") window.app.showAddPOModal();
    };
    window.showAddReceiptModal = function() {
      if (window.app && typeof window.app.showAddReceiptModal === "function") window.app.showAddReceiptModal();
    };
    window.showAddEmployeeModal = function() {
      if (window.app && typeof window.app.showAddEmployeeModal === "function") window.app.showAddEmployeeModal();
    };
    window.showAddQCModal = function() {
      if (window.app && typeof window.app.showAddQCModal === "function") window.app.showAddQCModal();
    };
    window.showAddRuleModal = function() {
      if (window.app && typeof window.app.showAddRuleModal === "function") window.app.showAddRuleModal();
    };
  </script>
</head>
<body>
  <div id="app">
    <!-- Sidebar Navigation -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="logo-icon">P</div>
        <div class="logo-text">PackFlow AI ERP</div>
      </div>

      <div class="sidebar-nav" id="sidebarNav">
        <div class="nav-section-title">Enterprise ERP Modules</div>
        <div class="nav-item active" data-view="dashboard" onclick="window.navigateTo('dashboard')">
          <i>📊</i> <span>Executive Dashboard</span>
        </div>
        <div class="nav-item" data-view="crm" onclick="window.navigateTo('crm')">
          <i>👥</i> <span>CRM & Customers</span> <span class="nav-badge">4</span>
        </div>
        <div class="nav-item" data-view="quotations" onclick="window.navigateTo('quotations')">
          <i>📝</i> <span>AI Quotation System</span> <span class="nav-badge">2</span>
        </div>
        <div class="nav-item" data-view="costing" onclick="window.navigateTo('costing')">
          <i>📦</i> <span>Corrugated Box Costing</span> <span class="nav-badge">CAD Studio</span>
        </div>
        <div class="nav-item" data-view="sales" onclick="window.navigateTo('sales')">
          <i>🛒</i> <span>Sales Orders</span> <span class="nav-badge">2</span>
        </div>
        <div class="nav-item" data-view="mrp" onclick="window.navigateTo('mrp')">
          <i>⚙️</i> <span>Production Planning (MRP)</span> <span class="nav-badge">2</span>
        </div>
        <div class="nav-item" data-view="inventory" onclick="window.navigateTo('inventory')">
          <i>📜</i> <span>Raw Paper Inventory</span> <span class="nav-badge">5</span>
        </div>
        <div class="nav-item" data-view="purchase" onclick="window.navigateTo('purchase')">
          <i>🛍️</i> <span>Purchase & Vendors</span> <span class="nav-badge">2</span>
        </div>
        <div class="nav-item" data-view="warehouse" onclick="window.navigateTo('warehouse')">
          <i>🚚</i> <span>Warehouse & Dispatch</span> <span class="nav-badge">1</span>
        </div>
        <div class="nav-item" data-view="accounting" onclick="window.navigateTo('accounting')">
          <i>🏛️</i> <span>GST Accounting (India)</span> <span class="nav-badge">GSTR-1</span>
        </div>
        <div class="nav-item" data-view="invoices" onclick="window.navigateTo('invoices')">
          <i>🧾</i> <span>Tax Invoicing System</span> <span class="nav-badge">2</span>
        </div>
        <div class="nav-item" data-view="ar" onclick="window.navigateTo('ar')">
          <i>💰</i> <span>Accounts Receivable</span> <span class="nav-badge">₹8.4L</span>
        </div>
        <div class="nav-item" data-view="ap" onclick="window.navigateTo('ap')">
          <i>💳</i> <span>Accounts Payable</span> <span class="nav-badge">2</span>
        </div>
        <div class="nav-item" data-view="hr" onclick="window.navigateTo('hr')">
          <i>👔</i> <span>HR & Payroll</span> <span class="nav-badge">4</span>
        </div>
        <div class="nav-item" data-view="qc" onclick="window.navigateTo('qc')">
          <i>🔬</i> <span>Quality Control (QC)</span> <span class="nav-badge">2</span>
        </div>
        <div class="nav-item" data-view="analytics" onclick="window.navigateTo('analytics')">
          <i>📈</i> <span>AI Reports & Analytics</span>
        </div>
        <div class="nav-item" data-view="automation" onclick="window.navigateTo('automation')">
          <i>⚡</i> <span>Automation Rules Matrix</span> <span class="nav-badge">3</span>
        </div>
      </div>

      <div class="sidebar-user">
        <div class="user-avatar" id="userAvatar">RS</div>
        <div class="user-info">
          <div class="user-name">Rajesh Sharma</div>
          <select class="user-role-selector" id="roleSelect">
            <option value="Super Admin">Role: Super Admin</option>
            <option value="Director">Role: Director</option>
            <option value="Sales Manager">Role: Sales Manager</option>
            <option value="Production Manager">Role: Production Manager</option>
            <option value="Accountant">Role: Accountant</option>
            <option value="Quality Inspector">Role: Quality Inspector</option>
            <option value="Dispatch Executive">Role: Dispatch Executive</option>
          </select>
        </div>
      </div>
    </aside>

    <!-- Main Wrapper -->
    <main class="main-wrapper">
      <!-- Topbar Header -->
      <header class="topbar">
        <div class="topbar-left">
          <button class="sidebar-toggle" id="mobileMenuToggle">
            <i>≡</i>
          </button>

          <!-- Topbar Quick Module Dropdown -->
          <select class="module-select-dropdown" id="topbarModuleSelector" onchange="window.navigateTo(this.value)">
            <option value="dashboard" selected>📊 Executive Dashboard</option>
            <option value="costing">📦 Corrugated Box Costing (CAD)</option>
            <option value="crm">👥 CRM & Customer Database</option>
            <option value="quotations">📝 AI Quotations System</option>
            <option value="sales">🛒 Sales Orders</option>
            <option value="mrp">⚙️ Production Planning (MRP)</option>
            <option value="inventory">📜 Raw Paper Inventory</option>
            <option value="purchase">🛍️ Purchase & Vendors</option>
            <option value="warehouse">🚚 Warehouse & Dispatch</option>
            <option value="accounting">🏛️ GST Accounting (India)</option>
            <option value="invoices">🧾 Tax Invoicing System</option>
            <option value="ar">💰 Accounts Receivable (AR)</option>
            <option value="ap">💳 Accounts Payable (AP)</option>
            <option value="hr">👔 HR & Payroll</option>
            <option value="qc">🔬 Quality Control (QC)</option>
            <option value="analytics">📈 AI Reports & Analytics</option>
            <option value="automation">⚡ Automation Rules Matrix</option>
          </select>
          
          <div class="plant-badge">
            <i style="color: var(--accent-cyan);">🏢</i>
            <select id="plantSelect" style="background: transparent; border: none; color: inherit; font-size: inherit; outline: none; cursor: pointer;">
              <option value="P1">Plant 1 - Pune Mega Unit</option>
              <option value="P2">Plant 2 - Gujarat Unit</option>
            </select>
          </div>

          <div class="search-box">
            <i>🔍</i>
            <input type="text" id="globalSearchInput" placeholder="Search orders, boxes, GSTIN, paper reels...">
          </div>
        </div>

        <div class="topbar-right">
          <button class="ai-assistant-trigger" id="aiTriggerBtn">
            <i>✨</i>
            <span>BoxBrain AI</span>
          </button>

          <button class="topbar-btn" title="System Notifications">
            <i>🔔</i>
            <span class="badge-dot"></span>
          </button>

          <button class="topbar-btn" onclick="document.documentElement.getAttribute('data-theme') === 'dark' ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark')" title="Toggle Theme">
            <i>☀️</i>
          </button>
        </div>
      </header>

      <!-- Page Content Display (Pre-Rendered View Panels) -->
      <section class="content-area" id="mainContent">
        
        <!-- PANEL 1: DASHBOARD -->
        <div id="view-dashboard" class="erp-view-panel">
          <div class="module-toolbar">
            <div class="breadcrumb-list">
              <a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a>
              <span class="breadcrumb-separator">/</span>
              <span style="color:var(--text-primary); font-weight:600;">Executive Dashboard</span>
            </div>
            <div class="stats-strip">
              <div class="stat-item"><span style="color:var(--text-muted);">Active Plant:</span> <strong>Plant 1 (Pune)</strong></div>
              <div class="stat-item"><span style="color:var(--text-muted);">Financial Year:</span> <strong>2026-2027</strong></div>
              <div class="stat-item"><span style="color:var(--text-muted);">GSTIN:</span> <strong>27AAACP1234F1Z9</strong></div>
            </div>
          </div>

          <div class="page-header">
            <div class="page-title-group">
              <h1>Executive Operations Dashboard</h1>
              <p>Real-time factory metrics, revenue performance, and shop floor corrugation OEE.</p>
            </div>
            <div class="page-actions">
              <button class="btn btn-secondary" onclick="window.pdfGenerator ? window.pdfGenerator.generateDocument('Invoice', {}) : null"><i>🖨️</i> Export Daily PDF Report</button>
              <button class="btn btn-primary" onclick="window.navigateTo('costing')"><i>➕</i> New Box Costing</button>
            </div>
          </div>

          <div class="kpi-grid">
            <div class="kpi-card" onclick="window.navigateTo('invoices')" style="cursor:pointer;">
              <div class="kpi-header"><span class="kpi-title">Monthly Sales Revenue</span><div class="kpi-icon blue"><i>💰</i></div></div>
              <div class="kpi-value">₹28.50 Lakhs</div>
              <div class="kpi-footer"><span class="trend-badge up">▲ +14.2%</span><span class="kpi-footer-text">Target: ₹25.0L</span></div>
            </div>
            <div class="kpi-card" onclick="window.navigateTo('ar')" style="cursor:pointer;">
              <div class="kpi-header"><span class="kpi-title">Customer Outstanding</span><div class="kpi-icon rose"><i>💳</i></div></div>
              <div class="kpi-value">₹27.35 Lakhs</div>
              <div class="kpi-footer"><span class="trend-badge down">⏱️ 4 Debtors</span><span class="kpi-footer-text">> 30 Days</span></div>
            </div>
            <div class="kpi-card" onclick="window.navigateTo('mrp')" style="cursor:pointer;">
              <div class="kpi-header"><span class="kpi-title">Corrugator Line OEE</span><div class="kpi-icon emerald"><i>⚡</i></div></div>
              <div class="kpi-value">88.5%</div>
              <div class="kpi-footer"><span class="trend-badge up">✓ Optimal</span><span class="kpi-footer-text">145 MPM</span></div>
            </div>
            <div class="kpi-card" onclick="window.navigateTo('inventory')" style="cursor:pointer;">
              <div class="kpi-header"><span class="kpi-title">Raw Paper Inventory</span><div class="kpi-icon amber"><i>📜</i></div></div>
              <div class="kpi-value" id="dashReelValue">4.43 Tonnes</div>
              <div class="kpi-footer"><span class="trend-badge up">ℹ️ Kraft Reels</span><span class="kpi-footer-text">FIFO Stock</span></div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 2fr 1fr; gap: 1rem; margin-top: 1rem;">
            <div class="card">
              <div class="card-header"><div class="card-title">📈 Financial Revenue & COGS Trend</div></div>
              <div class="card-body">
                <svg viewBox="0 0 500 150" style="width:100%; height:150px;">
                  <polyline points="20,130 90,90 160,110 230,60 300,75 370,40 440,20" fill="none" stroke="#3b82f6" stroke-width="3"/>
                  <polyline points="20,140 90,115 160,125 230,85 300,95 370,65 440,50" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                  <circle cx="440" cy="20" r="5" fill="#3b82f6"/>
                  <text x="445" y="25" fill="#9ca3af" font-size="10">₹28.5L Revenue</text>
                </svg>
              </div>
            </div>

            <div class="card">
              <div class="card-header"><div class="card-title">⚡ Shop Floor Machine Status</div></div>
              <div class="card-body">
                <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span>5-Ply Corrugator Line 1</span>
                    <span class="status-pill success">145 MPM</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span>Flexo Printer Slotter 1</span>
                    <span class="status-pill success">180 BPM</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span>Automatic Folder Gluer</span>
                    <span class="status-pill warning">Setup</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span>Rotary Die Cutter 2</span>
                    <span class="status-pill success">210 BPM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PANEL 2: CRM & CUSTOMERS -->
        <div id="view-crm" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar">
            <div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">CRM & Customers</span></div>
          </div>
          <div class="page-header">
            <div class="page-title-group"><h1>CRM & Customer Management</h1><p>GSTIN auto-validation, credit terms, and customer ledger statements.</p></div>
            <div class="page-actions"><button class="btn btn-primary" onclick="window.showAddCustomerModal()"><i>👤</i> Add New Customer</button></div>
          </div>
          <div class="card">
            <div class="card-body" style="padding:0;">
              <table class="data-table">
                <thead><tr><th>Customer ID</th><th>Company Name</th><th>GSTIN</th><th>Location</th><th>Contact Person</th><th>Credit Limit</th><th>Outstanding</th><th>Action</th></tr></thead>
                <tbody id="crmTableBody">
                  <tr><td><strong>CUST-1001</strong></td><td>Amazon Seller Services India Pvt Ltd</td><td><span class="reel-badge">27AAACA4321A1Z8</span></td><td>Mumbai, MH</td><td>Rahul Sharma<br><small style="color:var(--text-muted);">+91 98200 12345</small></td><td>₹50,000,000</td><td style="color:var(--accent-rose); font-weight:700;">₹1,850,000</td><td><button class="btn btn-sm btn-secondary">Ledger PDF</button></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- PANEL 3: BOX COSTING CAD STUDIO -->
        <div id="view-costing" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar">
            <div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Box Costing CAD Studio</span></div>
          </div>
          <div class="page-header">
            <div class="page-title-group"><h1>Corrugated Box Costing Engineering & CAD Studio</h1><p>Real-time sheet sizing, 3D CAD wireframe, deckle optimization, and profit calculation.</p></div>
            <div class="page-actions">
              <button class="btn btn-primary" id="btnSaveQuotation" onclick="window.convertCostingToQuotation(); return false;"><i>📝</i> Convert to Quotation</button>
            </div>
          </div>
          <div class="box-studio-grid">
            <div class="card">
              <div class="card-header"><div class="card-title">📐 Box Specifications</div></div>
              <div class="card-body">
                <div class="form-group"><label class="form-label">FEFCO Box Style</label><select class="form-control" id="costFefco"><option value="FEFCO 0201">FEFCO 0201 (RSC Slotted Box)</option><option value="FEFCO 0200">FEFCO 0200 (HSC Open Top)</option><option value="FEFCO 0427">FEFCO 0427 (Die-Cut Mailer)</option></select></div>
                <div class="form-group"><label class="form-label">Box Dimensions L × W × H (mm)</label><div style="display:flex; gap:0.5rem;"><input type="number" class="form-control" id="costLength" value="300" placeholder="Length"><input type="number" class="form-control" id="costWidth" value="200" placeholder="Width"><input type="number" class="form-control" id="costHeight" value="150" placeholder="Height"></div></div>
                <div class="form-group"><label class="form-label">Ply Selection</label><select class="form-control" id="costPly"><option value="3">3-Ply Single Wall</option><option value="5" selected>5-Ply Double Wall</option><option value="7">7-Ply Heavy Duty</option></select></div>
                
                <div class="form-group">
                  <label class="form-label">Paper Layer GSM & BF</label>
                  <div style="display:flex; flex-direction:column; gap:0.35rem;">
                    <div style="display:flex; gap:0.5rem; align-items:center;"><span style="font-size:0.75rem; width:70px;">Top Liner:</span><input type="number" class="form-control" id="gsm0" value="180" placeholder="GSM"><input type="number" class="form-control" id="bf0" value="24" placeholder="BF"></div>
                    <div style="display:flex; gap:0.5rem; align-items:center;"><span style="font-size:0.75rem; width:70px;">Flute 1:</span><input type="number" class="form-control" id="gsm1" value="140" placeholder="GSM"><input type="number" class="form-control" id="bf1" value="22" placeholder="BF"></div>
                    <div style="display:flex; gap:0.5rem; align-items:center;"><span style="font-size:0.75rem; width:70px;">Mid Liner:</span><input type="number" class="form-control" id="gsm2" value="140" placeholder="GSM"><input type="number" class="form-control" id="bf2" value="22" placeholder="BF"></div>
                    <div style="display:flex; gap:0.5rem; align-items:center;"><span style="font-size:0.75rem; width:70px;">Flute 2:</span><input type="number" class="form-control" id="gsm3" value="140" placeholder="GSM"><input type="number" class="form-control" id="bf3" value="22" placeholder="BF"></div>
                    <div style="display:flex; gap:0.5rem; align-items:center;"><span style="font-size:0.75rem; width:70px;">Inner Liner:</span><input type="number" class="form-control" id="gsm4" value="140" placeholder="GSM"><input type="number" class="form-control" id="bf4" value="22" placeholder="BF"></div>
                  </div>
                </div>

                <div class="form-group"><label class="form-label">Order Quantity & Margin %</label><div style="display:flex; gap:0.5rem;"><input type="number" class="form-control" id="costQty" value="5000" placeholder="Qty"><input type="number" class="form-control" id="costMargin" value="18" placeholder="Margin %"></div></div>
              </div>
            </div>
            <div class="card">
              <div class="card-header"><div class="card-title">🎨 3D Wireframe & Flute Wave Studio</div></div>
              <div class="card-body">
                <div class="cad-box-container" id="cadBoxContainer"></div>
                <div style="margin-top: 1rem;"><h4 style="font-size:0.8rem; font-weight:700; color:var(--text-secondary);">Flute Layer Cross-Section</h4><div id="fluteWaveContainer"></div></div>
              </div>
            </div>
            <div class="card">
              <div class="card-header"><div class="card-title">💰 Costing Summary</div></div>
              <div class="card-body">
                <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
                  <div style="display:flex; justify-content:space-between;"><span>Sheet Cut Size:</span><strong id="outSheetSize">1040 × 350 mm</strong></div>
                  <div style="display:flex; justify-content:space-between;"><span>Optimum Reel (Deckle):</span><strong id="outDeckle">44 Inches (2.1% trim)</strong></div>
                  <div style="display:flex; justify-content:space-between;"><span>Box Weight:</span><strong id="outWeight">0.342 kg</strong></div>
                  <div style="display:flex; justify-content:space-between;"><span>Bursting Strength:</span><strong id="outBS">15.8 kg/cm²</strong></div>
                  <hr style="border:none; border-top:1px solid var(--border-color);">
                  <div style="display:flex; justify-content:space-between;"><span>Raw Paper Cost:</span><span id="outPaperCost">₹22.45</span></div>
                  <div style="display:flex; justify-content:space-between;"><span>Conversion & Overheads:</span><span id="outConversion">₹6.15</span></div>
                  <div style="display:flex; justify-content:space-between; font-weight:700;"><span>Total Cost Price / Box:</span><span id="outCostPrice" style="color:var(--accent-amber);">₹28.60</span></div>
                  <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:800; border-top:2px solid var(--border-color); padding-top:0.5rem;"><span>Selling Price / Box:</span><span id="outSellingPrice" style="color:var(--accent-emerald);">₹33.75</span></div>
                  <div style="display:flex; justify-content:space-between; color:var(--text-muted); font-size:0.8rem;"><span>Grand Total (18% GST):</span><span id="outGrandTotal">₹39.82</span></div>
                  <div style="background:var(--bg-tertiary); padding:0.75rem; border-radius:var(--radius-md); text-align:center;"><div style="font-size:0.75rem; color:var(--text-secondary);">Total Order Profit</div><div style="font-size:1.25rem; font-weight:800; color:var(--accent-cyan);" id="outTotalProfit">₹25,750</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PANEL 4: QUOTATIONS -->
        <div id="view-quotations" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">AI Quotations</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>AI Quotation Management</h1><p>Quotation creation, box formulas, and instant conversion to Sales Orders.</p></div><div class="page-actions"><button class="btn btn-primary" onclick="window.navigateTo('costing')"><i>📦</i> Open Costing Calculator</button></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Quotation Ref</th><th>Date</th><th>Customer</th><th>Box Specs</th><th>Qty</th><th>Grand Total</th><th>Status</th><th>Action</th></tr></thead><tbody id="quotationsTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 5: SALES ORDERS -->
        <div id="view-sales" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Sales Orders</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>Sales Orders Pipeline</h1><p>Order tracking: Quotation → Sales Order → Production → Dispatch → Invoice.</p></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>SO Ref</th><th>Date</th><th>Customer</th><th>PO Number</th><th>Box Description</th><th>Ordered</th><th>Pending</th><th>Status</th></tr></thead><tbody id="salesTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 6: PRODUCTION PLANNING MRP -->
        <div id="view-mrp" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Production Planning (MRP)</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>Production Planning & MRP Shop Floor Board</h1><p>Live corrugation machines, job scheduling, OEE monitoring, and scrap logging.</p></div></div>
          
          <h3 style="font-size:1rem; font-weight:700; margin-bottom:0.75rem; color:var(--text-primary);">⚡ Corrugation Shop Floor Machines</h3>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; margin-bottom:1.5rem;" id="mrpMachineGrid"></div>

          <div class="card"><div class="card-header"><div class="card-title">⚙️ Active Production Job Cards Execution</div></div><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Job ID</th><th>SO Ref</th><th>Customer</th><th>Sheet Cut Size</th><th>Deckle Used</th><th>Target Qty</th><th>Produced</th><th>Status</th><th>Action</th></tr></thead><tbody id="mrpJobTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 7: RAW PAPER INVENTORY -->
        <div id="view-inventory" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Raw Paper Inventory</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>Raw Material Paper Inventory (Kraft Reels)</h1><p>Track paper reels by Reel ID, GSM, BF, Deckle width, Weight, and FIFO reorder alerts.</p></div><div class="page-actions"><button class="btn btn-primary" onclick="window.showAddReelModal()"><i>📜</i> Add Kraft Reel Stock</button></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Reel ID</th><th>GSM</th><th>Burst Factor</th><th>Deckle Width</th><th>Net Weight</th><th>Supplier</th><th>Cost Rate</th></tr></thead><tbody id="inventoryTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 8: PURCHASE & VENDORS -->
        <div id="view-purchase" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Purchase & Vendors</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>Purchase & Vendor Management</h1><p>Purchase requisitions, vendor PO release, and GRN paper receipts.</p></div><div class="page-actions"><button class="btn btn-primary" onclick="window.showAddPOModal()"><i>🛍️</i> Create Purchase Order</button></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>PO Ref</th><th>Date</th><th>Vendor Supplier</th><th>Items Description</th><th>Amount</th><th>Status</th></tr></thead><tbody id="purchaseTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 9: WAREHOUSE & DISPATCH -->
        <div id="view-warehouse" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Warehouse & Dispatch</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>Warehouse & Dispatch Management</h1><p>Finished goods inventory, loading challans, and E-Way bills.</p></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Dispatch Ref</th><th>Date</th><th>Customer Name</th><th>Items</th><th>Vehicle No</th><th>E-Way Bill</th><th>Status</th></tr></thead><tbody id="warehouseTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 10: GST ACCOUNTING -->
        <div id="view-accounting" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">GST Accounting (India)</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>GST Compliant Double-Entry Accounting (India)</h1><p>Real-time ledgers, Profit & Loss statement, and monthly GSTR-1 summaries.</p></div></div>
          <div class="card"><div class="card-body"><table class="data-table"><tr><td>Gross Sales Revenue:</td><td style="text-align:right; font-weight:700;" id="accRevenue">₹2,850,000</td></tr><tr><td>Cost of Goods Sold (Paper + Power):</td><td style="text-align:right; color:var(--accent-rose);" id="accCogs">₹1,760,000</td></tr><tr style="background:var(--bg-tertiary);"><td>Gross Operating Profit:</td><td style="text-align:right; font-weight:800; color:var(--accent-emerald);" id="accProfit">₹1,090,000 (38.2%)</td></tr><tr style="border-top:2px solid var(--border-color);"><td><strong>Net Profit Before Tax:</strong></td><td style="text-align:right; font-weight:800; color:var(--accent-cyan);" id="accNet"><strong>₹862,000</strong></td></tr></table></div></div>
        </div>

        <!-- PANEL 11: TAX INVOICING -->
        <div id="view-invoices" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Tax Invoicing System</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>GST Tax Invoicing System</h1><p>GST-compliant tax invoices with HSN codes, QR placeholders, and printable PDFs.</p></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Invoice No</th><th>Date</th><th>Customer Name</th><th>GSTIN</th><th>HSN Code</th><th>Taxable Value</th><th>Total Amount</th><th>Action</th></tr></thead><tbody id="invoicesTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 12: ACCOUNTS RECEIVABLE AR -->
        <div id="view-ar" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Accounts Receivable</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>Accounts Receivable (Customer Debtors & Aging)</h1><p>Track customer outstanding payments and record payment receipts.</p></div><div class="page-actions"><button class="btn btn-primary" onclick="window.showAddReceiptModal()"><i>💰</i> Record Payment Receipt</button></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Receipt Ref</th><th>Date</th><th>Customer</th><th>Invoice Ref</th><th>Mode</th><th>Amount Received</th></tr></thead><tbody id="arTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 13: ACCOUNTS PAYABLE AP -->
        <div id="view-ap" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Accounts Payable</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>Accounts Payable (Vendor Creditors)</h1><p>Track paper mill bills and payment due dates.</p></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Bill ID</th><th>Vendor Mill</th><th>Mill Bill No</th><th>Bill Date</th><th>Credit Terms</th><th>Amount Due</th><th>Status</th></tr></thead><tbody id="apTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 14: HR PAYROLL -->
        <div id="view-hr" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">HR & Payroll</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>HR Management & Payroll System</h1><p>Employee master directory, attendance tracking, and salary payslips.</p></div><div class="page-actions"><button class="btn btn-primary" onclick="window.showAddEmployeeModal()"><i>👔</i> Add New Employee</button></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Emp ID</th><th>Employee Name</th><th>Department</th><th>Designation</th><th>Shift</th><th>Basic Salary</th><th>Attendance</th><th>Action</th></tr></thead><tbody id="hrTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 15: QUALITY CONTROL QC -->
        <div id="view-qc" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Quality Control (QC)</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>Quality Control & Laboratory Testing</h1><p>Kraft paper Burst Factor (BF) testing, Ring Crush Test (RCT), and moisture %.</p></div><div class="page-actions"><button class="btn btn-primary" onclick="window.showAddQCModal()"><i>🔬</i> Log Paper Test Report</button></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>QC Test ID</th><th>Date</th><th>Item Tested</th><th>Tested GSM</th><th>Tested BF</th><th>Moisture %</th><th>Status</th></tr></thead><tbody id="qcTableBody"></tbody></table></div></div>
        </div>

        <!-- PANEL 16: AI REPORTS & ANALYTICS -->
        <div id="view-analytics" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">AI Reports & Analytics</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>AI Reports & Analytics Dashboard</h1><p>Machine OEE, scrap waste %, customer profitability, and paper consumption.</p></div></div>
          <div class="card"><div class="card-body"><svg viewBox="0 0 400 180" style="width:100%; height:180px;"><rect x="30" y="80" width="45" height="80" fill="#06b6d4" rx="4"/><rect x="105" y="20" width="45" height="140" fill="#3b82f6" rx="4"/><rect x="180" y="110" width="45" height="50" fill="#6366f1" rx="4"/><rect x="255" y="70" width="45" height="90" fill="#8b5cf6" rx="4"/><rect x="330" y="40" width="45" height="120" fill="#f59e0b" rx="4"/><text x="52" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">120GSM</text><text x="127" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">140GSM</text><text x="202" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">150GSM</text><text x="277" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">180GSM</text><text x="352" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">230GSM</text></svg></div></div>
        </div>

        <!-- PANEL 17: AUTOMATION RULES MATRIX -->
        <div id="view-automation" class="erp-view-panel" style="display:none;">
          <div class="module-toolbar"><div class="breadcrumb-list"><a href="#" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a> / <span style="color:var(--text-primary); font-weight:600;">Automation Rules Matrix</span></div></div>
          <div class="page-header"><div class="page-title-group"><h1>No-Code Automation Rules Matrix</h1><p>Trigger-action rules for automated costing, order creation, and inventory alerts.</p></div><div class="page-actions"><button class="btn btn-primary" onclick="window.showAddRuleModal()"><i>⚡</i> Add Automation Rule</button></div></div>
          <div class="card"><div class="card-body" style="padding:0;"><table class="data-table"><thead><tr><th>Rule ID</th><th>Rule Name</th><th>Trigger Condition</th><th>Automated Action</th><th>Status</th></tr></thead><tbody id="automationTableBody"></tbody></table></div></div>
        </div>

      </section>
    </main>

    <!-- BoxBrain AI Assistant Drawer -->
    <div class="ai-drawer" id="aiDrawer">
      <div class="ai-header">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <div class="logo-icon" style="width:30px; height:30px; font-size:0.9rem;">AI</div>
          <strong style="font-size:0.95rem;">BoxBrain AI Assistant</strong>
        </div>
        <button class="modal-close" id="aiCloseBtn">&times;</button>
      </div>

      <div class="ai-messages" id="chatMessages">
        <div class="chat-bubble ai">
          👋 Hi! I am <strong>BoxBrain AI</strong>, your packaging ERP assistant.<br><br>
          Try typing:<br>
          • <em>"Cost a 5 ply box 18x12x10 with 5000 qty"</em><br>
          • <em>"Show paper stock under 1000kg"</em><br>
          • <em>"What is our customer outstanding?"</em>
        </div>
      </div>

      <div class="ai-input-box">
        <input type="text" id="aiInput" placeholder="Ask BoxBrain AI anything...">
        <button class="btn btn-primary" id="aiSendBtn"><i>➔</i></button>
      </div>
    </div>
  </div>

  <!-- Complete Standalone Embedded ERP Engine -->
  <script>
${jsBundle}

// Auto-Bootstrap Guarantee
(function() {
  function startERP() {
    try {
      if (!window.app) {
        window.app = new PackFlowApp();
      }
      window.navigateTo("dashboard");
    } catch (e) {
      console.error("ERP Auto-Bootstrap Error:", e);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startERP);
  } else {
    startERP();
  }
})();
  </script>
</body>
</html>`;

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

fs.writeFileSync('index.html', htmlTemplate);
fs.writeFileSync('launch.html', htmlTemplate);
fs.writeFileSync('public/index.html', htmlTemplate);
fs.writeFileSync('public/launch.html', htmlTemplate);

console.log('Build complete! 100% Functional Bundle written to index.html & public/index.html. Size:', htmlTemplate.length);
