/* PackFlow AI ERP - Complete 17-Module Enterprise Execution Engine */

// Pure Top-Level Unbreakable Navigation Handler
window.navigateTo = function(viewId) {
  try {
    const navItems = document.querySelectorAll("#sidebarNav .nav-item");
    navItems.forEach(item => {
      if (item.getAttribute("data-view") === viewId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    const topSelector = document.getElementById("topbarModuleSelector");
    if (topSelector) topSelector.value = viewId;

    const panels = document.querySelectorAll(".erp-view-panel");
    let targetFound = false;

    panels.forEach(panel => {
      if (panel.id === `view-${viewId}`) {
        panel.style.display = "block";
        targetFound = true;
      } else {
        panel.style.display = "none";
      }
    });

    if (!targetFound && panels.length > 0) {
      const dash = document.getElementById("view-dashboard");
      if (dash) dash.style.display = "block";
    }

    if (window.app) {
      window.app.currentView = viewId;
      window.app.refreshModuleView(viewId);
    }

    window.scrollTo(0, 0);
  } catch (err) {
    console.error("navigateTo error:", err);
  }
};

class PackFlowApp {
  constructor() {
    this.currentView = "dashboard";
    this.init();
  }

  init() {
    try {
      this.bindEvents();
      this.refreshAllTables();
      this.updateCostingCalc();
      window.navigateTo("dashboard");

      if (window.appState && typeof window.appState.subscribe === "function") {
        window.appState.subscribe(() => {
          this.refreshAllTables();
        });
      }
    } catch (err) {
      console.error("PackFlowApp init error:", err);
    }
  }

  getVal(id, defaultVal) {
    const el = document.getElementById(id);
    return el && el.value !== "" ? parseFloat(el.value) || defaultVal : defaultVal;
  }

  getStr(id, defaultVal) {
    const el = document.getElementById(id);
    return el && el.value ? el.value : defaultVal;
  }

  refreshModuleView(viewId) {
    switch (viewId) {
      case "dashboard": this.renderDashboardWidgets(); break;
      case "crm": this.renderCRMTable(); break;
      case "quotations": this.renderQuotationsTable(); break;
      case "costing": this.updateCostingCalc(); break;
      case "sales": this.renderSalesTable(); break;
      case "mrp": this.renderMRPBoard(); break;
      case "inventory": this.renderInventoryTable(); break;
      case "purchase": this.renderPurchaseTable(); break;
      case "warehouse": this.renderWarehouseTable(); break;
      case "accounting": this.renderAccountingView(); break;
      case "invoices": this.renderInvoicesTable(); break;
      case "ar": this.renderARTable(); break;
      case "ap": this.renderAPTable(); break;
      case "hr": this.renderHRTable(); break;
      case "qc": this.renderQCTable(); break;
      case "analytics": this.renderAnalyticsView(); break;
      case "automation": this.renderAutomationTable(); break;
      default: this.renderDashboardWidgets();
    }
  }

  refreshAllTables() {
    this.renderCRMTable();
    this.renderQuotationsTable();
    this.renderSalesTable();
    this.renderMRPBoard();
    this.renderInventoryTable();
    this.renderPurchaseTable();
    this.renderWarehouseTable();
    this.renderInvoicesTable();
    this.renderARTable();
    this.renderAPTable();
    this.renderHRTable();
    this.renderQCTable();
    this.renderAutomationTable();
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 1: EXECUTIVE DASHBOARD                                              */
  /* -------------------------------------------------------------------------- */
  renderDashboardWidgets() {
    const reels = window.appState ? window.appState.getReels() : [];
    const totalReelKg = reels.reduce((a, b) => a + (b.weightKg || 0), 0);
    const reelValEl = document.getElementById("dashReelValue");
    if (reelValEl) reelValEl.innerText = `${(totalReelKg / 1000).toFixed(2)} Tonnes`;
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 2: CRM & CUSTOMERS                                                  */
  /* -------------------------------------------------------------------------- */
  renderCRMTable() {
    const tbody = document.getElementById("crmTableBody");
    if (!tbody || !window.appState) return;
    const customers = window.appState.getCustomers();

    tbody.innerHTML = customers.map(c => `
      <tr>
        <td><strong>${c.id}</strong></td>
        <td>${c.name}</td>
        <td><span class="reel-badge">${c.gstin}</span></td>
        <td>${c.city}</td>
        <td>${c.contact}<br><small style="color:var(--text-muted);">${c.phone}</small></td>
        <td>₹${(c.creditLimit || 0).toLocaleString('en-IN')}</td>
        <td style="color:var(--accent-rose); font-weight:700;">₹${(c.outstanding || 0).toLocaleString('en-IN')}</td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="window.pdfGenerator ? window.pdfGenerator.generateDocument('Quotation', {customer: '${c.name}'}) : null">
            📄 Ledger PDF
          </button>
        </td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 3: AI QUOTATIONS                                                   */
  /* -------------------------------------------------------------------------- */
  renderQuotationsTable() {
    const tbody = document.getElementById("quotationsTableBody");
    if (!tbody || !window.appState) return;
    const quotations = window.appState.getQuotations();

    tbody.innerHTML = quotations.map(qt => `
      <tr>
        <td><strong>${qt.id}</strong></td>
        <td>${qt.date}</td>
        <td>${qt.customer}</td>
        <td>${qt.boxSpecs}</td>
        <td>${(qt.qty || 0).toLocaleString()} Pcs</td>
        <td><strong>₹${Math.round(qt.grandTotal || qt.totalAmount || 0).toLocaleString('en-IN')}</strong></td>
        <td><span class="status-pill ${qt.status === 'Approved' ? 'success' : 'warning'}">${qt.status}</span></td>
        <td>
          <div style="display:flex; gap:0.35rem;">
            <button class="btn btn-sm btn-secondary" onclick="window.pdfGenerator ? window.pdfGenerator.generateDocument('Quotation', ${JSON.stringify(qt).replace(/"/g, '&quot;')}) : null">PDF</button>
            ${qt.status !== 'Approved' ? `<button class="btn btn-sm btn-success" onclick="window.app.convertQuotationToSO('${qt.id}')">Convert to SO</button>` : ''}
          </div>
        </td>
      </tr>
    `).join('');
  }

  convertQuotationToSO(qtId) {
    if (window.appState) {
      const newSO = window.appState.convertQuotationToSO(qtId);
      if (newSO) {
        this.showToast(`Quotation approved & Sales Order ${newSO.id} generated!`, "success");
        this.refreshAllTables();
        window.navigateTo("sales");
      }
    }
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 4: CORRUGATED BOX CAD COSTING STUDIO                                */
  /* -------------------------------------------------------------------------- */
  updateCostingCalc() {
    try {
      const lengthMm = this.getVal("costLength", 300);
      const widthMm = this.getVal("costWidth", 200);
      const heightMm = this.getVal("costHeight", 150);
      const ply = this.getVal("costPly", 5);
      const fefcoStyle = this.getStr("costFefco", "FEFCO 0201");
      const qtySlab = this.getVal("costQty", 5000);
      const marginPercent = this.getVal("costMargin", 18);

      const layers = [
        { gsm: this.getVal("gsm0", 180), bf: this.getVal("bf0", 24) },
        { gsm: this.getVal("gsm1", 140), bf: this.getVal("bf1", 22) },
        { gsm: this.getVal("gsm2", 140), bf: this.getVal("bf2", 22) },
        { gsm: this.getVal("gsm3", 140), bf: this.getVal("bf3", 22) },
        { gsm: this.getVal("gsm4", 140), bf: this.getVal("bf4", 22) }
      ];

      const res = window.costingEngine ? window.costingEngine.calculateBoxCost({
        lengthMm, widthMm, heightMm, ply, fefcoStyle, layers, qtySlab, marginPercent
      }) : null;

      if (window.costingEngine) {
        const cadBox = document.getElementById("cadBoxContainer");
        const fluteWave = document.getElementById("fluteWaveContainer");
        if (cadBox) cadBox.innerHTML = window.costingEngine.generateBoxCADSVG(lengthMm, widthMm, heightMm, fefcoStyle);
        if (fluteWave) fluteWave.innerHTML = window.costingEngine.generateFluteWaveSVG(ply, layers);
      }

      if (res && res.sheetSpecs) {
        const elSheet = document.getElementById("outSheetSize");
        const elDeckle = document.getElementById("outDeckle");
        const elWeight = document.getElementById("outWeight");
        const elBS = document.getElementById("outBS");
        const elPaperCost = document.getElementById("outPaperCost");
        const elConversion = document.getElementById("outConversion");
        const elCostPrice = document.getElementById("outCostPrice");
        const elSellingPrice = document.getElementById("outSellingPrice");
        const elGrandTotal = document.getElementById("outGrandTotal");
        const elTotalProfit = document.getElementById("outTotalProfit");

        if (elSheet) elSheet.innerText = `${res.sheetSpecs.sheetLengthMm} × ${res.sheetSpecs.sheetWidthMm} mm`;
        if (elDeckle) elDeckle.innerText = `${res.sheetSpecs.selectedDeckleInches}" Reel (${res.sheetSpecs.trimWastePercent}% trim)`;
        if (elWeight) elWeight.innerText = `${res.weightSpecs.boxWeightKg} kg`;
        if (elBS) elBS.innerText = `${res.weightSpecs.estimatedBurstingStrength} kg/cm²`;
        if (elPaperCost) elPaperCost.innerText = `₹${res.costBreakdown.paperCostTotal}`;
        if (elConversion) elConversion.innerText = `₹${res.costBreakdown.totalConversionCost}`;
        if (elCostPrice) elCostPrice.innerText = `₹${res.costBreakdown.totalProductionCostPerBox}`;
        if (elSellingPrice) elSellingPrice.innerText = `₹${res.costBreakdown.sellingPricePerBox}`;
        if (elGrandTotal) elGrandTotal.innerText = `₹${res.costBreakdown.grandTotalPerBox}`;
        if (elTotalProfit) elTotalProfit.innerText = `₹${(res.batchSummary.totalBatchProfit || 0).toLocaleString('en-IN')}`;
      }
    } catch (e) {
      console.warn("Costing calc update error:", e);
    }
  }

  convertCostingToQuotation() {
    try {
      const costPriceEl = document.getElementById("outCostPrice");
      const sellPriceEl = document.getElementById("outSellingPrice");
      const grandTotalEl = document.getElementById("outGrandTotal");

      const unitPrice = sellPriceEl ? parseFloat(sellPriceEl.innerText.replace(/[^0-9.]/g, '')) || 33.75 : 33.75;
      const grandTotalUnit = grandTotalEl ? parseFloat(grandTotalEl.innerText.replace(/[^0-9.]/g, '')) || 39.82 : 39.82;
      const qty = this.getVal("costQty", 5000);
      const lengthMm = this.getVal("costLength", 300);
      const widthMm = this.getVal("costWidth", 200);
      const heightMm = this.getVal("costHeight", 150);
      const ply = this.getVal("costPly", 5);

      const newQt = {
        id: "QT-" + Math.floor(8000 + Math.random() * 1000),
        date: new Date().toISOString().split('T')[0],
        customer: "Amazon Seller Services India Pvt Ltd",
        boxSpecs: `${lengthMm}x${widthMm}x${heightMm} mm (${ply}-Ply Box)`,
        qty: qty,
        unitPrice: unitPrice,
        totalAmount: unitPrice * qty,
        gstAmount: unitPrice * qty * 0.18,
        grandTotal: grandTotalUnit * qty,
        status: "Pending Approval"
      };

      if (window.appState) {
        window.appState.addQuotation(newQt);
      }

      this.renderQuotationsTable();
      this.showToast(`Quotation ${newQt.id} generated & added to system!`, "success");
      window.navigateTo("quotations");
    } catch (err) {
      console.error("convertCostingToQuotation error:", err);
    }
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 5: SALES ORDERS PIPELINE                                            */
  /* -------------------------------------------------------------------------- */
  renderSalesTable() {
    const tbody = document.getElementById("salesTableBody");
    if (!tbody || !window.appState) return;
    const sales = window.appState.getSalesOrders();

    tbody.innerHTML = sales.map(so => `
      <tr>
        <td><strong>${so.id}</strong></td>
        <td>${so.date}</td>
        <td>${so.customer}</td>
        <td><span class="reel-badge">${so.poNumber}</span></td>
        <td>${so.boxName}</td>
        <td>${(so.orderQty || 0).toLocaleString()} Pcs</td>
        <td style="color:var(--accent-amber); font-weight:700;">${(so.pendingQty || 0).toLocaleString()} Pcs</td>
        <td><span class="status-pill ${so.status === 'Dispatched' ? 'success' : 'purple'}">${so.status}</span></td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 6: PRODUCTION PLANNING & MRP SHOP FLOOR BOARD                       */
  /* -------------------------------------------------------------------------- */
  renderMRPBoard() {
    const machines = window.appState ? window.appState.getMachines() : [];
    const jobs = window.appState ? window.appState.getJobCards() : [];

    const macGrid = document.getElementById("mrpMachineGrid");
    if (macGrid) {
      macGrid.innerHTML = machines.map(m => `
        <div class="machine-card ${(m.status || 'idle').toLowerCase()}">
          <div class="machine-header">
            <span class="machine-name">${m.name}</span>
            <button class="btn btn-sm btn-secondary" onclick="window.app.toggleMachine('${m.id}')">Toggle Status</button>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.8rem; color:var(--text-secondary);">Status:</span>
            <span class="status-pill ${m.status === 'Running' ? 'success' : m.status === 'Idle' ? 'warning' : 'danger'}">${m.status}</span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.8rem; color:var(--text-secondary);">Speed:</span>
            <span class="machine-speed">${m.speedMpm} MPM</span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.8rem; color:var(--text-secondary);">OEE:</span>
            <strong style="color:var(--accent-emerald);">${m.oeePercent}%</strong>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width:${m.oeePercent}%;"></div>
          </div>
        </div>
      `).join('');
    }

    const tbody = document.getElementById("mrpJobTableBody");
    if (tbody) {
      tbody.innerHTML = jobs.map(j => `
        <tr>
          <td><strong>${j.id}</strong></td>
          <td>${j.soRef}</td>
          <td>${j.customer}</td>
          <td>${j.sheetSize}</td>
          <td><span class="reel-badge">${j.deckleUsed}</span></td>
          <td>${(j.targetQty || 0).toLocaleString()} Pcs</td>
          <td><strong>${(j.producedQty || 0).toLocaleString()} Pcs</strong></td>
          <td><span class="status-pill ${j.status === 'Completed' ? 'success' : 'info'}">${j.status}</span></td>
          <td>
            <button class="btn btn-sm btn-secondary" onclick="window.pdfGenerator ? window.pdfGenerator.generateDocument('JobCard', ${JSON.stringify(j).replace(/"/g, '&quot;')}) : null">Job Card PDF</button>
          </td>
        </tr>
      `).join('');
    }
  }

  toggleMachine(macId) {
    if (window.appState) {
      window.appState.toggleMachineStatus(macId);
      this.showToast(`Machine ${macId} status updated!`, "info");
      this.renderMRPBoard();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 7: RAW PAPER INVENTORY                                              */
  /* -------------------------------------------------------------------------- */
  renderInventoryTable() {
    const tbody = document.getElementById("inventoryTableBody");
    if (!tbody || !window.appState) return;
    const reels = window.appState.getReels();

    tbody.innerHTML = reels.map(r => `
      <tr>
        <td><strong style="color:var(--accent-blue);">${r.id}</strong></td>
        <td><span class="status-pill info">${r.gsm} GSM</span></td>
        <td><span class="status-pill purple">${r.bf} BF</span></td>
        <td><span class="reel-badge">${r.deckleWidthInches} Inches</span></td>
        <td><strong>${(r.weightKg || 0).toLocaleString()} kg</strong></td>
        <td>${r.supplier}</td>
        <td>₹${r.ratePerKg} / kg</td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 8: PURCHASE & VENDORS                                               */
  /* -------------------------------------------------------------------------- */
  renderPurchaseTable() {
    const tbody = document.getElementById("purchaseTableBody");
    if (!tbody || !window.appState) return;
    const pos = window.appState.getPurchaseOrders();

    tbody.innerHTML = pos.map(p => `
      <tr>
        <td><strong>${p.id}</strong></td>
        <td>${p.date}</td>
        <td>${p.vendor}</td>
        <td>${p.items}</td>
        <td><strong>₹${(p.amount || 0).toLocaleString('en-IN')}</strong></td>
        <td><span class="status-pill ${p.status === 'Received' ? 'success' : 'warning'}">${p.status}</span></td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 9: WAREHOUSE & DISPATCH                                             */
  /* -------------------------------------------------------------------------- */
  renderWarehouseTable() {
    const tbody = document.getElementById("warehouseTableBody");
    if (!tbody || !window.appState) return;
    const dispatch = window.appState.getDispatchNotes();

    tbody.innerHTML = dispatch.map(d => `
      <tr>
        <td><strong>${d.id}</strong></td>
        <td>${d.date}</td>
        <td>${d.customer}</td>
        <td>${d.items}</td>
        <td><span class="reel-badge">${d.vehicleNo}</span></td>
        <td>${d.eWayBill}</td>
        <td><span class="status-pill success">${d.status}</span></td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 10: GST ACCOUNTING (INDIA)                                          */
  /* -------------------------------------------------------------------------- */
  renderAccountingView() {
    const invoices = window.appState ? window.appState.getInvoices() : [];
    const summary = window.accountingEngine ? window.accountingEngine.generateFinancialSummary(invoices, []) : null;

    if (summary) {
      const elRev = document.getElementById("accRevenue");
      const elCogs = document.getElementById("accCogs");
      const elProfit = document.getElementById("accProfit");
      const elNet = document.getElementById("accNet");

      if (elRev) elRev.innerText = `₹${(summary.revenue || 2850000).toLocaleString('en-IN')}`;
      if (elCogs) elCogs.innerText = `₹${(summary.cogs || 1760000).toLocaleString('en-IN')}`;
      if (elProfit) elProfit.innerText = `₹${(summary.grossProfit || 1090000).toLocaleString('en-IN')} (${summary.grossProfitMarginPercent}%)`;
      if (elNet) elNet.innerText = `₹${(summary.netProfit || 862000).toLocaleString('en-IN')}`;
    }
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 11: TAX INVOICING SYSTEM                                           */
  /* -------------------------------------------------------------------------- */
  renderInvoicesTable() {
    const tbody = document.getElementById("invoicesTableBody");
    if (!tbody || !window.appState) return;
    const invoices = window.appState.getInvoices();

    tbody.innerHTML = invoices.map(inv => `
      <tr>
        <td><strong>${inv.invoiceNo}</strong></td>
        <td>${inv.date}</td>
        <td>${inv.customer}</td>
        <td><span class="reel-badge">${inv.gstin}</span></td>
        <td>${inv.hsnCode}</td>
        <td>₹${(inv.taxableValue || 0).toLocaleString('en-IN')}</td>
        <td><strong style="color:var(--accent-emerald);">₹${(inv.totalAmount || 0).toLocaleString('en-IN')}</strong></td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="window.pdfGenerator ? window.pdfGenerator.generateDocument('Invoice', ${JSON.stringify(inv).replace(/"/g, '&quot;')}) : null">Print GST Invoice PDF</button>
        </td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 12: ACCOUNTS RECEIVABLE (AR)                                       */
  /* -------------------------------------------------------------------------- */
  renderARTable() {
    const tbody = document.getElementById("arTableBody");
    if (!tbody || !window.appState) return;
    const receipts = window.appState.getReceipts();

    tbody.innerHTML = receipts.map(r => `
      <tr>
        <td><strong>${r.id}</strong></td>
        <td>${r.date}</td>
        <td>${r.customer}</td>
        <td>${r.invoiceRef}</td>
        <td><span class="status-pill info">${r.mode}</span></td>
        <td><strong style="color:var(--accent-emerald);">₹${(r.amount || 0).toLocaleString('en-IN')}</strong></td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 13: ACCOUNTS PAYABLE (AP)                                          */
  /* -------------------------------------------------------------------------- */
  renderAPTable() {
    const tbody = document.getElementById("apTableBody");
    if (!tbody || !window.appState) return;
    const bills = window.appState.getVendorBills();

    tbody.innerHTML = bills.map(b => `
      <tr>
        <td><strong>${b.id}</strong></td>
        <td>${b.vendor}</td>
        <td><span class="reel-badge">${b.billNo}</span></td>
        <td>${b.date}</td>
        <td>${b.dueDays} Days Net</td>
        <td><strong style="color:var(--accent-amber);">₹${(b.amount || 0).toLocaleString('en-IN')}</strong></td>
        <td><span class="status-pill ${b.status === 'Paid' ? 'success' : 'danger'}">${b.status}</span></td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 14: HR & PAYROLL                                                    */
  /* -------------------------------------------------------------------------- */
  renderHRTable() {
    const tbody = document.getElementById("hrTableBody");
    if (!tbody || !window.appState) return;
    const employees = window.appState.getEmployees();

    tbody.innerHTML = employees.map(e => `
      <tr>
        <td><strong>${e.id}</strong></td>
        <td>${e.name}</td>
        <td><span class="status-pill info">${e.dept}</span></td>
        <td>${e.designation}</td>
        <td>${e.shift}</td>
        <td>₹${(e.basicSalary || 0).toLocaleString('en-IN')}</td>
        <td><span class="status-pill ${e.attendance === 'Present' ? 'success' : 'danger'}">${e.attendance}</span></td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="window.pdfGenerator ? window.pdfGenerator.generateDocument('SalarySlip', ${JSON.stringify(e).replace(/"/g, '&quot;')}) : null">Salary Slip PDF</button>
        </td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 15: QUALITY CONTROL (QC)                                            */
  /* -------------------------------------------------------------------------- */
  renderQCTable() {
    const tbody = document.getElementById("qcTableBody");
    if (!tbody || !window.appState) return;
    const logs = window.appState.getQCLogs();

    tbody.innerHTML = logs.map(q => `
      <tr>
        <td><strong>${q.id}</strong></td>
        <td>${q.date}</td>
        <td>${q.item}</td>
        <td>${q.testedGsm} GSM</td>
        <td><strong style="color:var(--accent-emerald);">${q.testedBf} BF</strong></td>
        <td>${q.moisture}</td>
        <td><span class="status-pill success">${q.status}</span></td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 16: AI REPORTS & ANALYTICS                                          */
  /* -------------------------------------------------------------------------- */
  renderAnalyticsView() {
    // Rendered via SVG vector charts
  }

  /* -------------------------------------------------------------------------- */
  /* MODULE 17: AUTOMATION RULES MATRIX                                         */
  /* -------------------------------------------------------------------------- */
  renderAutomationTable() {
    const tbody = document.getElementById("automationTableBody");
    if (!tbody || !window.appState) return;
    const rules = window.appState.getAutomationRules();

    tbody.innerHTML = rules.map(r => `
      <tr>
        <td><strong>${r.id}</strong></td>
        <td>${r.name}</td>
        <td><span class="status-pill info">${r.trigger}</span></td>
        <td>${r.action}</td>
        <td><span class="status-pill success">${r.status}</span></td>
      </tr>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* CUSTOM HTML MODAL OVERLAYS (UNBLOCKABLE)                                   */
  /* -------------------------------------------------------------------------- */
  openCustomModal(title, bodyHTML, onSave) {
    const existing = document.getElementById("customModalOverlay");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "customModalOverlay";
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(4px);
      z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 1rem;
    `;

    overlay.innerHTML = `
      <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; width: 100%; max-width: 520px; box-shadow: var(--shadow-xl); overflow: hidden; animation: fadeIn 0.2s ease;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border-color); background: var(--bg-tertiary);">
          <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${title}</h3>
          <button id="modalCloseX" style="background: transparent; border: none; color: var(--text-secondary); font-size: 1.5rem; cursor: pointer;">&times;</button>
        </div>
        <div style="padding: 1.5rem; max-height: 70vh; overflow-y: auto;">
          ${bodyHTML}
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; padding: 1rem 1.5rem; border-top: 1px solid var(--border-color); background: var(--bg-tertiary);">
          <button id="modalBtnCancel" class="btn btn-secondary">Cancel</button>
          <button id="modalBtnSubmit" class="btn btn-primary">Save Data</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("modalCloseX").onclick = () => overlay.remove();
    document.getElementById("modalBtnCancel").onclick = () => overlay.remove();
    document.getElementById("modalBtnSubmit").onclick = () => {
      onSave();
      overlay.remove();
    };
  }

  showAddCustomerModal() {
    const form = `
      <div class="form-group"><label class="form-label">Company Name</label><input type="text" id="mCustName" class="form-control" value="Reliance Retail Logistics"></div>
      <div class="form-group"><label class="form-label">GSTIN Number</label><input type="text" id="mCustGstin" class="form-control" value="27AAACR8899D1Z2"></div>
      <div class="form-group"><label class="form-label">City / Location</label><input type="text" id="mCustCity" class="form-control" value="Mumbai, MH"></div>
      <div class="form-group"><label class="form-label">Contact Person</label><input type="text" id="mCustContact" class="form-control" value="Suresh Mehta"></div>
      <div class="form-group"><label class="form-label">Mobile Phone</label><input type="text" id="mCustPhone" class="form-control" value="+91 98990 11223"></div>
      <div class="form-group"><label class="form-label">Credit Limit (INR)</label><input type="number" id="mCustCredit" class="form-control" value="2500000"></div>
    `;
    this.openCustomModal("Add New Customer Master", form, () => {
      const name = document.getElementById("mCustName").value;
      const gstin = document.getElementById("mCustGstin").value;
      const city = document.getElementById("mCustCity").value;
      const contact = document.getElementById("mCustContact").value;
      const phone = document.getElementById("mCustPhone").value;
      const creditLimit = parseFloat(document.getElementById("mCustCredit").value) || 2000000;

      if (window.appState) {
        window.appState.addCustomer({
          name, gstin, pan: gstin ? gstin.substring(2, 12) : "AAACP1234F",
          city, contact, phone, email: "info@" + name.toLowerCase().replace(/[^a-z]/g, '') + ".com",
          creditLimit, outstanding: 0, paymentTerms: "30 Days Net"
        });
      }
      this.showToast(`Customer ${name} added successfully!`, "success");
      this.renderCRMTable();
      window.navigateTo("crm");
    });
  }

  showAddReelModal() {
    const form = `
      <div class="form-group"><label class="form-label">Paper GSM</label><input type="number" id="mReelGsm" class="form-control" value="180"></div>
      <div class="form-group"><label class="form-label">Burst Factor (BF)</label><input type="number" id="mReelBf" class="form-control" value="24"></div>
      <div class="form-group"><label class="form-label">Deckle Width (Inches)</label><input type="number" id="mReelWidth" class="form-control" value="52"></div>
      <div class="form-group"><label class="form-label">Net Reel Weight (Kg)</label><input type="number" id="mReelWeight" class="form-control" value="1200"></div>
      <div class="form-group"><label class="form-label">Paper Mill Supplier</label><input type="text" id="mReelSupplier" class="form-control" value="West Coast Paper Mills"></div>
    `;
    this.openCustomModal("Add Kraft Paper Reel Stock", form, () => {
      const gsm = parseFloat(document.getElementById("mReelGsm").value) || 180;
      const bf = parseFloat(document.getElementById("mReelBf").value) || 24;
      const widthInches = parseFloat(document.getElementById("mReelWidth").value) || 52;
      const weightKg = parseFloat(document.getElementById("mReelWeight").value) || 1200;
      const supplier = document.getElementById("mReelSupplier").value;

      if (window.appState) {
        window.appState.addReel({
          gsm, bf, deckleWidthInches: widthInches, weightKg,
          warehouse: "Raw Paper Yard A", supplier, ratePerKg: 38
        });
      }
      this.showToast(`Kraft Reel added to stock inventory!`, "success");
      this.renderInventoryTable();
      window.navigateTo("inventory");
    });
  }

  showAddPOModal() {
    const form = `
      <div class="form-group"><label class="form-label">Vendor Name</label><input type="text" id="mPoVendor" class="form-control" value="ITC Paperboards Ltd"></div>
      <div class="form-group"><label class="form-label">Items Description</label><input type="text" id="mPoItems" class="form-control" value="Kraft Paper Reel 180GSM 24BF (5 Tonnes)"></div>
      <div class="form-group"><label class="form-label">Total Value (INR)</label><input type="number" id="mPoAmount" class="form-control" value="190000"></div>
    `;
    this.openCustomModal("Create Purchase Order", form, () => {
      const vendor = document.getElementById("mPoVendor").value;
      const items = document.getElementById("mPoItems").value;
      const amount = parseFloat(document.getElementById("mPoAmount").value) || 190000;

      if (window.appState) {
        window.appState.addPurchaseOrder({
          date: new Date().toISOString().split('T')[0],
          vendor, items, amount, status: "Ordered"
        });
      }
      this.showToast(`Purchase Order created successfully!`, "success");
      this.renderPurchaseTable();
      window.navigateTo("purchase");
    });
  }

  showAddReceiptModal() {
    const form = `
      <div class="form-group"><label class="form-label">Customer Name</label><input type="text" id="mRctCust" class="form-control" value="Amazon Seller Services India Pvt Ltd"></div>
      <div class="form-group"><label class="form-label">Invoice Reference</label><input type="text" id="mRctInv" class="form-control" value="INV-2026-0089"></div>
      <div class="form-group"><label class="form-label">Amount Received (INR)</label><input type="number" id="mRctAmount" class="form-control" value="150000"></div>
      <div class="form-group"><label class="form-label">Payment Mode</label><input type="text" id="mRctMode" class="form-control" value="NEFT Bank Transfer"></div>
    `;
    this.openCustomModal("Record Payment Collection", form, () => {
      const customer = document.getElementById("mRctCust").value;
      const invoiceRef = document.getElementById("mRctInv").value;
      const amount = parseFloat(document.getElementById("mRctAmount").value) || 150000;
      const mode = document.getElementById("mRctMode").value;

      if (window.appState) {
        window.appState.addReceipt({
          date: new Date().toISOString().split('T')[0],
          customer, invoiceRef, amount, mode
        });
      }
      this.showToast(`Payment receipt recorded & ledger updated!`, "success");
      this.renderARTable();
      window.navigateTo("ar");
    });
  }

  showAddEmployeeModal() {
    const form = `
      <div class="form-group"><label class="form-label">Employee Full Name</label><input type="text" id="mEmpName" class="form-control" value="Deepak Joshi"></div>
      <div class="form-group"><label class="form-label">Department</label><input type="text" id="mEmpDept" class="form-control" value="Production"></div>
      <div class="form-group"><label class="form-label">Designation</label><input type="text" id="mEmpDesig" class="form-control" value="Senior Machine Operator"></div>
      <div class="form-group"><label class="form-label">Basic Monthly Salary (INR)</label><input type="number" id="mEmpSalary" class="form-control" value="35000"></div>
    `;
    this.openCustomModal("Add New Employee Master", form, () => {
      const name = document.getElementById("mEmpName").value;
      const dept = document.getElementById("mEmpDept").value;
      const designation = document.getElementById("mEmpDesig").value;
      const basicSalary = parseFloat(document.getElementById("mEmpSalary").value) || 35000;

      if (window.appState) {
        window.appState.addEmployee({
          name, dept, designation, shift: "General", basicSalary, attendance: "Present"
        });
      }
      this.showToast(`Employee ${name} added to payroll!`, "success");
      this.renderHRTable();
      window.navigateTo("hr");
    });
  }

  showAddQCModal() {
    const form = `
      <div class="form-group"><label class="form-label">Sample Item Tested</label><input type="text" id="mQcItem" class="form-control" value="Reel #REEL-905 (ITC Paper)"></div>
      <div class="form-group"><label class="form-label">Tested GSM</label><input type="number" id="mQcGsm" class="form-control" value="182"></div>
      <div class="form-group"><label class="form-label">Tested Burst Factor (BF)</label><input type="number" id="mQcBf" class="form-control" value="24.5"></div>
      <div class="form-group"><label class="form-label">Moisture %</label><input type="text" id="mQcMoisture" class="form-control" value="6.7%"></div>
    `;
    this.openCustomModal("Log QC Laboratory Paper Test", form, () => {
      const item = document.getElementById("mQcItem").value;
      const testedGsm = parseFloat(document.getElementById("mQcGsm").value) || 180;
      const testedBf = parseFloat(document.getElementById("mQcBf").value) || 24;
      const moisture = document.getElementById("mQcMoisture").value;

      if (window.appState) {
        window.appState.addQCLog({
          date: new Date().toISOString().split('T')[0],
          item, testedGsm, testedBf, moisture, status: "Passed"
        });
      }
      this.showToast(`QC Test Log recorded!`, "success");
      this.renderQCTable();
      window.navigateTo("qc");
    });
  }

  showAddRuleModal() {
    const form = `
      <div class="form-group"><label class="form-label">Automation Rule Name</label><input type="text" id="mRuleName" class="form-control" value="Auto Dispatch Invoice Creation"></div>
      <div class="form-group"><label class="form-label">Trigger Condition</label><input type="text" id="mRuleTrigger" class="form-control" value="Dispatch Status == Delivered"></div>
      <div class="form-group"><label class="form-label">Automated Action</label><input type="text" id="mRuleAction" class="form-control" value="Generate GST Tax Invoice & Send WhatsApp Alert"></div>
    `;
    this.openCustomModal("Add Automation Rule", form, () => {
      const name = document.getElementById("mRuleName").value;
      const trigger = document.getElementById("mRuleTrigger").value;
      const action = document.getElementById("mRuleAction").value;

      if (window.appState) {
        window.appState.addAutomationRule({
          name, trigger, action, status: "Active"
        });
      }
      this.showToast(`Automation rule ${name} created!`, "success");
      this.renderAutomationTable();
      window.navigateTo("automation");
    });
  }

  bindEvents() {
    // Role switcher
    const roleSelect = document.getElementById("roleSelect");
    if (roleSelect) {
      roleSelect.addEventListener("change", (e) => {
        if (window.appState) window.appState.setRole(e.target.value);
        this.showToast(`Active Role Context: ${e.target.value}`, "info");
      });
    }

    // Plant switcher
    const plantSelect = document.getElementById("plantSelect");
    if (plantSelect) {
      plantSelect.addEventListener("change", (e) => {
        if (window.appState) window.appState.setPlant(e.target.value);
        this.showToast(`Plant Context: ${e.target.options[e.target.selectedIndex].text}`, "info");
      });
    }

    // AI Drawer toggle
    const aiBtn = document.getElementById("aiTriggerBtn");
    const aiDrawer = document.getElementById("aiDrawer");
    const aiCloseBtn = document.getElementById("aiCloseBtn");
    if (aiBtn && aiDrawer) aiBtn.addEventListener("click", () => aiDrawer.classList.toggle("open"));
    if (aiCloseBtn && aiDrawer) aiCloseBtn.addEventListener("click", () => aiDrawer.classList.remove("open"));

    // AI Chat Input
    const aiSendBtn = document.getElementById("aiSendBtn");
    const aiInput = document.getElementById("aiInput");
    if (aiSendBtn && aiInput) {
      const handleSend = () => {
        const query = aiInput.value.trim();
        if (query) {
          this.appendChatMessage(query, "user");
          aiInput.value = "";
          setTimeout(() => {
            const reply = window.boxBrainAI ? window.boxBrainAI.processQuery(query) : { text: "AI engine processing..." };
            this.appendChatMessage(reply.text, "ai");
            if (reply.action === "NAVIGATE_COSTING") window.navigateTo("costing");
            if (reply.action === "NAVIGATE_INVENTORY") window.navigateTo("inventory");
            if (reply.action === "NAVIGATE_AR") window.navigateTo("ar");
          }, 250);
        }
      };
      aiSendBtn.addEventListener("click", handleSend);
      aiInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleSend(); });
    }

    // Global Search
    const searchInput = document.getElementById("globalSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase().trim();
        if (term.length > 2) {
          if (term.includes("cost") || term.includes("box")) window.navigateTo("costing");
          else if (term.includes("inv") || term.includes("tax")) window.navigateTo("invoices");
          else if (term.includes("paper") || term.includes("reel")) window.navigateTo("inventory");
          else if (term.includes("job") || term.includes("prod")) window.navigateTo("mrp");
        }
      });
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("mobileMenuToggle");
    const sidebar = document.querySelector(".sidebar");
    if (menuToggle && sidebar) {
      menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
    }

    // Real-Time Costing Inputs Event Listeners
    ["costLength", "costWidth", "costHeight", "costPly", "costFefco", "costQty", "costMargin", "gsm0", "gsm1", "gsm2", "gsm3", "gsm4", "bf0", "bf1", "bf2", "bf3", "bf4"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => this.updateCostingCalc());
        el.addEventListener("change", () => this.updateCostingCalc());
      }
    });

    // Convert to Quotation Button Listener
    const saveBtn = document.getElementById("btnSaveQuotation");
    if (saveBtn) {
      saveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.convertCostingToQuotation();
      });
    }
  }

  appendChatMessage(messageText, sender) {
    const chatContainer = document.getElementById("chatMessages");
    if (chatContainer) {
      const bubble = document.createElement("div");
      bubble.className = `chat-bubble ${sender}`;
      bubble.innerHTML = messageText.replace(/\n/g, "<br>");
      chatContainer.appendChild(bubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  showToast(msg, type = "info") {
    const toast = document.createElement("div");
    toast.style.cssText = `
      position: fixed; bottom: 20px; right: 20px; z-index: 10000;
      background: var(--bg-tertiary); color: var(--text-primary);
      border: 1px solid var(--border-color); border-left: 4px solid ${type === 'success' ? '#10b981' : '#3b82f6'};
      padding: 12px 20px; border-radius: 8px; font-weight: 600; box-shadow: var(--shadow-lg);
    `;
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
}

// Instantiate App
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", () => {
    if (!window.app) window.app = new PackFlowApp();
  });
} else {
  if (!window.app) window.app = new PackFlowApp();
}
