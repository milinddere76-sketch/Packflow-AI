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
