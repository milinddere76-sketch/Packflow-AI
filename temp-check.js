
/* PackFlow AI ERP - Comprehensive Master Dataset */

window.PACKFLOW_MOCK_DATA = {
  company: {
    name: "PackFlow Packaging Industries Pvt. Ltd.",
    gstin: "27AAACP1234F1Z9",
    pan: "AAACP1234F",
    address: "Plot 42-45, Chakan Industrial Area, Phase II, Pune, MH - 410501",
    email: "contact@packflow-erp.com",
    phone: "+91 98230 12345",
    bank: {
      name: "HDFC Bank Ltd.",
      branch: "Chakan Branch",
      accountNo: "50200012345678",
      ifsc: "HDFC0000456"
    }
  },

  plants: [
    { id: "P1", name: "Plant 1 - Pune Mega Unit", location: "Chakan, Pune" },
    { id: "P2", name: "Plant 2 - Gujarat Unit", location: "Sanand, Ahmedabad" }
  ],

  users: [
    { id: "U1", name: "Rajesh Sharma", role: "Super Admin", avatar: "RS" },
    { id: "U2", name: "Anand Verma", role: "Director", avatar: "AV" },
    { id: "U3", name: "Priya Nair", role: "Accountant", avatar: "PN" },
    { id: "U4", name: "Vikram Malhotra", role: "Sales Manager", avatar: "VM" },
    { id: "U5", name: "Suresh Patil", role: "Production Manager", avatar: "SP" },
    { id: "U6", name: "Mahesh Shinde", role: "Quality Inspector", avatar: "MS" },
    { id: "U7", name: "Ramesh Pawar", role: "Dispatch Executive", avatar: "RP" }
  ],

  customers: [
    {
      id: "CUST-1001",
      name: "Amazon Seller Services India Pvt Ltd",
      gstin: "27AABCA1234D1Z2",
      pan: "AABCA1234D",
      city: "Bhiwandi, MH",
      contact: "Amit Deshmukh",
      phone: "+91 98700 11223",
      email: "procurement@amazon-vendor.in",
      creditLimit: 2500000,
      outstanding: 845000,
      paymentTerms: "30 Days Net"
    },
    {
      id: "CUST-1002",
      name: "Jubilant FoodWorks (Domino's)",
      gstin: "27AAACJ4321E1Z5",
      pan: "AAACJ4321E",
      city: "Greater Noida, UP",
      contact: "Rohan Gupta",
      phone: "+91 98221 44556",
      email: "packaging@jubilantfood.com",
      creditLimit: 1500000,
      outstanding: 320000,
      paymentTerms: "15 Days Net"
    },
    {
      id: "CUST-1003",
      name: "Sun Pharmaceutical Industries Ltd",
      gstin: "27AAACS9876K1Z8",
      pan: "AAACS9876K",
      city: "Halol, GJ",
      contact: "Dr. K. V. Rao",
      phone: "+91 98990 77889",
      email: "supplychain@sunpharma.com",
      creditLimit: 4000000,
      outstanding: 1120000,
      paymentTerms: "45 Days Net"
    },
    {
      id: "CUST-1004",
      name: "Varun Beverages Ltd (PepsiCo)",
      gstin: "27AAACV5544H1Z1",
      pan: "AAACV5544H",
      city: "Nagpur, MH",
      contact: "Deepak Joshi",
      phone: "+91 98112 33445",
      email: "purchase@varunbev.com",
      creditLimit: 3000000,
      outstanding: 450000,
      paymentTerms: "30 Days Net"
    }
  ],

  vendors: [
    { id: "VEND-2001", name: "ITC Paperboards & Specialty Papers", category: "Kraft Paper Mill", city: "Bhadrachalam", phone: "+91 40 2345 6789", balance: 1450000 },
    { id: "VEND-2002", name: "West Coast Paper Mills Ltd", category: "Kraft Paper Mill", city: "Dandeli", phone: "+91 8284 230881", balance: 980000 },
    { id: "VEND-2003", name: "Hubergroup India (Printing Inks)", category: "Chemicals & Ink", city: "Vapi", phone: "+91 260 240 1234", balance: 120000 },
    { id: "VEND-2004", name: "Corn Products Starch & Gums", category: "Adhesive Raw Material", city: "Ahmedabad", phone: "+91 79 2658 9900", balance: 65000 }
  ],

  fefcoStyles: [
    { code: "FEFCO 0201", name: "RSC - Regular Slotted Carton", desc: "Standard shipping box with meeting outer flaps." },
    { code: "FEFCO 0200", name: "HSC - Half Slotted Carton", desc: "Open top carton without top flaps." },
    { code: "FEFCO 0427", name: "Die-Cut Folder / E-Commerce Box", desc: "Self-locking mailer box with tuck flaps." },
    { code: "FEFCO 0300", name: "Telescopic Box", desc: "Two-piece lid & bottom box." }
  ],

  kraftReelsInventory: [
    { id: "REEL-901", gsm: 180, bf: 24, deckleWidthInches: 52, weightKg: 850, warehouse: "Raw Paper Yard A", supplier: "ITC Paper", ratePerKg: 38 },
    { id: "REEL-902", gsm: 140, bf: 22, deckleWidthInches: 52, weightKg: 1100, warehouse: "Raw Paper Yard A", supplier: "West Coast Paper", ratePerKg: 34 },
    { id: "REEL-903", gsm: 120, bf: 18, deckleWidthInches: 48, weightKg: 620, warehouse: "Raw Paper Yard B", supplier: "West Coast Paper", ratePerKg: 31 },
    { id: "REEL-904", gsm: 230, bf: 28, deckleWidthInches: 60, weightKg: 1450, warehouse: "Raw Paper Yard A", supplier: "ITC Paper", ratePerKg: 44 },
    { id: "REEL-905", gsm: 150, bf: 22, deckleWidthInches: 44, weightKg: 410, warehouse: "Raw Paper Yard B", supplier: "Trident Paper", ratePerKg: 35 }
  ],

  machines: [
    { id: "M1", name: "5-Ply Automatic Corrugator Line 1", type: "Corrugator", status: "Running", speedMpm: 145, oeePercent: 88, job: "JOB-4001" },
    { id: "M2", name: "Flexo 3-Color Printer Slotter 1", type: "Printer Slotter", status: "Running", speedMpm: 220, oeePercent: 92, job: "JOB-4002" },
    { id: "M3", name: "High-Speed Rotary Die Cutter", type: "Die Cutter", status: "Idle", speedMpm: 0, oeePercent: 74, job: "Standby" },
    { id: "M4", name: "Automatic Folder Gluer & Strapper", type: "Folder Gluer", status: "Running", speedMpm: 180, oeePercent: 85, job: "JOB-4001" },
    { id: "M5", name: "Heavy Duty Box Stitching Machine", type: "Stitcher", status: "Maintenance", speedMpm: 0, oeePercent: 60, job: "Servicing" }
  ],

  quotations: [
    {
      id: "QT-8001",
      date: "2026-08-28",
      customer: "Amazon Seller Services India Pvt Ltd",
      boxSpecs: "18 x 12 x 10 in (5-Ply RSC)",
      qty: 10000,
      costPerBox: 34.50,
      marginPercent: 18,
      unitPrice: 40.70,
      totalAmount: 407000,
      gstAmount: 73260,
      grandTotal: 480260,
      status: "Approved"
    },
    {
      id: "QT-8002",
      date: "2026-08-30",
      customer: "Jubilant FoodWorks (Domino's)",
      boxSpecs: "10 x 10 x 1.5 in Pizza Box (E-Flute 3-Ply)",
      qty: 50000,
      costPerBox: 8.20,
      marginPercent: 20,
      unitPrice: 9.84,
      totalAmount: 492000,
      gstAmount: 88560,
      grandTotal: 580560,
      status: "Pending Approval"
    }
  ],

  salesOrders: [
    {
      id: "SO-5001",
      quotationRef: "QT-8001",
      date: "2026-08-29",
      customer: "Amazon Seller Services India Pvt Ltd",
      poNumber: "PO-AMZ-998822",
      deliveryDate: "2026-09-08",
      boxName: "Master Outer Box 18x12x10 5-Ply",
      orderQty: 10000,
      dispatchedQty: 4000,
      pendingQty: 6000,
      status: "In Production",
      amount: 480260
    },
    {
      id: "SO-5002",
      quotationRef: "QT-7990",
      date: "2026-08-20",
      customer: "Sun Pharmaceutical Industries Ltd",
      poNumber: "PO-SUN-4411",
      deliveryDate: "2026-09-03",
      boxName: "Pharma Export Shipper 7-Ply 24x18x18",
      orderQty: 3000,
      dispatchedQty: 3000,
      pendingQty: 0,
      status: "Dispatched",
      amount: 385000
    }
  ],

  jobCards: [
    {
      id: "JOB-4001",
      soRef: "SO-5001",
      customer: "Amazon Seller Services India Pvt Ltd",
      boxSpecs: "18x12x10 inch | 5-Ply | BC Flute",
      sheetSize: "1575 mm x 810 mm",
      deckleUsed: "64 inch Reel",
      targetQty: 10000,
      producedQty: 4200,
      wasteKg: 110,
      assignedMachine: "Corrugator Line 1",
      status: "In Progress",
      scheduledStart: "2026-09-01 08:00"
    },
    {
      id: "JOB-4002",
      soRef: "SO-5002",
      customer: "Sun Pharmaceutical Industries Ltd",
      boxSpecs: "24x18x18 inch | 7-Ply Heavy Duty",
      sheetSize: "2180 mm x 1220 mm",
      deckleUsed: "72 inch Reel",
      targetQty: 3000,
      producedQty: 3000,
      wasteKg: 85,
      assignedMachine: "Flexo Printer 1",
      status: "Completed",
      scheduledStart: "2026-08-29 10:00"
    }
  ],

  invoices: [
    {
      invoiceNo: "INV-2026-0089",
      date: "2026-08-31",
      customer: "Sun Pharmaceutical Industries Ltd",
      gstin: "27AAACS9876K1Z8",
      hsnCode: "48191010",
      taxableValue: 326271,
      igst: 58729,
      cgst: 0,
      sgst: 0,
      totalAmount: 385000,
      eWayBillNo: "221045998812",
      status: "Unpaid"
    },
    {
      invoiceNo: "INV-2026-0088",
      date: "2026-08-25",
      customer: "Amazon Seller Services India Pvt Ltd",
      gstin: "27AABCA1234D1Z2",
      hsnCode: "48191010",
      taxableValue: 169491,
      igst: 0,
      cgst: 15254,
      sgst: 15254,
      totalAmount: 200000,
      eWayBillNo: "221045991104",
      status: "Paid"
    }
  ],

  employees: [
    { id: "EMP-101", name: "Suresh Patil", dept: "Production", designation: "Production Manager", shift: "General", basicSalary: 45000, attendance: "Present" },
    { id: "EMP-102", name: "Ramesh Pawar", dept: "Dispatch", designation: "Dispatch Supervisor", shift: "Morning", basicSalary: 28000, attendance: "Present" },
    { id: "EMP-103", name: "Mahesh Shinde", dept: "Quality", designation: "QC Chemist", shift: "Morning", basicSalary: 32000, attendance: "Present" },
    { id: "EMP-104", name: "Vikas Gawde", dept: "Maintenance", designation: "Machine Technician", shift: "Night", basicSalary: 25000, attendance: "Absent" }
  ],

  automationRules: [
    { id: "RULE-1", name: "Auto Sales Order Creation", trigger: "Quotation Status == Approved", action: "Create Draft Sales Order & Notify Production Manager", status: "Active" },
    { id: "RULE-2", name: "Low Reel Stock Warning", trigger: "Kraft Reel Weight < 500 kg", action: "Create Purchase Requisition & Send WhatsApp Alert", status: "Active" },
    { id: "RULE-3", name: "Overdue Invoice Reminder", trigger: "Invoice Unpaid > 30 Days", action: "Send Automated Email & SMS Payment Advice to Customer", status: "Active" }
  ]
};


/* --- END MODULE --- */

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

  // Action Methods
  addCustomer(customer) {
    if (!customer.id) customer.id = "CUST-" + (1005 + this.getCustomers().length);
    this.getCustomers().unshift(customer);
    this.saveState();
  }

  addQuotation(quotation) {
    if (!quotation.id) quotation.id = "QT-" + (8005 + this.getQuotations().length);
    this.getQuotations().unshift(quotation);
    this.saveState();
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
  }

  addEmployee(emp) {
    if (!emp.id) emp.id = "EMP-" + (105 + this.getEmployees().length);
    this.getEmployees().unshift(emp);
    this.saveState();
  }

  addPurchaseOrder(po) {
    if (!po.id) po.id = "PO-" + (3003 + this.getPurchaseOrders().length);
    this.getPurchaseOrders().unshift(po);
    this.saveState();
  }

  addReceipt(receipt) {
    if (!receipt.id) receipt.id = "RCT-" + (102 + this.getReceipts().length);
    this.getReceipts().unshift(receipt);
    const cust = this.getCustomers().find(c => c.name === receipt.customer);
    if (cust) {
      cust.outstanding = Math.max(0, cust.outstanding - receipt.amount);
    }
    this.saveState();
  }

  addQCLog(log) {
    if (!log.id) log.id = "QC-" + (703 + this.getQCLogs().length);
    this.getQCLogs().unshift(log);
    this.saveState();
  }

  addAutomationRule(rule) {
    if (!rule.id) rule.id = "RULE-" + (this.getAutomationRules().length + 1);
    this.getAutomationRules().unshift(rule);
    this.saveState();
  }

  toggleMachineStatus(machineId) {
    const m = this.getMachines().find(mac => mac.id === machineId);
    if (m) {
      m.status = m.status === "Running" ? "Idle" : "Running";
      m.speedMpm = m.status === "Running" ? 145 : 0;
      this.saveState();
    }
  }

  resetToDefault() {
    this.state = window.PACKFLOW_MOCK_DATA;
    this.saveState();
  }
}

window.appState = new StateManager();


/* --- END MODULE --- */

