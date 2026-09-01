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
