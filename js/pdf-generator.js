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