/* PackFlow AI ERP - Corrugated Box Costing Engineering & CAD SVG Engine */

class CorrugatedCostingEngine {
  constructor() {
    this.fluteFactors = {
      "A": 1.54,
      "B": 1.35,
      "C": 1.42,
      "E": 1.28,
      "BC": 1.77
    };
    this.standardDecklesInches = [36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 88];
  }

  /**
   * Generate 3D CAD Wireframe Box Diagram in SVG format
   */
  generateBoxCADSVG(l = 300, w = 200, h = 150, style = "FEFCO 0201") {
    return `
      <svg class="cad-svg-box" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boxGradFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#d97706" />
            <stop offset="100%" stop-color="#b45309" />
          </linearGradient>
          <linearGradient id="boxGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>
          <linearGradient id="boxGradSide" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#92400e" />
            <stop offset="100%" stop-color="#78350f" />
          </linearGradient>
        </defs>

        <!-- 3D Box Geometry -->
        <!-- Top Face -->
        <polygon points="120,40 280,40 230,80 70,80" fill="url(#boxGradTop)" stroke="#fbbf24" stroke-width="1.5" />
        <!-- Front Face -->
        <polygon points="70,80 230,80 230,190 70,190" fill="url(#boxGradFront)" stroke="#fbbf24" stroke-width="1.5" />
        <!-- Right Side Face -->
        <polygon points="230,80 280,40 280,150 230,190" fill="url(#boxGradSide)" stroke="#fbbf24" stroke-width="1.5" />

        <!-- Dimension Line Labels -->
        <!-- Length Arrow -->
        <line x1="70" y1="205" x2="230" y2="205" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrow)" />
        <text x="150" y="222" fill="#06b6d4" font-size="12" font-weight="bold" text-anchor="middle">L = ${l} mm</text>

        <!-- Height Arrow -->
        <line x1="50" y1="80" x2="50" y2="190" stroke="#10b981" stroke-width="2" />
        <text x="35" y="140" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 35 140)">H = ${h} mm</text>

        <!-- Width Arrow -->
        <line x1="240" y1="195" x2="290" y2="155" stroke="#f59e0b" stroke-width="2" />
        <text x="280" y="190" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="start">W = ${w} mm</text>

        <text x="200" y="25" fill="#f9fafb" font-size="13" font-weight="bold" text-anchor="middle">${style} Corrugated Box</text>
      </svg>
    `;
  }

  /**
   * Generate Authentic Corrugated Flute Cross-Section SVG Diagram
   */
  generateFluteWaveSVG(ply = 5, layers = []) {
    let flutePath = "";
    // Draw sinusoidal wave flutes
    for (let x = 10; x <= 370; x += 20) {
      flutePath += `Q ${x + 5} 20, ${x + 10} 35 T ${x + 20} 35 `;
    }

    let flutePath2 = "";
    for (let x = 10; x <= 370; x += 20) {
      flutePath2 += `Q ${x + 5} 45, ${x + 10} 60 T ${x + 20} 60 `;
    }

    return `
      <svg class="flute-wave-svg" viewBox="0 0 380 80" xmlns="http://www.w3.org/2000/svg">
        <!-- Top Liner Sheet -->
        <rect x="5" y="8" width="370" height="4" fill="#f59e0b" rx="2" />
        <text x="12" y="7" fill="#fbbf24" font-size="9" font-weight="bold">Top Liner (${layers[0]?.gsm || 180} GSM)</text>

        <!-- Flute 1 Wave -->
        <path d="M 10 12 ${flutePath}" fill="none" stroke="#06b6d4" stroke-width="2.5" />

        <!-- Middle Liner Sheet -->
        <rect x="5" y="36" width="370" height="4" fill="#f59e0b" rx="2" />
        
        ${ply >= 5 ? `
          <!-- Flute 2 Wave -->
          <path d="M 10 38 ${flutePath2}" fill="none" stroke="#6366f1" stroke-width="2.5" />
          <!-- Bottom Liner Sheet -->
          <rect x="5" y="64" width="370" height="4" fill="#f59e0b" rx="2" />
          <text x="12" y="76" fill="#fbbf24" font-size="9" font-weight="bold">Inner Liner (${layers[4]?.gsm || 140} GSM)</text>
        ` : `
          <text x="12" y="48" fill="#fbbf24" font-size="9" font-weight="bold">Inner Liner (${layers[2]?.gsm || 140} GSM)</text>
        `}
      </svg>
    `;
  }

  /**
   * Calculate complete box engineering specs, weights, and costing breakdown
   */
  calculateBoxCost(params) {
    const {
      lengthMm = 300,
      widthMm = 200,
      heightMm = 150,
      ply = 5,
      fefcoStyle = "FEFCO 0201",
      layers = [
        { gsm: 180, bf: 24, rateKg: 38 },
        { gsm: 140, bf: 22, rateKg: 34 },
        { gsm: 140, bf: 22, rateKg: 34 },
        { gsm: 140, bf: 22, rateKg: 34 },
        { gsm: 140, bf: 22, rateKg: 34 }
      ],
      wastagePercent = 6,
      printingColors = 2,
      stitching = true,
      lamination = false,
      dieCutting = false,
      qtySlab = 5000,
      marginPercent = 18,
      freightPerBox = 1.50
    } = params;

    let jointFlapMm = 40;
    let sheetLengthMm = 0;
    let sheetWidthMm = 0;

    if (fefcoStyle === "FEFCO 0201" || fefcoStyle === "FEFCO 0200") {
      sheetLengthMm = ((lengthMm + widthMm) * 2) + jointFlapMm;
      sheetWidthMm = widthMm + heightMm;
    } else if (fefcoStyle === "FEFCO 0427") {
      sheetLengthMm = (lengthMm * 2) + (heightMm * 4) + 30;
      sheetWidthMm = (widthMm) + (heightMm * 4) + 40;
    } else {
      sheetLengthMm = ((lengthMm + widthMm) * 2) + jointFlapMm;
      sheetWidthMm = widthMm + heightMm;
    }

    const sheetAreaM2 = (sheetLengthMm * sheetWidthMm) / 1000000;
    const sheetWidthInches = sheetWidthMm / 25.4;

    let selectedDeckleInches = this.standardDecklesInches.find(d => d >= sheetWidthInches) || 72;
    let trimWasteMm = (selectedDeckleInches * 25.4) - sheetWidthMm;
    let trimWastePercent = (trimWasteMm / (selectedDeckleInches * 25.4)) * 100;

    if (sheetWidthInches * 2 <= 72) {
      let doubleDeckle = this.standardDecklesInches.find(d => d >= sheetWidthInches * 2);
      if (doubleDeckle) {
        let altTrim = (doubleDeckle * 25.4) - (sheetWidthMm * 2);
        if (altTrim < trimWasteMm) {
          selectedDeckleInches = doubleDeckle;
          trimWasteMm = altTrim / 2;
          trimWastePercent = (trimWasteMm / (doubleDeckle * 25.4)) * 100;
        }
      }
    }

    let totalEffectiveGsm = 0;
    let totalRateWeightProduct = 0;
    let estimatedBurstingStrength = 0;

    layers.forEach((layer, idx) => {
      let takeup = 1.0;
      if (ply === 3 && idx === 1) takeup = 1.38;
      if (ply === 5 && (idx === 1 || idx === 3)) takeup = 1.40;
      if (ply === 7 && (idx === 1 || idx === 3 || idx === 5)) takeup = 1.45;

      const effectiveGsm = layer.gsm * takeup;
      totalEffectiveGsm += effectiveGsm;
      totalRateWeightProduct += effectiveGsm * (layer.rateKg || 35);
      estimatedBurstingStrength += (layer.gsm * layer.bf) / 1000;
    });

    const averagePaperRatePerKg = totalEffectiveGsm > 0 ? (totalRateWeightProduct / totalEffectiveGsm) : 35;
    const boxWeightKg = (sheetAreaM2 * totalEffectiveGsm) / 1000;

    const basePaperCost = boxWeightKg * averagePaperRatePerKg;
    const wastageCost = basePaperCost * (wastagePercent / 100);
    const totalPaperCostWithWastage = basePaperCost + wastageCost;

    const corrugationCost = sheetAreaM2 * 2.50;
    const printingInkCost = printingColors * 0.45;
    const starchGumCost = sheetAreaM2 * 0.80;
    const stitchingWireCost = stitching ? 0.35 : 0;
    const dieCuttingCost = dieCutting ? 0.85 : 0;
    const laminationCost = lamination ? sheetAreaM2 * 3.20 : 0;
    const labourOverheads = 1.20;

    const totalConversionCost = corrugationCost + printingInkCost + starchGumCost + stitchingWireCost + dieCuttingCost + laminationCost + labourOverheads;

    const totalProductionCostPerBox = totalPaperCostWithWastage + totalConversionCost + freightPerBox;
    const grossMarginAmount = totalProductionCostPerBox * (marginPercent / 100);
    const sellingPricePerBox = totalProductionCostPerBox + grossMarginAmount;
    const gstRatePercent = 18;
    const gstAmountPerBox = sellingPricePerBox * (gstRatePercent / 100);
    const grandTotalPerBox = sellingPricePerBox + gstAmountPerBox;

    const totalBatchCost = totalProductionCostPerBox * qtySlab;
    const totalBatchRevenue = sellingPricePerBox * qtySlab;
    const totalBatchProfit = grossMarginAmount * qtySlab;
    const totalPaperRequirementKg = (boxWeightKg * qtySlab) * (1 + wastagePercent / 100);

    return {
      inputs: params,
      sheetSpecs: {
        sheetLengthMm: Math.round(sheetLengthMm),
        sheetWidthMm: Math.round(sheetWidthMm),
        sheetAreaM2: sheetAreaM2.toFixed(3),
        selectedDeckleInches,
        trimWasteMm: Math.round(trimWasteMm),
        trimWastePercent: trimWastePercent.toFixed(1)
      },
      weightSpecs: {
        totalEffectiveGsm: Math.round(totalEffectiveGsm),
        boxWeightKg: boxWeightKg.toFixed(3),
        estimatedBurstingStrength: estimatedBurstingStrength.toFixed(2),
        totalPaperRequirementKg: Math.round(totalPaperRequirementKg)
      },
      costBreakdown: {
        basePaperCost: basePaperCost.toFixed(2),
        wastageCost: wastageCost.toFixed(2),
        paperCostTotal: totalPaperCostWithWastage.toFixed(2),
        totalConversionCost: totalConversionCost.toFixed(2),
        freightPerBox: freightPerBox.toFixed(2),
        totalProductionCostPerBox: totalProductionCostPerBox.toFixed(2),
        grossMarginAmount: grossMarginAmount.toFixed(2),
        sellingPricePerBox: sellingPricePerBox.toFixed(2),
        gstAmountPerBox: gstAmountPerBox.toFixed(2),
        grandTotalPerBox: grandTotalPerBox.toFixed(2)
      },
      batchSummary: {
        qtySlab,
        totalBatchCost: Math.round(totalBatchCost),
        totalBatchRevenue: Math.round(totalBatchRevenue),
        totalBatchProfit: Math.round(totalBatchProfit),
        marginPercent
      }
    };
  }
}

window.costingEngine = new CorrugatedCostingEngine();


/* --- END MODULE --- */

/* PackFlow AI ERP - GST Double-Entry Accounting Engine */

class GSTAccountingEngine {
  constructor() {
    this.chartOfAccounts = [
      { code: "1001", name: "Cash in Hand", category: "Asset", type: "Current Asset" },
      { code: "1002", name: "HDFC Bank Operating Account", category: "Asset", type: "Current Asset" },
      { code: "1100", name: "Accounts Receivable (Trade Debtors)", category: "Asset", type: "Current Asset" },
      { code: "1200", name: "Raw Material Kraft Reel Inventory", category: "Asset", type: "Current Asset" },
      { code: "1210", name: "Finished Goods Stock", category: "Asset", type: "Current Asset" },
      { code: "1500", name: "Plant Machinery & Corrugators", category: "Asset", type: "Fixed Asset" },
      { code: "2001", name: "Accounts Payable (Trade Creditors)", category: "Liability", type: "Current Liability" },
      { code: "2100", name: "Output IGST Payable", category: "Liability", type: "Tax Liability" },
      { code: "2101", name: "Output CGST Payable", category: "Liability", type: "Tax Liability" },
      { code: "2102", name: "Output SGST Payable", category: "Liability", type: "Tax Liability" },
      { code: "2110", name: "Input Tax Credit (ITC) IGST", category: "Asset", type: "Tax Credit" },
      { code: "2111", name: "Input Tax Credit (ITC) CGST", category: "Asset", type: "Tax Credit" },
      { code: "2112", name: "Input Tax Credit (ITC) SGST", category: "Asset", type: "Tax Credit" },
      { code: "3000", name: "Shareholders Capital", category: "Equity", type: "Equity" },
      { code: "4000", name: "Corrugated Box Sales Revenue", category: "Revenue", type: "Direct Income" },
      { code: "5000", name: "Raw Material Paper Purchases", category: "Expense", type: "Direct Expense" },
      { code: "5100", name: "Factory Power & Utility Expenses", category: "Expense", type: "Direct Expense" },
      { code: "5200", name: "Direct Factory Wages", category: "Expense", type: "Direct Expense" },
      { code: "6000", name: "Administrative & Sales Salaries", category: "Expense", type: "Indirect Expense" }
    ];
  }

