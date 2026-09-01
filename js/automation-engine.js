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
