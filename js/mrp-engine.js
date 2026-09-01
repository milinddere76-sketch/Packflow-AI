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
