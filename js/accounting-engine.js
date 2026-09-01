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