  /**
   * Calculate GST Split (Intra-state vs Inter-state)
   */
  calculateGST(taxableAmount, customerStateCode = "27", supplierStateCode = "27", hsnCode = "48191010") {
    const ratePercent = 18;
    const isInterState = customerStateCode !== supplierStateCode;
    
    if (isInterState) {
      const igstAmount = (taxableAmount * ratePercent) / 100;
      return {
        isInterState: true,
        ratePercent,
        cgstRate: 0,
        sgstRate: 0,
        igstRate: ratePercent,
        cgstAmount: 0,
        sgstAmount: 0,
        igstAmount,
        totalTax: igstAmount,
        grandTotal: taxableAmount + igstAmount
      };
    } else {
      const halfRate = ratePercent / 2; // 9% CGST, 9% SGST
      const cgstAmount = (taxableAmount * halfRate) / 100;
      const sgstAmount = (taxableAmount * halfRate) / 100;
      const totalTax = cgstAmount + sgstAmount;
      return {
        isInterState: false,
        ratePercent,
        cgstRate: halfRate,
        sgstRate: halfRate,
        igstRate: 0,
        cgstAmount,
        sgstAmount,
        igstAmount: 0,
        totalTax,
        grandTotal: taxableAmount + totalTax
      };
    }
  }

  /**
   * Generate Financial Statements Summary
   */
  generateFinancialSummary(invoices = [], debtors = []) {
    let totalSalesTaxable = 0;
    let totalIGST = 0;
    let totalCGST = 0;
    let totalSGST = 0;

    invoices.forEach(inv => {
      totalSalesTaxable += inv.taxableValue || 0;
      totalIGST += inv.igst || 0;
      totalCGST += inv.cgst || 0;
      totalSGST += inv.sgst || 0;
    });

    const totalRevenue = totalSalesTaxable;
    const rawMaterialCost = totalRevenue * 0.62; // 62% typical paper cost ratio
    const conversionOverheads = totalRevenue * 0.18; // 18% factory overheads
    const grossProfit = totalRevenue - rawMaterialCost - conversionOverheads;
    const adminExpenses = totalRevenue * 0.08;
    const netProfitBeforeTax = grossProfit - adminExpenses;

    return {
      revenue: Math.round(totalRevenue),
      cogs: Math.round(rawMaterialCost + conversionOverheads),
      grossProfit: Math.round(grossProfit),
      grossProfitMarginPercent: totalRevenue > 0 ? ((grossProfit / totalRevenue) * 100).toFixed(1) : 0,
      netProfit: Math.round(netProfitBeforeTax),
      netProfitMarginPercent: totalRevenue > 0 ? ((netProfitBeforeTax / totalRevenue) * 100).toFixed(1) : 0,
      gstSummary: {
        totalSalesTaxable: Math.round(totalSalesTaxable),
        totalIGST: Math.round(totalIGST),
        totalCGST: Math.round(totalCGST),
        totalSGST: Math.round(totalSGST),
        totalGSTPayable: Math.round(totalIGST + totalCGST + totalSGST)
      }
    };
  }

  /**
   * Generate GSTR-1 Monthly Sales Return Summary
   */
  generateGSTR1(invoices = []) {
    const b2bInvoices = invoices.map(inv => ({
      gstin: inv.gstin,
      customerName: inv.customer,
      invoiceNo: inv.invoiceNo,
      invoiceDate: inv.date,
      invoiceValue: inv.totalAmount,
      hsnCode: inv.hsnCode,
      taxableValue: inv.taxableValue,
      igst: inv.igst,
      cgst: inv.cgst,
      sgst: inv.sgst,
      placeOfSupply: inv.igst > 0 ? "Out of State" : "Maharashtra (27)"
    }));

    return {
      returnPeriod: "August 2026",
      totalB2BCount: b2bInvoices.length,
      b2bInvoices
    };
  }
}

window.accountingEngine = new GSTAccountingEngine();


/* --- END MODULE --- */

/* PackFlow AI ERP - Production Planning (MRP) & Shop Floor Engine */

class MRPEngine {
  constructor() {}

  /**
   * Schedule Job Card for shop floor production
   */
  createJobCard(salesOrder, targetQty) {
    const jobCardId = "JOB-" + Math.floor(4000 + Math.random() * 1000);
    return {
      id: jobCardId,
      soRef: salesOrder.id,
      customer: salesOrder.customer,
      boxSpecs: salesOrder.boxName,
      targetQty: targetQty || salesOrder.pendingQty,
      producedQty: 0,
      wasteKg: 0,
      assignedMachine: "Corrugator Line 1",
      status: "In Progress",
      scheduledStart: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };
  }

  /**
   * Calculate Machine Overall Equipment Effectiveness (OEE)
   */
  calculateOEE(availabilityPercent = 92, performancePercent = 95, qualityPercent = 98) {
    const oee = (availabilityPercent * performancePercent * qualityPercent) / 10000;
    return (oee * 100).toFixed(1);
  }

  /**
   * Update Machine Production Status
   */
  updateMachineProgress(machineId, addProducedQty, scrapKg) {
    const machines = window.appState.getMachines();
    const targetMachine = machines.find(m => m.id === machineId);
    if (targetMachine) {
      targetMachine.oeePercent = Math.min(99, targetMachine.oeePercent + 1);
      window.appState.saveState();
    }
  }
}

window.mrpEngine = new MRPEngine();


/* --- END MODULE --- */

/* PackFlow AI ERP - No-Code Automation Rules Engine */

class AutomationEngine {
  constructor() {
    this.logs = [];
  }

  /**
   * Process triggers across state changes
   * @param {String} triggerEvent Trigger string
   * @param {Object} payload Event context data
   */
  processTrigger(triggerEvent, payload) {
    const rules = window.appState.getAutomationRules();
    rules.forEach(rule => {
      if (rule.status === "Active" && rule.trigger.toLowerCase().includes(triggerEvent.toLowerCase())) {
        this.executeRule(rule, payload);
      }
    });
  }

  executeRule(rule, payload) {
    const logEntry = {
      timestamp: new Date().toLocaleTimeString(),
      ruleName: rule.name,
      trigger: rule.trigger,
      action: rule.action,
      payload
    };
    this.logs.unshift(logEntry);

    // In-app alert notification
    if (window.showToast) {
      window.showToast(`⚡ Automation Triggered: ${rule.name}`, "info");
    }
  }

  getLogs() {
    return this.logs;
  }
}

window.automationEngine = new AutomationEngine();


/* --- END MODULE --- */

/* PackFlow AI ERP - BoxBrain AI Assistant & Natural Language Engine */

class BoxBrainAIEngine {
  constructor() {}

  /**
   * Process Natural Language Prompt Query
   * @param {String} userPrompt Text entered in AI drawer
   */
  processQuery(userPrompt) {
    const promptLower = userPrompt.toLowerCase().trim();

    // 1. Costing Query Pattern (e.g. "Cost a 5 ply box 18x12x10 with 5000 qty" or "cost 3 ply 300x200x150")
    if (promptLower.includes("cost") || promptLower.includes("price") || promptLower.includes("box")) {
      return this.handleCostingQuery(userPrompt);
    }

    // 2. Paper Stock / Inventory Query
    if (promptLower.includes("stock") || promptLower.includes("paper") || promptLower.includes("reel")) {
      return this.handleStockQuery();
    }

    // 3. Customer Outstanding / Debtors Query
    if (promptLower.includes("outstanding") || promptLower.includes("customer") || promptLower.includes("debtor") || promptLower.includes("due")) {
      return this.handleOutstandingQuery();
    }

    // 4. Financial & Profit Query
    if (promptLower.includes("profit") || promptLower.includes("revenue") || promptLower.includes("gst") || promptLower.includes("sales")) {
      return this.handleFinancialQuery();
    }

    // 5. Default General Response
    return {
      text: `🤖 **BoxBrain AI Assistant**\nI am your packaging ERP assistant. You can ask me:\n- *"Cost a 5 ply box 18x12x10 with 5000 qty"*\n- *"Show paper stock under 1000kg"*\n- *"List customer outstanding balances"*\n- *"What is our monthly profit & GST payable?"*`,
      action: null
    };
  }

  handleCostingQuery(prompt) {
    // Extract dimensions (e.g. 18x12x10 or 300x200x150)
    let lengthMm = 300;
    let widthMm = 200;
    let heightMm = 150;
    let ply = 5;
    let qty = 5000;

    // Check for ply
    if (prompt.includes("3 ply") || prompt.includes("3ply")) ply = 3;
    if (prompt.includes("7 ply") || prompt.includes("7ply")) ply = 7;

    // Extract quantity
    const qtyMatch = prompt.match(/(\d+)\s*(qty|pcs|quantity|boxes)/i);
    if (qtyMatch) {
      qty = parseInt(qtyMatch[1]);
    }

    // Extract dimensions L x W x H
    const dimMatch = prompt.match(/(\d+)\s*[xX*×]\s*(\d+)\s*[xX*×]\s*(\d+)/);
    if (dimMatch) {
      let l = parseInt(dimMatch[1]);
      let w = parseInt(dimMatch[2]);
      let h = parseInt(dimMatch[3]);

      // If dimensions are under 50, assume inches and convert to mm
      if (l < 60) {
        lengthMm = Math.round(l * 25.4);
        widthMm = Math.round(w * 25.4);
        heightMm = Math.round(h * 25.4);
      } else {
        lengthMm = l;
        widthMm = w;
        heightMm = h;
      }
    }

    // Run Costing Engine
    const result = window.costingEngine.calculateBoxCost({
      lengthMm,
      widthMm,
      heightMm,
      ply,
      qtySlab: qty
    });

    const formattedText = `📦 **Box Costing Calculated for ${qty} pcs (${ply}-Ply RSC)**
- **Dimensions**: ${lengthMm} × ${widthMm} × ${heightMm} mm
- **Sheet Size**: ${result.sheetSpecs.sheetLengthMm} × ${result.sheetSpecs.sheetWidthMm} mm
- **Optimal Reel (Deckle)**: ${result.sheetSpecs.selectedDeckleInches}" (Trim waste: ${result.sheetSpecs.trimWastePercent}%)
- **Weight / Box**: ${result.weightSpecs.boxWeightKg} kg
- **Estimated Bursting Strength**: ${result.weightSpecs.estimatedBurstingStrength} kg/cm²
-------------------------------------------
- **Paper Cost**: ₹${result.costBreakdown.paperCostTotal}
- **Conversion & Overheads**: ₹${result.costBreakdown.totalConversionCost}
- **Cost Price**: ₹${result.costBreakdown.totalProductionCostPerBox}
- **Selling Price (+${result.batchSummary.marginPercent}% margin)**: **₹${result.costBreakdown.sellingPricePerBox}**
- **Grand Total (with 18% GST)**: **₹${result.costBreakdown.grandTotalPerBox}**
- **Total Order Value**: **₹${(result.costBreakdown.grandTotalPerBox * qty).toLocaleString('en-IN')}**`;

    return {
      text: formattedText,
      costingResult: result,
      action: "NAVIGATE_COSTING"
    };
  }

  handleStockQuery() {
    const reels = window.appState.getReels();
    let totalWeightKg = reels.reduce((acc, r) => acc + r.weightKg, 0);
    let lowStock = reels.filter(r => r.weightKg < 700);

    let text = `📜 **Kraft Paper Reel Stock Summary**\n- **Total Paper Inventory**: **${totalWeightKg.toLocaleString()} kg** across ${reels.length} reels.\n\n**Low Stock Reel Alerts (< 700 kg):**\n`;
    lowStock.forEach(r => {
      text += `• Reel #${r.id} | ${r.gsm} GSM ${r.bf} BF | ${r.deckleWidthInches}" Reel | **${r.weightKg} kg remaining**\n`;
    });

    return { text, action: "NAVIGATE_INVENTORY" };
  }

  handleOutstandingQuery() {
    const customers = window.appState.getCustomers();
    let totalOut = customers.reduce((acc, c) => acc + c.outstanding, 0);

    let text = `💳 **Customer Accounts Receivable Summary**\n- **Total Customer Outstanding**: **₹${totalOut.toLocaleString('en-IN')}**\n\n**Top Customer Receivables:**\n`;
    customers.forEach(c => {
      text += `• **${c.name}**: ₹${c.outstanding.toLocaleString('en-IN')} (Terms: ${c.paymentTerms})\n`;
    });

    return { text, action: "NAVIGATE_AR" };
  }

  handleFinancialQuery() {
    const invoices = window.appState.getInvoices();
    const debtors = window.appState.getCustomers();
    const summary = window.accountingEngine.generateFinancialSummary(invoices, debtors);

    let text = `📊 **Real-time Executive Financial Metrics**
- **Monthly Revenue**: ₹${summary.revenue.toLocaleString('en-IN')}
- **Cost of Goods Sold (COGS)**: ₹${summary.cogs.toLocaleString('en-IN')}
- **Gross Profit**: ₹${summary.grossProfit.toLocaleString('en-IN')} (${summary.grossProfitMarginPercent}%)
- **Net Profit**: ₹${summary.netProfit.toLocaleString('en-IN')} (${summary.netProfitMarginPercent}%)
- **GSTR-1 GST Tax Payable**: ₹${summary.gstSummary.totalGSTPayable.toLocaleString('en-IN')}`;

    return { text, action: "NAVIGATE_DASHBOARD" };
  }
}

window.boxBrainAI = new BoxBrainAIEngine();


/* --- END MODULE --- */

/* PackFlow AI ERP - Professional Printable PDF Document Generator */

class PDFDocumentGenerator {
  constructor() {}

