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
