/* PackFlow AI ERP - Central State Store & Event Manager with Defensive State Guard */

class StateManager {
  constructor() {
    this.listeners = [];
    this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem("PACKFLOW_ERP_STATE_V3");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          this.state = parsed;
        } else {
          this.state = window.PACKFLOW_MOCK_DATA;
        }
      } else {
        this.state = window.PACKFLOW_MOCK_DATA;
      }
    } catch (e) {
      this.state = window.PACKFLOW_MOCK_DATA;
    }

    if (!this.state || typeof this.state !== "object") {
      this.state = window.PACKFLOW_MOCK_DATA || {};
    }

    // Defensive Initializations
    if (!this.state.currentRole) this.state.currentRole = "Super Admin";
    if (!this.state.currentPlant) this.state.currentPlant = "P1";
    if (!Array.isArray(this.state.customers)) this.state.customers = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.customers) || [];
    if (!Array.isArray(this.state.quotations)) this.state.quotations = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.quotations) || [];
    if (!Array.isArray(this.state.salesOrders)) this.state.salesOrders = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.salesOrders) || [];
    if (!Array.isArray(this.state.jobCards)) this.state.jobCards = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.jobCards) || [];
    if (!Array.isArray(this.state.invoices)) this.state.invoices = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.invoices) || [];
    if (!Array.isArray(this.state.vendors)) this.state.vendors = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.vendors) || [];
    if (!Array.isArray(this.state.kraftReelsInventory)) this.state.kraftReelsInventory = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.kraftReelsInventory) || [];
    if (!Array.isArray(this.state.machines)) this.state.machines = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.machines) || [];
    if (!Array.isArray(this.state.employees)) this.state.employees = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.employees) || [];
    if (!Array.isArray(this.state.automationRules)) this.state.automationRules = (window.PACKFLOW_MOCK_DATA && window.PACKFLOW_MOCK_DATA.automationRules) || [];
    if (!Array.isArray(this.state.purchaseOrders)) this.state.purchaseOrders = [
      { id: "PO-3001", vendor: "ITC Paperboards", date: "2026-08-25", items: "Kraft Paper 180GSM 52\" (5 Tonnes)", amount: 190000, status: "Received" },
      { id: "PO-3002", vendor: "Hubergroup India", date: "2026-08-28", items: "Flexo Printing Ink Cyan/Magenta (200kg)", amount: 4500, status: "Ordered" }
    ];
    if (!Array.isArray(this.state.qcLogs)) this.state.qcLogs = [
      { id: "QC-701", date: "2026-08-30", item: "Reel #REEL-901 (ITC Paper)", testedGsm: 181, testedBf: 24.2, moisture: "6.8%", status: "Passed" },
      { id: "QC-702", date: "2026-08-31", item: "Job #JOB-4001 Finished Boxes", testedGsm: 730, testedBf: 15.5, moisture: "7.1%", status: "Passed" }
    ];
    if (!Array.isArray(this.state.receipts)) this.state.receipts = [
      { id: "RCT-101", date: "2026-08-26", customer: "Amazon Seller Services", invoiceRef: "INV-2026-0088", amount: 200000, mode: "NEFT Bank Transfer" }
    ];
    if (!Array.isArray(this.state.vendorBills)) this.state.vendorBills = [
      { id: "BILL-501", vendor: "ITC Paperboards", billNo: "ITC-PNE-9944", date: "2026-08-20", dueDays: 15, amount: 190000, status: "Unpaid" },
      { id: "BILL-502", vendor: "West Coast Paper", billNo: "WCP-9912", date: "2026-08-15", dueDays: 30, amount: 145000, status: "Paid" }
    ];
    if (!Array.isArray(this.state.dispatchNotes)) this.state.dispatchNotes = [
      { id: "DSP-6001", date: "2026-08-31", customer: "Sun Pharmaceutical Industries Ltd", items: "3,000 Pcs Shipper 7-Ply", vehicleNo: "MH-14-GX-5542", eWayBill: "221045998812", status: "In Transit" }
    ];
  }

  saveState() {
    try {
      localStorage.setItem("PACKFLOW_ERP_STATE_V3", JSON.stringify(this.state));
    } catch (e) {}
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => {
      try { listener(this.state); } catch (e) {}
    });
  }

  setRole(roleName) {
    this.state.currentRole = roleName;
    this.saveState();
  }

  setPlant(plantId) {
    this.state.currentPlant = plantId;
    this.saveState();
  }

  // Guaranteed Array Getters
  getQuotations() { return Array.isArray(this.state?.quotations) ? this.state.quotations : []; }
  getSalesOrders() { return Array.isArray(this.state?.salesOrders) ? this.state.salesOrders : []; }
  getJobCards() { return Array.isArray(this.state?.jobCards) ? this.state.jobCards : []; }
  getInvoices() { return Array.isArray(this.state?.invoices) ? this.state.invoices : []; }
  getCustomers() { return Array.isArray(this.state?.customers) ? this.state.customers : []; }
  getVendors() { return Array.isArray(this.state?.vendors) ? this.state.vendors : []; }
  getReels() { return Array.isArray(this.state?.kraftReelsInventory) ? this.state.kraftReelsInventory : []; }
  getMachines() { return Array.isArray(this.state?.machines) ? this.state.machines : []; }
  getEmployees() { return Array.isArray(this.state?.employees) ? this.state.employees : []; }
  getAutomationRules() { return Array.isArray(this.state?.automationRules) ? this.state.automationRules : []; }
  getPurchaseOrders() { return Array.isArray(this.state?.purchaseOrders) ? this.state.purchaseOrders : []; }
  getQCLogs() { return Array.isArray(this.state?.qcLogs) ? this.state.qcLogs : []; }
  getReceipts() { return Array.isArray(this.state?.receipts) ? this.state.receipts : []; }
  getVendorBills() { return Array.isArray(this.state?.vendorBills) ? this.state.vendorBills : []; }
  getDispatchNotes() { return Array.isArray(this.state?.dispatchNotes) ? this.state.dispatchNotes : []; }

  // Action Methods with Explicit Return Values
  addCustomer(customer) {
    if (!customer.id) customer.id = "CUST-" + (1005 + this.getCustomers().length);
    this.getCustomers().unshift(customer);
    this.saveState();
    return customer;
  }

  addQuotation(quotation) {
    if (!quotation.id) quotation.id = "QT-" + (8005 + this.getQuotations().length);
    this.getQuotations().unshift(quotation);
    this.saveState();
    return quotation;
  }

  convertQuotationToSO(quotationId) {
    const qt = this.getQuotations().find(q => q.id === quotationId);
    if (qt) {
      qt.status = "Approved";
      const newSO = {
        id: "SO-" + (5000 + this.getSalesOrders().length + 1),
        quotationRef: qt.id,
        date: new Date().toISOString().split('T')[0],
        customer: qt.customer,
        poNumber: "PO-CUST-" + Math.floor(1000 + Math.random() * 9000),
        deliveryDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
        boxName: qt.boxSpecs,
        orderQty: qt.qty,
        dispatchedQty: 0,
        pendingQty: qt.qty,
        status: "In Production",
        amount: qt.grandTotal
      };
      this.getSalesOrders().unshift(newSO);
      
      const newJob = {
        id: "JOB-" + (4000 + this.getJobCards().length + 1),
        soRef: newSO.id,
        customer: qt.customer,
        boxSpecs: qt.boxSpecs,
        sheetSize: "1600 mm x 850 mm",
        deckleUsed: "64 inch Reel",
        targetQty: qt.qty,
        producedQty: 0,
        wasteKg: 0,
        assignedMachine: "Corrugator Line 1",
        status: "In Progress",
        scheduledStart: new Date().toISOString().replace('T', ' ').slice(0, 16)
      };
      this.getJobCards().unshift(newJob);
      this.saveState();
      return newSO;
    }
    return null;
  }

  addReel(reel) {
    if (!reel.id) reel.id = "REEL-" + (906 + this.getReels().length);
    this.getReels().unshift(reel);
    this.saveState();
    return reel;
  }

  addEmployee(emp) {
    if (!emp.id) emp.id = "EMP-" + (105 + this.getEmployees().length);
    this.getEmployees().unshift(emp);
    this.saveState();
    return emp;
  }

  addPurchaseOrder(po) {
    if (!po.id) po.id = "PO-" + (3003 + this.getPurchaseOrders().length);
    this.getPurchaseOrders().unshift(po);
    this.saveState();
    return po;
  }

  addReceipt(receipt) {
    if (!receipt.id) receipt.id = "RCT-" + (102 + this.getReceipts().length);
    this.getReceipts().unshift(receipt);
    const cust = this.getCustomers().find(c => c.name === receipt.customer);
    if (cust) {
      cust.outstanding = Math.max(0, cust.outstanding - receipt.amount);
    }
    this.saveState();
    return receipt;
  }

  addQCLog(log) {
    if (!log.id) log.id = "QC-" + (703 + this.getQCLogs().length);
    this.getQCLogs().unshift(log);
    this.saveState();
    return log;
  }

  addAutomationRule(rule) {
    if (!rule.id) rule.id = "RULE-" + (this.getAutomationRules().length + 1);
    this.getAutomationRules().unshift(rule);
    this.saveState();
    return rule;
  }

  toggleMachineStatus(machineId) {
    const m = this.getMachines().find(mac => mac.id === machineId);
    if (m) {
      m.status = m.status === "Running" ? "Idle" : "Running";
      m.speedMpm = m.status === "Running" ? 145 : 0;
      this.saveState();
      return m;
    }
    return null;
  }

  resetToDefault() {
    this.state = window.PACKFLOW_MOCK_DATA;
    this.saveState();
  }
}

window.appState = new StateManager();