  /**
   * Open printable preview modal or print window
   * @param {String} type Document type (Quotation, Invoice, JobCard, SalarySlip)
   * @param {Object} data Document payload
   */
  generateDocument(type, data) {
    const comp = window.appState.state.company;
    let htmlContent = "";

    if (type === "Quotation") {
      htmlContent = this.renderQuotationHTML(comp, data);
    } else if (type === "Invoice") {
      htmlContent = this.renderInvoiceHTML(comp, data);
    } else if (type === "JobCard") {
      htmlContent = this.renderJobCardHTML(comp, data);
    } else if (type === "SalarySlip") {
      htmlContent = this.renderSalarySlipHTML(comp, data);
    } else {
      htmlContent = this.renderInvoiceHTML(comp, data);
    }

    // Open print window
    const printWin = window.open("", "_blank", "width=850,height=1000");
    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${type} - PackFlow ERP</title>
        <link rel="stylesheet" href="css/modules.css">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; padding: 20px; }
          @media print {
            body { background: #fff; padding: 0; }
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="margin-bottom: 20px; display: flex; justify-content: flex-end; gap: 10px;">
          <button onclick="window.print()" style="background: #2563eb; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; cursor: pointer;">🖨️ Print / Download PDF</button>
          <button onclick="window.close()" style="background: #64748b; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; cursor: pointer;">Close Window</button>
        </div>
        ${htmlContent}
      </body>
      </html>
    `);
    printWin.document.close();
  }

  renderInvoiceHTML(comp, inv) {
    return `
      <div class="invoice-paper">
        <div class="invoice-header">
          <div class="company-branding">
            <h2>${comp.name}</h2>
            <p style="font-size: 0.85rem; color: #64748b;">${comp.address}</p>
            <p style="font-size: 0.85rem; color: #64748b;"><strong>GSTIN:</strong> ${comp.gstin} | <strong>PAN:</strong> ${comp.pan}</p>
          </div>
          <div style="text-align: right;">
            <h1 style="color: #2563eb; font-size: 1.8rem; margin: 0;">TAX INVOICE</h1>
            <p style="font-size: 0.9rem; margin-top: 5px;"><strong>Invoice No:</strong> ${inv.invoiceNo || 'INV-2026-0089'}</p>
            <p style="font-size: 0.9rem;"><strong>Date:</strong> ${inv.date || '2026-08-31'}</p>
            <p style="font-size: 0.85rem; color: #059669;"><strong>E-Way Bill:</strong> ${inv.eWayBillNo || '221045998812'}</p>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
          <div style="width: 48%; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px;">
            <h4 style="margin-top: 0; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Billed To (Customer):</h4>
            <p style="font-weight: 700; margin-bottom: 4px;">${inv.customer || 'Sun Pharmaceutical Industries Ltd'}</p>
            <p style="font-size: 0.85rem; margin: 2px 0;">GSTIN: ${inv.gstin || '27AAACS9876K1Z8'}</p>
            <p style="font-size: 0.85rem; margin: 2px 0;">State: Maharashtra (Code: 27)</p>
          </div>
          <div style="width: 48%; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px;">
            <h4 style="margin-top: 0; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Transport & Dispatch Details:</h4>
            <p style="font-size: 0.85rem; margin: 2px 0;">Vehicle No: MH-14-GX-5542</p>
            <p style="font-size: 0.85rem; margin: 2px 0;">Dispatch Date: ${inv.date || '2026-08-31'}</p>
            <p style="font-size: 0.85rem; margin: 2px 0;">Place of Supply: Halol, Gujarat</p>
          </div>
        </div>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Description of Goods</th>
              <th>HSN Code</th>
              <th>Qty (Pcs)</th>
              <th>Rate (₹)</th>
              <th>Taxable Value (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>Pharma Export Shipper 7-Ply 24x18x18</strong><br><small style="color:#64748b">180 GSM Kraft / 140 Flute / 28 BF Heavy Duty</small></td>
              <td>${inv.hsnCode || '48191010'}</td>
              <td>3,000</td>
              <td>₹108.75</td>
              <td>₹${(inv.taxableValue || 326271).toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>

        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
          <div style="width: 50%; font-size: 0.85rem;">
            <h5 style="margin-bottom: 5px;">Bank Details for Payment:</h5>
            <p style="margin: 2px 0;">Bank: ${comp.bank.name}</p>
            <p style="margin: 2px 0;">A/C No: ${comp.bank.accountNo}</p>
            <p style="margin: 2px 0;">IFSC: ${comp.bank.ifsc}</p>
          </div>
          <div style="width: 45%;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
              <tr>
                <td style="padding: 4px 0;">Taxable Amount:</td>
                <td style="text-align: right; font-weight: 600;">₹${(inv.taxableValue || 326271).toLocaleString('en-IN')}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0;">IGST (18%):</td>
                <td style="text-align: right; font-weight: 600;">₹${(inv.igst || 58729).toLocaleString('en-IN')}</td>
              </tr>
              <tr style="border-top: 2px solid #0f172a; font-size: 1.1rem; font-weight: 800;">
                <td style="padding: 8px 0; color: #0f172a;">Grand Total:</td>
                <td style="text-align: right; color: #2563eb;">₹${(inv.totalAmount || 385000).toLocaleString('en-IN')}</td>
              </tr>
            </table>
          </div>
        </div>

        <div style="margin-top: 40px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <div style="width: 80px; height: 80px; border: 1px solid #cbd5e1; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #64748b;">
              [ GST QR CODE ]
            </div>
          </div>
          <div style="text-align: right;">
            <p style="font-size: 0.85rem; margin-bottom: 40px;">For ${comp.name}</p>
            <p style="font-weight: 700; border-top: 1px solid #94a3b8; padding-top: 5px;">Authorized Signatory</p>
          </div>
        </div>
      </div>
    `;
  }

  renderQuotationHTML(comp, qt) {
    return `
      <div class="invoice-paper">
        <div class="invoice-header">
          <div class="company-branding">
            <h2>${comp.name}</h2>
            <p style="font-size: 0.85rem; color: #64748b;">Corrugated Packaging Division</p>
          </div>
          <div style="text-align: right;">
            <h1 style="color: #7c3aed; font-size: 1.8rem; margin: 0;">QUOTATION</h1>
            <p style="font-size: 0.9rem; margin-top: 5px;"><strong>Ref No:</strong> ${qt.id || 'QT-8001'}</p>
            <p style="font-size: 0.9rem;"><strong>Date:</strong> ${qt.date || '2026-08-28'}</p>
          </div>
        </div>

        <div style="margin-bottom: 20px; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px;">
          <h4 style="margin-top: 0;">Quotation Prepared For:</h4>
          <p style="font-weight: 700; font-size: 1.1rem; color: #0f172a;">${qt.customer || 'Amazon Seller Services India Pvt Ltd'}</p>
          <p style="font-size: 0.85rem; color: #475569;">Item Requested: <strong>${qt.boxSpecs || '18 x 12 x 10 in (5-Ply RSC)'}</strong></p>
        </div>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>Box Specification</th>
              <th>Quantity</th>
              <th>Unit Cost (₹)</th>
              <th>Selling Price / Pc</th>
              <th>Total Taxable (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>${qt.boxSpecs || '18 x 12 x 10 in (5-Ply RSC)'}</strong><br>
                <small style="color:#64748b">Top Liner: 180GSM 24BF | Flute: 140GSM 22BF | BC Flute | 2 Color Flexo Print</small>
              </td>
              <td>${(qt.qty || 10000).toLocaleString()}</td>
              <td>₹${qt.costPerBox || '34.50'}</td>
              <td><strong>₹${qt.unitPrice || '40.70'}</strong></td>
              <td>₹${(qt.totalAmount || 407000).toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
          <div style="width: 45%;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
              <tr>
                <td style="padding: 4px 0;">Subtotal:</td>
                <td style="text-align: right; font-weight: 600;">₹${(qt.totalAmount || 407000).toLocaleString('en-IN')}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0;">GST (18%):</td>
                <td style="text-align: right; font-weight: 600;">₹${(qt.gstAmount || 73260).toLocaleString('en-IN')}</td>
              </tr>
              <tr style="border-top: 2px solid #0f172a; font-size: 1.1rem; font-weight: 800;">
                <td style="padding: 8px 0;">Grand Total:</td>
                <td style="text-align: right; color: #7c3aed;">₹${(qt.grandTotal || 480260).toLocaleString('en-IN')}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  renderJobCardHTML(comp, job) {
    return `
      <div class="invoice-paper">
        <div style="border-bottom: 2px solid #0f172a; padding-bottom: 10px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
          <h2>SHOP FLOOR JOB CARD - ${job.id || 'JOB-4001'}</h2>
          <span style="background: #2563eb; color: #fff; padding: 4px 12px; border-radius: 99px; font-weight: 700;">${job.assignedMachine || 'Corrugator Line 1'}</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 0.9rem;">
          <div><strong>Customer:</strong> ${job.customer || 'Amazon India'}</div>
          <div><strong>Sales Order Ref:</strong> ${job.soRef || 'SO-5001'}</div>
          <div><strong>Box Specs:</strong> ${job.boxSpecs || '18x12x10 inch 5-Ply'}</div>
          <div><strong>Target Quantity:</strong> ${(job.targetQty || 10000).toLocaleString()} Pcs</div>
          <div><strong>Sheet Cut Size:</strong> ${job.sheetSize || '1575 mm x 810 mm'}</div>
          <div><strong>Reel Width (Deckle):</strong> ${job.deckleUsed || '64 inch Reel'}</div>
        </div>
        <h4 style="margin-top: 25px;">Production Stage Sign-offs:</h4>
        <table class="invoice-table">
          <thead>
            <tr><th>Process</th><th>Machine</th><th>Operator</th><th>Passed Qty</th><th>Scrap (Kg)</th><th>Sign</th></tr>
          </thead>
          <tbody>
            <tr><td>Corrugation</td><td>Corrugator Line 1</td><td>Suresh P.</td><td>4,200</td><td>45 kg</td><td>___</td></tr>
            <tr><td>Printing</td><td>Flexo Printer 1</td><td>Ramesh M.</td><td>4,180</td><td>12 kg</td><td>___</td></tr>
            <tr><td>Slotting & Stitching</td><td>Stitcher 2</td><td>Vikas G.</td><td>4,150</td><td>8 kg</td><td>___</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }

  renderSalarySlipHTML(comp, emp) {
    return `
      <div class="invoice-paper">
        <div style="text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 10px; margin-bottom: 20px;">
          <h3>${comp.name}</h3>
          <p style="font-size: 0.85rem;">SALARY PAYSLIP FOR AUGUST 2026</p>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 0.9rem;">
          <div>
            <p><strong>Employee Name:</strong> ${emp.name || 'Suresh Patil'}</p>
            <p><strong>Emp ID:</strong> ${emp.id || 'EMP-101'}</p>
            <p><strong>Designation:</strong> ${emp.designation || 'Production Manager'}</p>
          </div>
          <div>
            <p><strong>Department:</strong> ${emp.dept || 'Production'}</p>
            <p><strong>Bank A/C:</strong> XXXXXX4412</p>
            <p><strong>PF UAN:</strong> 100988771122</p>
          </div>
        </div>
        <table class="invoice-table">
          <thead>
            <tr><th>Earnings</th><th>Amount (₹)</th><th>Deductions</th><th>Amount (₹)</th></tr>
          </thead>
          <tbody>
            <tr><td>Basic Salary</td><td>₹${emp.basicSalary || 45000}</td><td>Provident Fund (PF 12%)</td><td>₹5,400</td></tr>
            <tr><td>HRA (40%)</td><td>₹18,000</td><td>Employee State Insurance (ESI)</td><td>₹475</td></tr>
            <tr><td>Special Allowance</td><td>₹7,000</td><td>Professional Tax (PT)</td><td>₹200</td></tr>
            <tr style="font-weight: 700; background: #f1f5f9;">
              <td>Total Gross Earnings</td><td>₹70,000</td><td>Total Deductions</td><td>₹6,075</td></tr>
          </tbody>
        </table>
        <h3 style="text-align: right; color: #059669; margin-top: 15px;">NET PAYABLE SALARY: ₹63,925</h3>
      </div>
    `;
  }
}

window.pdfGenerator = new PDFDocumentGenerator();


/* --- END MODULE --- */

/* PackFlow AI ERP - Standalone Single-Page Application Engine with Custom HTML Modals */

class PackFlowApp {
  constructor() {
    this.currentView = "dashboard";
    this.init();
  }

  init() {
    try {
      this.bindEvents();
      this.renderNavigation();
      this.navigateTo("dashboard");
      
      if (window.appState && typeof window.appState.subscribe === "function") {
        window.appState.subscribe(() => {
          this.renderNavigation();
          this.refreshCurrentView();
        });
      }
    } catch (err) {
      console.error("PackFlowApp init error:", err);
    }
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
            if (reply.action === "NAVIGATE_COSTING") this.navigateTo("costing");
            if (reply.action === "NAVIGATE_INVENTORY") this.navigateTo("inventory");
            if (reply.action === "NAVIGATE_AR") this.navigateTo("ar");
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
          if (term.includes("cost") || term.includes("box")) this.navigateTo("costing");
          else if (term.includes("inv") || term.includes("tax")) this.navigateTo("invoices");
          else if (term.includes("paper") || term.includes("reel")) this.navigateTo("inventory");
          else if (term.includes("job") || term.includes("prod")) this.navigateTo("mrp");
        }
      });
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("mobileMenuToggle");
    const sidebar = document.querySelector(".sidebar");
    if (menuToggle && sidebar) {
      menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
    }

    // Global Event Delegation Handler for Navigation & Actions
    document.addEventListener("click", (e) => {
      const navItem = e.target.closest("[data-view]");
      if (navItem) {
        e.preventDefault();
        const viewId = navItem.getAttribute("data-view");
        if (viewId) this.navigateTo(viewId);
        return;
      }

      const actionBtn = e.target.closest("[data-action]");
      if (actionBtn) {
        e.preventDefault();
        const action = actionBtn.getAttribute("data-action");
        if (action === "costing") this.navigateTo("costing");
        else if (action === "invoices") this.navigateTo("invoices");
        else if (action === "ar") this.navigateTo("ar");
        else if (action === "mrp") this.navigateTo("mrp");
        else if (action === "inventory") this.navigateTo("inventory");
        else if (action === "accounting") this.navigateTo("accounting");
        else if (action === "add-customer") this.showAddCustomerModal();
        else if (action === "add-reel") this.showAddReelModal();
        else if (action === "add-po") this.showAddPOModal();
        else if (action === "add-receipt") this.showAddReceiptModal();
        else if (action === "add-employee") this.showAddEmployeeModal();
        else if (action === "add-qc") this.showAddQCModal();
        else if (action === "add-rule") this.showAddRuleModal();
        else if (action === "pdf-invoice") window.pdfGenerator ? window.pdfGenerator.generateDocument('Invoice', {}) : null;
      }
    });
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

  renderNavigation() {
    const navContainer = document.getElementById("sidebarNav");
    if (!navContainer) return;

    const customersCount = window.appState ? window.appState.getCustomers().length : 4;
    const quotationsCount = window.appState ? window.appState.getQuotations().length : 2;
    const salesCount = window.appState ? window.appState.getSalesOrders().length : 2;
    const jobsCount = window.appState ? window.appState.getJobCards().length : 2;
    const reelsCount = window.appState ? window.appState.getReels().length : 5;
    const posCount = window.appState ? window.appState.getPurchaseOrders().length : 2;
    const dispatchCount = window.appState ? window.appState.getDispatchNotes().length : 1;
    const invoicesCount = window.appState ? window.appState.getInvoices().length : 2;
    const billsCount = window.appState ? window.appState.getVendorBills().length : 2;
    const employeesCount = window.appState ? window.appState.getEmployees().length : 4;
    const qcCount = window.appState ? window.appState.getQCLogs().length : 2;
    const rulesCount = window.appState ? window.appState.getAutomationRules().length : 3;

    const navModules = [
      { id: "dashboard", icon: "ri-dashboard-3-line", symbol: "📊", label: "Executive Dashboard", badge: null },
      { id: "crm", icon: "ri-user-star-line", symbol: "👥", label: "CRM & Customers", badge: customersCount },
      { id: "quotations", icon: "ri-file-calculator-line", symbol: "📝", label: "AI Quotation System", badge: quotationsCount },
      { id: "costing", icon: "ri-box-3-line", symbol: "📦", label: "Corrugated Box Costing", badge: "CAD Studio" },
      { id: "sales", icon: "ri-shopping-cart-2-line", symbol: "🛒", label: "Sales Orders", badge: salesCount },
      { id: "mrp", icon: "ri-settings-4-line", symbol: "⚙️", label: "Production Planning (MRP)", badge: jobsCount },
      { id: "inventory", icon: "ri-database-2-line", symbol: "📜", label: "Raw Paper Inventory", badge: reelsCount },
      { id: "purchase", icon: "ri-shopping-bag-line", symbol: "🛍️", label: "Purchase & Vendors", badge: posCount },
      { id: "warehouse", icon: "ri-truck-line", symbol: "🚚", label: "Warehouse & Dispatch", badge: dispatchCount },
      { id: "accounting", icon: "ri-bank-line", symbol: "🏛️", label: "GST Accounting (India)", badge: "GSTR-1" },
      { id: "invoices", icon: "ri-receipt-line", symbol: "🧾", label: "Tax Invoicing System", badge: invoicesCount },
      { id: "ar", icon: "ri-hand-coin-line", symbol: "💰", label: "Accounts Receivable", badge: "₹8.4L" },
      { id: "ap", icon: "ri-money-dollar-box-line", symbol: "💳", label: "Accounts Payable", badge: billsCount },
      { id: "hr", icon: "ri-team-line", symbol: "👔", label: "HR & Payroll", badge: employeesCount },
      { id: "qc", icon: "ri-checkbox-circle-line", symbol: "🔬", label: "Quality Control (QC)", badge: qcCount },
      { id: "analytics", icon: "ri-bar-chart-2-line", symbol: "📈", label: "AI Reports & Analytics", badge: null },
      { id: "automation", icon: "ri-robot-line", symbol: "⚡", label: "Automation Rules Matrix", badge: rulesCount }
    ];

    navContainer.innerHTML = `
      <div class="nav-section-title">Enterprise ERP Modules</div>
      ${navModules.map(mod => `
        <div class="nav-item ${this.currentView === mod.id ? 'active' : ''}" data-view="${mod.id}" onclick="window.navigateTo('${mod.id}');">
          <i class="${mod.icon}">${mod.symbol}</i>
          <span>${mod.label}</span>
          ${mod.badge !== null ? `<span class="nav-badge">${mod.badge}</span>` : ''}
        </div>
      `).join('')}
    `;
  }

  renderToolbar(title, subtitle, moduleName) {
    return `
      <div class="module-toolbar">
        <div class="breadcrumb-list">
          <a href="#" data-view="dashboard" onclick="window.navigateTo('dashboard'); return false;">PackFlow ERP</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color:var(--text-primary); font-weight:600;">${moduleName}</span>
        </div>
        <div class="stats-strip">
          <div class="stat-item"><span style="color:var(--text-muted);">Active Plant:</span> <strong>Plant 1 (Pune)</strong></div>
          <div class="stat-item"><span style="color:var(--text-muted);">Financial Year:</span> <strong>2026-2027</strong></div>
          <div class="stat-item"><span style="color:var(--text-muted);">GSTIN:</span> <strong>27AAACP1234F1Z9</strong></div>
        </div>
      </div>
      <div style="display:flex; gap:0.5rem; overflow-x:auto; padding:0.5rem 0; margin-bottom:1rem; border-bottom:1px solid var(--border-color);">
        <button class="btn btn-sm ${this.currentView === 'dashboard' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('dashboard')">📊 Dashboard</button>
        <button class="btn btn-sm ${this.currentView === 'costing' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('costing')">📦 Box CAD Studio</button>
        <button class="btn btn-sm ${this.currentView === 'crm' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('crm')">👥 Customers</button>
        <button class="btn btn-sm ${this.currentView === 'quotations' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('quotations')">📝 Quotations</button>
        <button class="btn btn-sm ${this.currentView === 'sales' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('sales')">🛒 Sales Orders</button>
        <button class="btn btn-sm ${this.currentView === 'mrp' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('mrp')">⚙️ MRP Shop Floor</button>
        <button class="btn btn-sm ${this.currentView === 'inventory' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('inventory')">📜 Paper Reels</button>
        <button class="btn btn-sm ${this.currentView === 'accounting' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('accounting')">🏛️ GST Accounting</button>
        <button class="btn btn-sm ${this.currentView === 'invoices' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('invoices')">🧾 Tax Invoices</button>
        <button class="btn btn-sm ${this.currentView === 'ar' ? 'btn-primary' : 'btn-secondary'}" onclick="window.navigateTo('ar')">💰 Outstanding AR</button>
      </div>
    `;
  }

  navigateTo(viewId) {
    try {
      this.currentView = viewId;
      this.renderNavigation();
      const content = document.getElementById("mainContent");
      if (!content) return;

      switch (viewId) {
        case "dashboard": content.innerHTML = this.renderDashboardView(); break;
        case "crm": content.innerHTML = this.renderCRMView(); break;
        case "quotations": content.innerHTML = this.renderQuotationsView(); break;
        case "costing": content.innerHTML = this.renderCostingView(); this.initCostingEvents(); break;
        case "sales": content.innerHTML = this.renderSalesView(); break;
        case "mrp": content.innerHTML = this.renderMRPView(); break;
        case "inventory": content.innerHTML = this.renderInventoryView(); break;
        case "purchase": content.innerHTML = this.renderPurchaseView(); break;
        case "warehouse": content.innerHTML = this.renderWarehouseView(); break;
        case "accounting": content.innerHTML = this.renderAccountingView(); break;
        case "invoices": content.innerHTML = this.renderInvoicesView(); break;
        case "ar": content.innerHTML = this.renderARView(); break;
        case "ap": content.innerHTML = this.renderAPView(); break;
        case "hr": content.innerHTML = this.renderHRView(); break;
        case "qc": content.innerHTML = this.renderQCView(); break;
        case "analytics": content.innerHTML = this.renderAnalyticsView(); break;
        case "automation": content.innerHTML = this.renderAutomationView(); break;
        default: content.innerHTML = this.renderDashboardView();
      }

      window.scrollTo(0, 0);
      this.showToast(`Switched to: ${viewId.toUpperCase()} Module`, "info");
    } catch (err) {
      console.error("Navigation error:", err);
    }
  }

  refreshCurrentView() {
    this.navigateTo(this.currentView);
  }

  /* ---------------------------------------------------- */
  /* Native SVG Chart Renderers                           */
  /* ---------------------------------------------------- */
  renderSVGRevenueLineChart() {
    return `
      <svg viewBox="0 0 500 220" style="width:100%; height:220px; overflow:visible;">
        <line x1="40" y1="30" x2="480" y2="30" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
        <line x1="40" y1="80" x2="480" y2="80" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
        <line x1="40" y1="130" x2="480" y2="130" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
        <line x1="40" y1="180" x2="480" y2="180" stroke="rgba(255,255,255,0.15)"/>
        
        <text x="32" y="34" fill="#9ca3af" font-size="10" text-anchor="end">₹30L</text>
        <text x="32" y="84" fill="#9ca3af" font-size="10" text-anchor="end">₹20L</text>
        <text x="32" y="134" fill="#9ca3af" font-size="10" text-anchor="end">₹10L</text>
        <text x="32" y="184" fill="#9ca3af" font-size="10" text-anchor="end">₹0L</text>

        <text x="60" y="200" fill="#9ca3af" font-size="10" text-anchor="middle">Apr</text>
        <text x="140" y="200" fill="#9ca3af" font-size="10" text-anchor="middle">May</text>
        <text x="220" y="200" fill="#9ca3af" font-size="10" text-anchor="middle">Jun</text>
        <text x="300" y="200" fill="#9ca3af" font-size="10" text-anchor="middle">Jul</text>
        <text x="380" y="200" fill="#9ca3af" font-size="10" text-anchor="middle">Aug</text>
        <text x="460" y="200" fill="#06b6d4" font-size="10" text-anchor="middle" font-weight="bold">Sep (Tgt)</text>

        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <path d="M 60 87.5 L 140 74 L 220 81 L 300 63 L 380 37.5 L 460 30 L 460 180 L 60 180 Z" fill="url(#revenueGrad)"/>
        <path d="M 60 87.5 L 140 74 L 220 81 L 300 63 L 380 37.5 L 460 30" fill="none" stroke="#3b82f6" stroke-width="3"/>
        <path d="M 60 124 L 140 115 L 220 119.5 L 300 107.5 L 380 92 L 460 87.5" fill="none" stroke="#f43f5e" stroke-width="2" stroke-dasharray="5 5"/>

        <circle cx="60" cy="87.5" r="4" fill="#3b82f6"/>
        <circle cx="140" cy="74" r="4" fill="#3b82f6"/>
        <circle cx="220" cy="81" r="4" fill="#3b82f6"/>
        <circle cx="300" cy="63" r="4" fill="#3b82f6"/>
        <circle cx="380" cy="37.5" r="5" fill="#10b981"/>
        <circle cx="460" cy="30" r="5" fill="#06b6d4"/>

        <rect x="330" y="15" width="100" height="22" rx="4" fill="#1e293b" stroke="#10b981"/>
        <text x="380" y="30" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Aug: ₹28.50L</text>
      </svg>
    `;
  }

  renderSVGOEEDoughnutChart() {
    return `
      <svg viewBox="0 0 200 200" style="width:100%; height:200px;">
        <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="24"/>
        <circle cx="100" cy="100" r="75" fill="none" stroke="#10b981" stroke-width="24" stroke-dasharray="417" stroke-dashoffset="48" transform="rotate(-90 100 100)"/>
        <circle cx="100" cy="100" r="75" fill="none" stroke="#3b82f6" stroke-width="24" stroke-dasharray="417" stroke-dashoffset="180" transform="rotate(30 100 100)"/>
        <circle cx="100" cy="100" r="75" fill="none" stroke="#f59e0b" stroke-width="24" stroke-dasharray="417" stroke-dashoffset="310" transform="rotate(140 100 100)"/>
        
        <text x="100" y="95" fill="#f8fafc" font-size="22" font-weight="800" text-anchor="middle">88.5%</text>
        <text x="100" y="118" fill="#9ca3af" font-size="11" text-anchor="middle">Corrugator OEE</text>
      </svg>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-size:0.75rem; color:var(--text-secondary); margin-top:0.5rem;">
        <div><span style="color:#10b981;">■</span> Line 1: 88.5%</div>
        <div><span style="color:#3b82f6;">■</span> Flexo 1: 92.0%</div>
        <div><span style="color:#f59e0b;">■</span> Die Cutter: 74.0%</div>
        <div><span style="color:#8b5cf6;">■</span> Gluer: 85.0%</div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* Custom HTML Modal Dialog Overlay Renderer            */
  /* ---------------------------------------------------- */
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
      this.refreshCurrentView();
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
      this.refreshCurrentView();
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
      this.refreshCurrentView();
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
      this.refreshCurrentView();
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
      this.refreshCurrentView();
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
      this.refreshCurrentView();
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
      this.refreshCurrentView();
    });
  }

  /* ---------------------------------------------------- */
  /* 1. EXECUTIVE DASHBOARD VIEW                          */
  /* ---------------------------------------------------- */
  renderDashboardView() {
    const invoices = window.appState ? window.appState.getInvoices() : [];
    const customers = window.appState ? window.appState.getCustomers() : [];
    const jobs = window.appState ? window.appState.getJobCards() : [];
    const reels = window.appState ? window.appState.getReels() : [];
    const summary = window.accountingEngine ? window.accountingEngine.generateFinancialSummary(invoices, customers) : { revenue: 2850000 };
    const totalReelWeightKg = reels.reduce((a, b) => a + (b.weightKg || 0), 0);

    return `
      ${this.renderToolbar("Executive Dashboard", "Real-time metrics", "Executive Dashboard")}
      
      <div class="page-header">
        <div class="page-title-group">
          <h1>Executive Operations Dashboard</h1>
          <p>Real-time factory metrics, revenue performance, and shop floor corrugation OEE.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-secondary" data-action="pdf-invoice" onclick="window.pdfGenerator.generateDocument('Invoice', {})"><i class="ri-printer-line">🖨️</i> Export Daily PDF Report</button>
          <button class="btn btn-primary" data-action="costing" onclick="window.navigateTo('costing')"><i class="ri-add-line">➕</i> New Box Costing</button>
        </div>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card" data-action="invoices" onclick="window.navigateTo('invoices')" style="cursor:pointer;">
          <div class="kpi-header">
            <span class="kpi-title">Monthly Sales Revenue</span>
            <div class="kpi-icon blue"><i class="ri-money-rupee-circle-line">💰</i></div>
          </div>
          <div class="kpi-value">₹${((summary.revenue || 2850000) / 100000).toFixed(2)} Lakhs</div>
          <div class="kpi-footer">
            <span class="trend-badge up"><i class="ri-arrow-up-line">▲</i> +14.2%</span>
            <span class="kpi-footer-text">Target: ₹25.0 Lakhs</span>
          </div>
        </div>

        <div class="kpi-card" data-action="ar" onclick="window.navigateTo('ar')" style="cursor:pointer;">
          <div class="kpi-header">
            <span class="kpi-title">Customer Outstanding</span>
            <div class="kpi-icon rose"><i class="ri-hand-coin-line">💳</i></div>
          </div>
          <div class="kpi-value">₹27.35 Lakhs</div>
          <div class="kpi-footer">
            <span class="trend-badge down"><i class="ri-time-line">⏱️</i> 4 Customers</span>
            <span class="kpi-footer-text">Aging > 30 Days</span>
          </div>
        </div>

        <div class="kpi-card" data-action="mrp" onclick="window.navigateTo('mrp')" style="cursor:pointer;">
          <div class="kpi-header">
            <span class="kpi-title">Corrugator Line OEE</span>
            <div class="kpi-icon emerald"><i class="ri-speed-up-line">⚡</i></div>
          </div>
          <div class="kpi-value">88.5%</div>
          <div class="kpi-footer">
            <span class="trend-badge up"><i class="ri-check-line">✓</i> Optimal</span>
            <span class="kpi-footer-text">145 Meters/Min</span>
          </div>
        </div>

        <div class="kpi-card" data-action="inventory" onclick="window.navigateTo('inventory')" style="cursor:pointer;">
          <div class="kpi-header">
            <span class="kpi-title">Raw Paper Inventory</span>
            <div class="kpi-icon amber"><i class="ri-database-2-line">📜</i></div>
          </div>
          <div class="kpi-value">${(totalReelWeightKg / 1000).toFixed(2)} Tonnes</div>
          <div class="kpi-footer">
            <span class="trend-badge up"><i class="ri-information-line">ℹ️</i> ${reels.length} Kraft Reels</span>
            <span class="kpi-footer-text">FIFO Stock Active</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-line-chart-line">📈</i> Monthly Sales & Revenue Trend (₹ Lakhs)</div>
          </div>
          <div class="card-body">
            ${this.renderSVGRevenueLineChart()}
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-donut-chart-line">🍩</i> Corrugation Plant OEE</div>
          </div>
          <div class="card-body">
            ${this.renderSVGOEEDoughnutChart()}
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-time-line">⚙️</i> Active Corrugation Production Orders</div>
            <button class="btn btn-sm btn-secondary" data-action="mrp" onclick="window.navigateTo('mrp')">View All MRP</button>
          </div>
          <div class="card-body" style="padding: 0;">
            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Job ID</th>
                    <th>Customer Name</th>
                    <th>Box Specs</th>
                    <th>Target Qty</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${jobs.map(job => `
                    <tr>
                      <td><strong>${job.id}</strong></td>
                      <td>${job.customer}</td>
                      <td>${job.boxSpecs}</td>
                      <td>${(job.targetQty || 0).toLocaleString()} Pcs</td>
                      <td>
                        <div style="display:flex; align-items:center; gap:8px;">
                          <div class="progress-bar-container" style="width:100px;">
                            <div class="progress-bar-fill" style="width:${Math.min(100, Math.round((job.producedQty || 0) / (job.targetQty || 1) * 100))}%;"></div>
                          </div>
                          <span>${Math.min(100, Math.round((job.producedQty || 0) / (job.targetQty || 1) * 100))}%</span>
                        </div>
                      </td>
                      <td><span class="status-pill ${job.status === 'Completed' ? 'success' : 'info'}">${job.status}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-shield-flash-line">⚡</i> Quick ERP Operations</div>
          </div>
          <div class="card-body" style="display:flex; flex-direction:column; gap:0.75rem;">
            <button class="btn btn-primary" style="justify-content:flex-start;" data-action="costing" onclick="window.navigateTo('costing')">
              <i class="ri-calculator-line">📦</i> Corrugated Box CAD Studio
            </button>
            <button class="btn btn-secondary" style="justify-content:flex-start;" data-action="pdf-invoice" onclick="window.pdfGenerator.generateDocument('Invoice', {})">
              <i class="ri-file-text-line">📄</i> Print Tax Invoice PDF
            </button>
            <button class="btn btn-secondary" style="justify-content:flex-start;" data-action="add-customer" onclick="window.showAddCustomerModal()">
              <i class="ri-user-add-line">👤</i> Add New Customer
            </button>
            <button class="btn btn-secondary" style="justify-content:flex-start;" data-action="add-reel" onclick="window.showAddReelModal()">
              <i class="ri-add-circle-line">📜</i> Add Kraft Reel Stock
            </button>
            <button class="btn btn-secondary" style="justify-content:flex-start;" data-action="accounting" onclick="window.navigateTo('accounting')">
              <i class="ri-file-paper-2-line">🏛️</i> GSTR-1 Tax Summary Report
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 2. CRM & CUSTOMERS VIEW                              */
  /* ---------------------------------------------------- */
  renderCRMView() {
    const customers = window.appState ? window.appState.getCustomers() : [];
    return `
      ${this.renderToolbar("CRM & Customers", "Customer Database", "CRM & Customers")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>CRM & Customer Management</h1>
          <p>GSTIN auto-validation, credit terms, multi-shipping addresses, and customer ledger statements.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" data-action="add-customer" onclick="window.showAddCustomerModal()"><i class="ri-user-add-line">👤</i> Add New Customer</button>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Customer ID</th>
                  <th>Company Name</th>
                  <th>GSTIN</th>
                  <th>Location</th>
                  <th>Contact Person</th>
                  <th>Credit Limit</th>
                  <th>Outstanding</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${customers.map(c => `
                  <tr>
                    <td><strong>${c.id}</strong></td>
                    <td>${c.name}</td>
                    <td><span class="reel-badge">${c.gstin}</span></td>
                    <td>${c.city}</td>
                    <td>${c.contact}<br><small style="color:var(--text-muted);">${c.phone}</small></td>
                    <td>₹${(c.creditLimit || 0).toLocaleString('en-IN')}</td>
                    <td style="color:var(--accent-rose); font-weight:700;">₹${(c.outstanding || 0).toLocaleString('en-IN')}</td>
                    <td>
                      <button class="btn btn-sm btn-secondary" onclick="window.pdfGenerator.generateDocument('Quotation', {customer: '${c.name}'})">
                        <i class="ri-file-text-line">📄</i> Ledger
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 3. AI QUOTATION SYSTEM VIEW                          */
  /* ---------------------------------------------------- */
  renderQuotationsView() {
    const quotations = window.appState ? window.appState.getQuotations() : [];
    return `
      ${this.renderToolbar("AI Quotations", "Quotations List", "AI Quotation System")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>AI Quotation Management</h1>
          <p>Automated quotation creation, box costing formulas, customer approval, and instant conversion to Sales Orders.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" data-action="costing" onclick="window.navigateTo('costing')"><i class="ri-calculator-line">📦</i> Open Costing Calculator</button>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Quotation Ref</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Box Specification</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Grand Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${quotations.map(qt => `
                  <tr>
                    <td><strong>${qt.id}</strong></td>
                    <td>${qt.date}</td>
                    <td>${qt.customer}</td>
                    <td>${qt.boxSpecs}</td>
                    <td>${(qt.qty || 0).toLocaleString()} Pcs</td>
                    <td>₹${qt.unitPrice}</td>
                    <td><strong>₹${(qt.grandTotal || 0).toLocaleString('en-IN')}</strong></td>
                    <td><span class="status-pill ${qt.status === 'Approved' ? 'success' : 'warning'}">${qt.status}</span></td>
                    <td>
                      <div style="display:flex; gap:0.35rem;">
                        <button class="btn btn-sm btn-secondary" onclick="window.pdfGenerator.generateDocument('Quotation', ${JSON.stringify(qt).replace(/"/g, '&quot;')})">PDF</button>
                        ${qt.status !== 'Approved' ? `<button class="btn btn-sm btn-success" onclick="window.app.convertQuotation('${qt.id}')">Convert to SO</button>` : ''}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  convertQuotation(qtId) {
    const newSO = window.appState ? window.appState.convertQuotationToSO(qtId) : null;
    if (newSO) {
      this.showToast(`Quotation approved & Sales Order ${newSO.id} generated!`, "success");
      this.navigateTo("sales");
    }
  }

  /* ---------------------------------------------------- */
  /* 4. CORRUGATED BOX COSTING CALCULATOR & CAD STUDIO    */
  /* ---------------------------------------------------- */
  renderCostingView() {
    return `
      ${this.renderToolbar("Box Costing Studio", "CAD Engineering", "Corrugated Box Costing")}

      <div class="page-header">
        <div class="page-title-group">
          <h1>Corrugated Box Costing Engineering & CAD Studio</h1>
          <p>Real-time calculation of sheet dimensions, 3D CAD wireframe, deckle optimization, and profit margin.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" id="btnSaveQuotation"><i class="ri-file-add-line">📝</i> Convert to Quotation</button>
        </div>
      </div>

      <div class="box-studio-grid">
        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-input-cursor-move">📐</i> Box Specifications</div>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label class="form-label">FEFCO Box Style</label>
              <select class="form-control" id="costFefco">
                <option value="FEFCO 0201">FEFCO 0201 (RSC Slotted Box)</option>
                <option value="FEFCO 0200">FEFCO 0200 (HSC Open Top)</option>
                <option value="FEFCO 0427">FEFCO 0427 (Die-Cut Mailer)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Box Dimensions L × W × H (mm)</label>
              <div style="display:flex; gap:0.5rem;">
                <input type="number" class="form-control" id="costLength" value="300" placeholder="Length">
                <input type="number" class="form-control" id="costWidth" value="200" placeholder="Width">
                <input type="number" class="form-control" id="costHeight" value="150" placeholder="Height">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Ply Selection</label>
              <select class="form-control" id="costPly">
                <option value="3">3-Ply Single Wall Box</option>
                <option value="5" selected>5-Ply Double Wall Box (BC Flute)</option>
                <option value="7">7-Ply Heavy Duty Box (ABC Flute)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Paper Layer GSM & BF</label>
              <div style="display:flex; flex-direction:column; gap:0.5rem;" id="layerGSMInputs">
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <span style="font-size:0.75rem; width:70px;">Top Liner:</span>
                  <input type="number" class="form-control" id="gsm0" value="180" placeholder="GSM">
                  <input type="number" class="form-control" id="bf0" value="24" placeholder="BF">
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <span style="font-size:0.75rem; width:70px;">Flute 1:</span>
                  <input type="number" class="form-control" id="gsm1" value="140" placeholder="GSM">
                  <input type="number" class="form-control" id="bf1" value="22" placeholder="BF">
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <span style="font-size:0.75rem; width:70px;">Mid Liner:</span>
                  <input type="number" class="form-control" id="gsm2" value="140" placeholder="GSM">
                  <input type="number" class="form-control" id="bf2" value="22" placeholder="BF">
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <span style="font-size:0.75rem; width:70px;">Flute 2:</span>
                  <input type="number" class="form-control" id="gsm3" value="140" placeholder="GSM">
                  <input type="number" class="form-control" id="bf3" value="22" placeholder="BF">
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <span style="font-size:0.75rem; width:70px;">Inner Liner:</span>
                  <input type="number" class="form-control" id="gsm4" value="140" placeholder="GSM">
                  <input type="number" class="form-control" id="bf4" value="22" placeholder="BF">
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Order Quantity & Margin %</label>
              <div style="display:flex; gap:0.5rem;">
                <input type="number" class="form-control" id="costQty" value="5000" placeholder="Quantity">
                <input type="number" class="form-control" id="costMargin" value="18" placeholder="Margin %">
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-artboard-line">🎨</i> 3D Wireframe & Flute Wave Studio</div>
          </div>
          <div class="card-body">
            <div class="cad-box-container" id="cadBoxContainer"></div>
            <div style="margin-top: 1rem;">
              <h4 style="font-size:0.8rem; font-weight:700; color:var(--text-secondary); margin-bottom:0.35rem;">Corrugated Flute Layer Cross-Section</h4>
              <div id="fluteWaveContainer"></div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-money-rupee-circle-line">💰</i> Costing Summary</div>
          </div>
          <div class="card-body">
            <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
              <div style="display:flex; justify-content:space-between;">
                <span>Sheet Cut Size:</span>
                <strong id="outSheetSize">1040 × 350 mm</strong>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Optimum Reel (Deckle):</span>
                <strong id="outDeckle">44 Inches (2.1% trim)</strong>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Box Weight:</span>
                <strong id="outWeight">0.342 kg</strong>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Bursting Strength:</span>
                <strong id="outBS">15.8 kg/cm²</strong>
              </div>
              <hr style="border:none; border-top:1px solid var(--border-color);">
              <div style="display:flex; justify-content:space-between;">
                <span>Raw Paper Cost:</span>
                <span id="outPaperCost">₹22.45</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Conversion & Overheads:</span>
                <span id="outConversion">₹6.15</span>
              </div>
              <div style="display:flex; justify-content:space-between; font-weight:700;">
                <span>Total Cost Price / Box:</span>
                <span id="outCostPrice" style="color:var(--accent-amber);">₹28.60</span>
              </div>
              <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:800; border-top:2px solid var(--border-color); padding-top:0.5rem;">
                <span>Selling Price / Box:</span>
                <span id="outSellingPrice" style="color:var(--accent-emerald);">₹33.75</span>
              </div>
              <div style="display:flex; justify-content:space-between; color:var(--text-muted); font-size:0.8rem;">
                <span>Grand Total (18% GST):</span>
                <span id="outGrandTotal">₹39.82</span>
              </div>
              <div style="background:var(--bg-tertiary); padding:0.75rem; border-radius:var(--radius-md); margin-top:0.5rem; text-align:center;">
                <div style="font-size:0.75rem; color:var(--text-secondary);">Total Order Profit</div>
                <div style="font-size:1.25rem; font-weight:800; color:var(--accent-cyan);" id="outTotalProfit">₹25,750</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  initCostingEvents() {
    const updateCalc = () => {
      const lengthMm = parseFloat(document.getElementById("costLength").value) || 300;
      const widthMm = parseFloat(document.getElementById("costWidth").value) || 200;
      const heightMm = parseFloat(document.getElementById("costHeight").value) || 150;
      const ply = parseInt(document.getElementById("costPly").value) || 5;
      const fefcoStyle = document.getElementById("costFefco").value;
      const qtySlab = parseFloat(document.getElementById("costQty").value) || 5000;
      const marginPercent = parseFloat(document.getElementById("costMargin").value) || 18;

      const layers = [
        { gsm: parseFloat(document.getElementById("gsm0").value) || 180, bf: parseFloat(document.getElementById("bf0").value) || 24 },
        { gsm: parseFloat(document.getElementById("gsm1").value) || 140, bf: parseFloat(document.getElementById("bf1").value) || 22 },
        { gsm: parseFloat(document.getElementById("gsm2").value) || 140, bf: parseFloat(document.getElementById("bf2").value) || 22 },
        { gsm: parseFloat(document.getElementById("gsm3").value) || 140, bf: parseFloat(document.getElementById("bf3").value) || 22 },
        { gsm: parseFloat(document.getElementById("gsm4").value) || 140, bf: parseFloat(document.getElementById("bf4").value) || 22 }
      ];

      const res = window.costingEngine ? window.costingEngine.calculateBoxCost({
        lengthMm, widthMm, heightMm, ply, fefcoStyle, layers, qtySlab, marginPercent
      }) : {};

      if (window.costingEngine) {
        document.getElementById("cadBoxContainer").innerHTML = window.costingEngine.generateBoxCADSVG(lengthMm, widthMm, heightMm, fefcoStyle);
        document.getElementById("fluteWaveContainer").innerHTML = window.costingEngine.generateFluteWaveSVG(ply, layers);
      }

      if (res.sheetSpecs) {
        document.getElementById("outSheetSize").innerText = `${res.sheetSpecs.sheetLengthMm} × ${res.sheetSpecs.sheetWidthMm} mm`;
        document.getElementById("outDeckle").innerText = `${res.sheetSpecs.selectedDeckleInches}" Reel (${res.sheetSpecs.trimWastePercent}% trim)`;
        document.getElementById("outWeight").innerText = `${res.weightSpecs.boxWeightKg} kg`;
        document.getElementById("outBS").innerText = `${res.weightSpecs.estimatedBurstingStrength} kg/cm²`;
        document.getElementById("outPaperCost").innerText = `₹${res.costBreakdown.paperCostTotal}`;
        document.getElementById("outConversion").innerText = `₹${res.costBreakdown.totalConversionCost}`;
        document.getElementById("outCostPrice").innerText = `₹${res.costBreakdown.totalProductionCostPerBox}`;
        document.getElementById("outSellingPrice").innerText = `₹${res.costBreakdown.sellingPricePerBox}`;
        document.getElementById("outGrandTotal").innerText = `₹${res.costBreakdown.grandTotalPerBox}`;
        document.getElementById("outTotalProfit").innerText = `₹${res.batchSummary.totalBatchProfit.toLocaleString('en-IN')}`;
      }
    };

    ["costLength", "costWidth", "costHeight", "costPly", "costFefco", "costQty", "costMargin", "gsm0", "gsm1", "gsm2", "gsm3", "gsm4", "bf0", "bf1", "bf2", "bf3", "bf4"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", updateCalc);
    });

    const saveBtn = document.getElementById("btnSaveQuotation");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const newQt = {
          id: "QT-" + Math.floor(8000 + Math.random() * 1000),
          date: new Date().toISOString().split('T')[0],
          customer: "Amazon Seller Services India Pvt Ltd",
          boxSpecs: `${document.getElementById("costLength").value}x${document.getElementById("costWidth").value}x${document.getElementById("costHeight").value} mm (${document.getElementById("costPly").value}-Ply)`,
          qty: parseFloat(document.getElementById("costQty").value),
          costPerBox: parseFloat(document.getElementById("outCostPrice").innerText.replace('₹','')),
          marginPercent: parseFloat(document.getElementById("costMargin").value),
          unitPrice: parseFloat(document.getElementById("outSellingPrice").innerText.replace('₹','')),
          totalAmount: parseFloat(document.getElementById("outSellingPrice").innerText.replace('₹','')) * parseFloat(document.getElementById("costQty").value),
          gstAmount: parseFloat(document.getElementById("outSellingPrice").innerText.replace('₹','')) * parseFloat(document.getElementById("costQty").value) * 0.18,
          grandTotal: parseFloat(document.getElementById("outGrandTotal").innerText.replace('₹','')) * parseFloat(document.getElementById("costQty").value),
          status: "Pending Approval"
        };
        if (window.appState) window.appState.addQuotation(newQt);
        this.showToast(`Quotation ${newQt.id} generated!`, "success");
        this.navigateTo("quotations");
      });
    }

    updateCalc();
  }

  /* ---------------------------------------------------- */
  /* 5. SALES ORDER MANAGEMENT VIEW                       */
  /* ---------------------------------------------------- */
  renderSalesView() {
    const sales = window.appState ? window.appState.getSalesOrders() : [];
    return `
      ${this.renderToolbar("Sales Orders", "Order Pipeline", "Sales Orders")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>Sales Orders & Order Pipeline</h1>
          <p>Track order lifecycle: Quotation → Approval → Sales Order → Production → Dispatch → Invoice.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>SO Ref</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>PO Number</th>
                  <th>Box Description</th>
                  <th>Ordered</th>
                  <th>Pending</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${sales.map(so => `
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
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 6. PRODUCTION PLANNING (MRP) VIEW                    */
  /* ---------------------------------------------------- */
  renderMRPView() {
    const machines = window.appState ? window.appState.getMachines() : [];
    const jobs = window.appState ? window.appState.getJobCards() : [];

    return `
      ${this.renderToolbar("Production Planning", "Shop Floor Board", "Production Planning (MRP)")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>Production Planning & MRP Shop Floor Board</h1>
          <p>Live corrugation machines, job scheduling, shift targets, OEE monitoring, and scrap logging.</p>
        </div>
      </div>

      <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:1rem;">Corrugation Plant Machines (Live Status)</h3>
      <div class="machine-grid" style="margin-bottom:1.5rem;">
        ${machines.map(m => `
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
              <span style="font-size:0.8rem; color:var(--text-secondary);">OEE Performance:</span>
              <strong style="color:var(--accent-emerald);">${m.oeePercent}%</strong>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width:${m.oeePercent}%;"></div>
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Active Job: <strong>${m.job}</strong></div>
          </div>
        `).join('')}
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="ri-task-line">⚙️</i> Production Job Cards Execution</div>
        </div>
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Job ID</th>
                  <th>SO Ref</th>
                  <th>Customer</th>
                  <th>Sheet Cut Size</th>
                  <th>Deckle Used</th>
                  <th>Target</th>
                  <th>Produced</th>
                  <th>Scrap Waste</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${jobs.map(j => `
                  <tr>
                    <td><strong>${j.id}</strong></td>
                    <td>${j.soRef}</td>
                    <td>${j.customer}</td>
                    <td>${j.sheetSize}</td>
                    <td><span class="reel-badge">${j.deckleUsed}</span></td>
                    <td>${(j.targetQty || 0).toLocaleString()} Pcs</td>
                    <td><strong>${(j.producedQty || 0).toLocaleString()} Pcs</strong></td>
                    <td style="color:var(--accent-rose);">${j.wasteKg} kg</td>
                    <td>
                      <button class="btn btn-sm btn-secondary" onclick="window.pdfGenerator.generateDocument('JobCard', ${JSON.stringify(j).replace(/"/g, '&quot;')})">Job Card PDF</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  toggleMachine(macId) {
    if (window.appState) window.appState.toggleMachineStatus(macId);
    this.showToast(`Machine ${macId} status updated!`, "info");
    this.refreshCurrentView();
  }

  /* ---------------------------------------------------- */
  /* 7. RAW MATERIAL PAPER INVENTORY VIEW                 */
  /* ---------------------------------------------------- */
  renderInventoryView() {
    const reels = window.appState ? window.appState.getReels() : [];
    return `
      ${this.renderToolbar("Paper Stock", "Kraft Reels Inventory", "Raw Paper Inventory")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>Raw Material Paper Inventory (Kraft Reels)</h1>
          <p>Track reels by Reel ID, GSM, Burst Factor (BF), Deckle width, Weight, and FIFO reorder alerts.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" data-action="add-reel" onclick="window.showAddReelModal()"><i class="ri-add-line">📜</i> Add Kraft Reel Stock</button>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Reel ID</th>
                  <th>GSM</th>
                  <th>Burst Factor (BF)</th>
                  <th>Deckle Width</th>
                  <th>Net Weight (kg)</th>
                  <th>Warehouse Location</th>
                  <th>Paper Mill Supplier</th>
                  <th>Rate / Kg</th>
                </tr>
              </thead>
              <tbody>
                ${reels.map(r => `
                  <tr>
                    <td><strong>${r.id}</strong></td>
                    <td><span class="status-pill info">${r.gsm} GSM</span></td>
                    <td><span class="status-pill purple">${r.bf} BF</span></td>
                    <td><span class="reel-badge">${r.deckleWidthInches} Inches</span></td>
                    <td><strong style="${(r.weightKg || 0) < 500 ? 'color:var(--accent-rose);' : ''}">${(r.weightKg || 0).toLocaleString()} kg</strong></td>
                    <td>${r.warehouse}</td>
                    <td>${r.supplier}</td>
                    <td>₹${r.ratePerKg} / kg</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 8. PURCHASE & VENDOR MODULE VIEW                     */
  /* ---------------------------------------------------- */
  renderPurchaseView() {
    const pos = window.appState ? window.appState.getPurchaseOrders() : [];
    return `
      ${this.renderToolbar("Purchase", "Procurement & Vendors", "Purchase & Vendors")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>Purchase & Vendor Management</h1>
          <p>Purchase requisitions, RFQ rate comparison, PO release, and GRN paper receipts.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" data-action="add-po" onclick="window.showAddPOModal()"><i class="ri-add-line">🛍️</i> Create Purchase Order</button>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="ri-shopping-cart-line">🛍️</i> Purchase Orders & Requisitions</div>
        </div>
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>PO Ref</th>
                  <th>Date</th>
                  <th>Vendor Supplier</th>
                  <th>Items Description</th>
                  <th>Amount (₹)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${pos.map(p => `
                  <tr>
                    <td><strong>${p.id}</strong></td>
                    <td>${p.date}</td>
                    <td>${p.vendor}</td>
                    <td>${p.items}</td>
                    <td><strong>₹${(p.amount || 0).toLocaleString('en-IN')}</strong></td>
                    <td><span class="status-pill ${p.status === 'Received' ? 'success' : 'warning'}">${p.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 9. WAREHOUSE & DISPATCH VIEW                         */
  /* ---------------------------------------------------- */
  renderWarehouseView() {
    const dispatch = window.appState ? window.appState.getDispatchNotes() : [];
    return `
      ${this.renderToolbar("Warehouse", "Dispatch Planning", "Warehouse & Dispatch")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>Warehouse & Dispatch Management</h1>
          <p>Finished goods inventory, batch tracking, vehicle loading challans, and E-Way bills.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Dispatch Ref</th>
                  <th>Date</th>
                  <th>Customer Name</th>
                  <th>Finished Goods Dispatched</th>
                  <th>Vehicle No</th>
                  <th>E-Way Bill No</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${dispatch.map(d => `
                  <tr>
                    <td><strong>${d.id}</strong></td>
                    <td>${d.date}</td>
                    <td>${d.customer}</td>
                    <td>${d.items}</td>
                    <td><span class="reel-badge">${d.vehicleNo}</span></td>
                    <td>${d.eWayBill}</td>
                    <td><span class="status-pill success">${d.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 10. GST ACCOUNTING VIEW                              */
  /* ---------------------------------------------------- */
  renderAccountingView() {
    const invoices = window.appState ? window.appState.getInvoices() : [];
    const summary = window.accountingEngine ? window.accountingEngine.generateFinancialSummary(invoices, []) : { revenue: 2850000, cogs: 1760000, grossProfit: 1090000, grossProfitMarginPercent: 38.2, netProfit: 862000, gstSummary: { totalSalesTaxable: 2415000, totalGSTPayable: 434700 } };
    const gstr1 = window.accountingEngine ? window.accountingEngine.generateGSTR1(invoices) : { totalB2BCount: 2 };

    return `
      ${this.renderToolbar("GST Accounting", "Double-Entry Ledgers", "GST Accounting (India)")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>GST Compliant Double-Entry Accounting (India)</h1>
          <p>Chart of accounts, real-time ledgers, Profit & Loss statement, and monthly GSTR-1 / GSTR-3B summaries.</p>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">
        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-file-chart-line">🏛️</i> Profit & Loss Financial Statement</div>
          </div>
          <div class="card-body">
            <table class="data-table">
              <tr><td>Gross Sales Revenue:</td><td style="text-align:right; font-weight:700;">₹${(summary.revenue || 0).toLocaleString('en-IN')}</td></tr>
              <tr><td>Cost of Goods Sold (Paper + Overheads):</td><td style="text-align:right; color:var(--accent-rose);">₹${(summary.cogs || 0).toLocaleString('en-IN')}</td></tr>
              <tr style="background:var(--bg-tertiary);"><td>Gross Operating Profit:</td><td style="text-align:right; font-weight:800; color:var(--accent-emerald);">₹${(summary.grossProfit || 0).toLocaleString('en-IN')} (${summary.grossProfitMarginPercent}%)</td></tr>
              <tr><td>Administrative Salaries & Selling Costs:</td><td style="text-align:right;">₹${Math.round((summary.revenue || 0) * 0.08).toLocaleString('en-IN')}</td></tr>
              <tr style="border-top:2px solid var(--border-color); font-size:1.05rem;"><td><strong>Net Profit Before Tax:</strong></td><td style="text-align:right; font-weight:800; color:var(--accent-cyan);"><strong>₹${(summary.netProfit || 0).toLocaleString('en-IN')}</strong></td></tr>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title"><i class="ri-file-paper-2-line">🏛️</i> GSTR-1 Monthly Tax Summary (August 2026)</div>
          </div>
          <div class="card-body">
            <div style="margin-bottom:1rem; font-size:0.85rem;">
              <div>Total B2B Outward Invoices: <strong>${gstr1.totalB2BCount}</strong></div>
              <div>Total Taxable Outward Turnover: <strong>₹${(summary.gstSummary?.totalSalesTaxable || 0).toLocaleString('en-IN')}</strong></div>
              <div>Output GST Tax Liability: <strong style="color:var(--accent-amber);">₹${(summary.gstSummary?.totalGSTPayable || 0).toLocaleString('en-IN')}</strong></div>
            </div>
            <button class="btn btn-primary" onclick="window.app.showToast('GSTR-1 JSON Export Ready for GST Portal Upload!', 'success')">
              <i class="ri-download-cloud-line">📥</i> Download GSTR-1 JSON Return
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 11. TAX INVOICING VIEW                               */
  /* ---------------------------------------------------- */
  renderInvoicesView() {
    const invoices = window.appState ? window.appState.getInvoices() : [];
    return `
      ${this.renderToolbar("Tax Invoicing", "GST Invoice Register", "Tax Invoicing System")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>GST Tax Invoicing System</h1>
          <p>Generate GST-compliant tax invoices with dynamic HSN codes, QR placeholders, and e-Way bill summaries.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Invoice No</th>
                  <th>Date</th>
                  <th>Customer Name</th>
                  <th>Customer GSTIN</th>
                  <th>HSN Code</th>
                  <th>Taxable Value</th>
                  <th>Total Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${invoices.map(inv => `
                  <tr>
                    <td><strong>${inv.invoiceNo}</strong></td>
                    <td>${inv.date}</td>
                    <td>${inv.customer}</td>
                    <td><span class="reel-badge">${inv.gstin}</span></td>
                    <td>${inv.hsnCode}</td>
                    <td>₹${(inv.taxableValue || 0).toLocaleString('en-IN')}</td>
                    <td><strong style="color:var(--accent-emerald);">₹${(inv.totalAmount || 0).toLocaleString('en-IN')}</strong></td>
                    <td>
                      <button class="btn btn-sm btn-primary" onclick="window.pdfGenerator.generateDocument('Invoice', ${JSON.stringify(inv).replace(/"/g, '&quot;')})">Print GST Invoice PDF</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 12. ACCOUNTS RECEIVABLE (AR) VIEW                    */
  /* ---------------------------------------------------- */
  renderARView() {
    const receipts = window.appState ? window.appState.getReceipts() : [];
    const debtors = window.appState ? window.appState.getCustomers() : [];

    return `
      ${this.renderToolbar("Accounts Receivable", "Customer Aging", "Accounts Receivable")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>Accounts Receivable (Customer Debtors & Aging)</h1>
          <p>Track customer outstanding payments, 30/60/90 days aging, and record payment receipts.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" data-action="add-receipt" onclick="window.showAddReceiptModal()"><i class="ri-add-line">💰</i> Record Payment Receipt</button>
        </div>
      </div>

      <div class="card" style="margin-bottom:1.5rem;">
        <div class="card-header">
          <div class="card-title"><i class="ri-hand-coin-line">💰</i> Customer Outstanding Aging Table</div>
        </div>
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Payment Terms</th>
                  <th>Total Outstanding</th>
                  <th>0-30 Days</th>
                  <th>31-60 Days</th>
                  <th>61+ Days</th>
                </tr>
              </thead>
              <tbody>
                ${debtors.map(c => `
                  <tr>
                    <td><strong>${c.name}</strong></td>
                    <td>${c.paymentTerms}</td>
                    <td><strong style="color:var(--accent-rose);">₹${(c.outstanding || 0).toLocaleString('en-IN')}</strong></td>
                    <td>₹${Math.round((c.outstanding || 0) * 0.6).toLocaleString('en-IN')}</td>
                    <td>₹${Math.round((c.outstanding || 0) * 0.3).toLocaleString('en-IN')}</td>
                    <td style="color:var(--accent-rose);">₹${Math.round((c.outstanding || 0) * 0.1).toLocaleString('en-IN')}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="ri-history-line">⏱️</i> Recent Payment Collections</div>
        </div>
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Receipt Ref</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Invoice Ref</th>
                  <th>Mode</th>
                  <th>Amount Received</th>
                </tr>
              </thead>
              <tbody>
                ${receipts.map(r => `
                  <tr>
                    <td><strong>${r.id}</strong></td>
                    <td>${r.date}</td>
                    <td>${r.customer}</td>
                    <td>${r.invoiceRef}</td>
                    <td><span class="status-pill info">${r.mode}</span></td>
                    <td><strong style="color:var(--accent-emerald);">₹${(r.amount || 0).toLocaleString('en-IN')}</strong></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 13. ACCOUNTS PAYABLE (AP) VIEW                       */
  /* ---------------------------------------------------- */
  renderAPView() {
    const bills = window.appState ? window.appState.getVendorBills() : [];
    return `
      ${this.renderToolbar("Accounts Payable", "Vendor Bills", "Accounts Payable")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>Accounts Payable (Vendor Creditors)</h1>
          <p>Track paper mill bills, payment due dates, and vendor payment vouchers.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Bill ID</th>
                  <th>Vendor Mill</th>
                  <th>Mill Bill No</th>
                  <th>Date</th>
                  <th>Due Terms</th>
                  <th>Amount Due</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${bills.map(b => `
                  <tr>
                    <td><strong>${b.id}</strong></td>
                    <td>${b.vendor}</td>
                    <td><span class="reel-badge">${b.billNo}</span></td>
                    <td>${b.date}</td>
                    <td>${b.dueDays} Days Net</td>
                    <td><strong style="color:var(--accent-amber);">₹${(b.amount || 0).toLocaleString('en-IN')}</strong></td>
                    <td><span class="status-pill ${b.status === 'Paid' ? 'success' : 'danger'}">${b.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 14. HR & PAYROLL VIEW                                */
  /* ---------------------------------------------------- */
  renderHRView() {
    const employees = window.appState ? window.appState.getEmployees() : [];
    return `
      ${this.renderToolbar("HR & Payroll", "Employee Directory", "HR & Payroll")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>HR Management & Payroll System</h1>
          <p>Employee master directory, attendance tracking, PF/ESI/PT calculations, and salary payslips.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" data-action="add-employee" onclick="window.showAddEmployeeModal()"><i class="ri-user-add-line">👔</i> Add New Employee</button>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Emp ID</th>
                  <th>Employee Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Shift</th>
                  <th>Basic Salary</th>
                  <th>Attendance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${employees.map(e => `
                  <tr>
                    <td><strong>${e.id}</strong></td>
                    <td>${e.name}</td>
                    <td><span class="status-pill info">${e.dept}</span></td>
                    <td>${e.designation}</td>
                    <td>${e.shift}</td>
                    <td>₹${(e.basicSalary || 0).toLocaleString('en-IN')}</td>
                    <td><span class="status-pill ${e.attendance === 'Present' ? 'success' : 'danger'}">${e.attendance}</span></td>
                    <td>
                      <button class="btn btn-sm btn-secondary" onclick="window.pdfGenerator.generateDocument('SalarySlip', ${JSON.stringify(e).replace(/"/g, '&quot;')})">Salary Slip PDF</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 15. QUALITY CONTROL (QC) VIEW                        */
  /* ---------------------------------------------------- */
  renderQCView() {
    const logs = window.appState ? window.appState.getQCLogs() : [];
    return `
      ${this.renderToolbar("Quality Control", "Paper Testing Lab", "Quality Control (QC)")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>Quality Control (QC) & Laboratory Testing</h1>
          <p>Kraft paper Burst Factor (BF) testing, Ring Crush Test (RCT), moisture %, and NCR defect reports.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" data-action="add-qc" onclick="window.showAddQCModal()"><i class="ri-flask-line">🔬</i> Log Paper Test Report</button>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>QC Test ID</th>
                  <th>Date</th>
                  <th>Sample / Item Tested</th>
                  <th>Tested GSM</th>
                  <th>Tested Burst Factor (BF)</th>
                  <th>Moisture %</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${logs.map(q => `
                  <tr>
                    <td><strong>${q.id}</strong></td>
                    <td>${q.date}</td>
                    <td>${q.item}</td>
                    <td>${q.testedGsm} GSM</td>
                    <td><strong style="color:var(--accent-emerald);">${q.testedBf} BF</strong></td>
                    <td>${q.moisture}</td>
                    <td><span class="status-pill success">${q.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 16. AI ANALYTICS VIEW                                */
  /* ---------------------------------------------------- */
  renderAnalyticsView() {
    return `
      ${this.renderToolbar("AI Analytics", "Factory Intelligence", "AI Reports & Analytics")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>AI Reports & Analytics Dashboard</h1>
          <p>Machine efficiency OEE, scrap waste %, customer profitability, and paper consumption trends.</p>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">
        <div class="card">
          <div class="card-header"><div class="card-title"><i class="ri-bar-chart-box-line">📈</i> Raw Paper Reel Stock by GSM (Kg)</div></div>
          <div class="card-body">
            <svg viewBox="0 0 400 180" style="width:100%; height:180px;">
              <rect x="30" y="80" width="45" height="80" fill="#06b6d4" rx="4"/>
              <rect x="105" y="20" width="45" height="140" fill="#3b82f6" rx="4"/>
              <rect x="180" y="110" width="45" height="50" fill="#6366f1" rx="4"/>
              <rect x="255" y="70" width="45" height="90" fill="#8b5cf6" rx="4"/>
              <rect x="330" y="40" width="45" height="120" fill="#f59e0b" rx="4"/>
              <text x="52" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">120GSM</text>
              <text x="127" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">140GSM</text>
              <text x="202" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">150GSM</text>
              <text x="277" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">180GSM</text>
              <text x="352" y="175" fill="#9ca3af" font-size="10" text-anchor="middle">230GSM</text>
            </svg>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><div class="card-title"><i class="ri-pie-chart-line">🥧</i> Factory Scrap Waste Breakdown</div></div>
          <div class="card-body">
            <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:0.75rem;">
              <div>
                <div style="display:flex; justify-content:space-between;"><span>Corrugator Trim Edge Scrap</span><strong>2.4%</strong></div>
                <div class="progress-bar-container"><div class="progress-bar-fill" style="width:48%; background:#ef4444;"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between;"><span>Die-Cut Machine Edge Trimmings</span><strong>1.8%</strong></div>
                <div class="progress-bar-container"><div class="progress-bar-fill" style="width:36%; background:#f59e0b;"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between;"><span>Flexo Printing Misprints</span><strong>1.1%</strong></div>
                <div class="progress-bar-container"><div class="progress-bar-fill" style="width:22%; background:#3b82f6;"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------- */
  /* 17. AUTOMATION RULES MATRIX VIEW                     */
  /* ---------------------------------------------------- */
  renderAutomationView() {
    const rules = window.appState ? window.appState.getAutomationRules() : [];
    return `
      ${this.renderToolbar("Automation Matrix", "Rules Engine", "Automation Rules Matrix")}
      <div class="page-header">
        <div class="page-title-group">
          <h1>No-Code Automation Rules Matrix</h1>
          <p>Configure trigger-action rules for automated box costing, order creation, inventory alerts, and notifications.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" data-action="add-rule" onclick="window.showAddRuleModal()"><i class="ri-add-line">⚡</i> Add Automation Rule</button>
        </div>
      </div>

      <div class="card">
        <div class="card-body" style="padding:0;">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Rule ID</th>
                  <th>Rule Name</th>
                  <th>Trigger Event</th>
                  <th>Automated Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${rules.map(r => `
                  <tr>
                    <td><strong>${r.id}</strong></td>
                    <td>${r.name}</td>
                    <td><span class="status-pill info">${r.trigger}</span></td>
                    <td>${r.action}</td>
                    <td><span class="status-pill success">${r.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  showToast(msg, type = "info") {
    const toast = document.createElement("div");
    toast.style.cssText = `
      position: fixed; bottom: 20px; right: 20px; z-index: 1000;
      background: var(--bg-tertiary); color: var(--text-primary);
      border: 1px solid var(--border-color); border-left: 4px solid ${type === 'success' ? '#10b981' : '#3b82f6'};
      padding: 12px 20px; border-radius: 8px; font-weight: 600; box-shadow: var(--shadow-lg);
    `;
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }
}

// Global Top-Level Window Helpers
window.navigateTo = function(viewId) {
  if (window.app && typeof window.app.navigateTo === 'function') {
    window.app.navigateTo(viewId);
  }
};
window.showAddCustomerModal = function() { if (window.app) window.app.showAddCustomerModal(); };
window.showAddReelModal = function() { if (window.app) window.app.showAddReelModal(); };
window.showAddPOModal = function() { if (window.app) window.app.showAddPOModal(); };
window.showAddReceiptModal = function() { if (window.app) window.app.showAddReceiptModal(); };
window.showAddEmployeeModal = function() { if (window.app) window.app.showAddEmployeeModal(); };
window.showAddQCModal = function() { if (window.app) window.app.showAddQCModal(); };
window.showAddRuleModal = function() { if (window.app) window.app.showAddRuleModal(); };

if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", () => {
    if (!window.app) window.app = new PackFlowApp();
  });
} else {
  if (!window.app) window.app = new PackFlowApp();
}


// Auto-Bootstrap Guarantee
(function() {
function startERP() {
  try {
    if (!window.app) {
      window.app = new PackFlowApp();
    }
    if (window.app) {
      window.app.renderNavigation();
      window.app.navigateTo("dashboard");
    }
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
