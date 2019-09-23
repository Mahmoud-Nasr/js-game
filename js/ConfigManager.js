/**
 * stores and retreives config from localStorage
 */
export default class ConfigManager {
  /**
   * stores and retreives config from localStorage
   */
  constructor() {
    if (
      !ConfigManager._instance ||
      !(ConfigManager._instance instanceof ConfigManager)
    ) {
      ConfigManager._instance = this;

      this._config = {
        finishedLevels: 0,
        highestScore: 0,
      };
    }
    return ConfigManager._instance;
  }

  /**
   * initializes config from localStorage if it exists
   */
  init() {
    for (const itemKey in this._config) {
      // confirm itemKey isn't from prototype
      if (this._config.hasOwnProperty(itemKey)) {
        const itemValue = localStorage.getItem(itemKey);
        if (itemValue !== null) {
          this._config[itemKey] = itemValue;
        }
      }
    }
  }

  /**
   * gets item from localStorage
   * @param {String} itemKey key of item to get
   * @return {String} value of item
   */
  getItem(itemKey) {
    return this._config[itemKey];
  }

  /**
   * set the value of item
   * @param {String} itemKey key of item to set
   * @param {String} itemValue value of item
   */
  setItem(itemKey, itemValue) {
    localStorage.setItem(itemKey, itemValue);
    this._config[itemKey] = itemValue;
  }
}
