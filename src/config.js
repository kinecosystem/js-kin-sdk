import clone from 'lodash/clone';
import axiosRetry from "axios-retry";

let defaultConfig = {
  allowHttp: false,
  timeout: 0,
  retry: {
    retries: 0,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => axiosRetry.isNetworkError(error) || axiosRetry.isRetryableError(error)
  }
};

let config = clone(defaultConfig);

/**
 * Global config class.
 *
 * Usage node:
 * ```
 * import {Config} from 'kin-sdk';
 * Config.setAllowHttp(true);
 * Config.setTimeout(5000);
 * ```
 *
 * Usage browser:
 * ```
 * KinSdk.Config.setAllowHttp(true);
 * KinSdk.Config.setTimeout(5000);
 * ```
 * @static
 */
class Config {
  /**
   * Sets `allowHttp` flag globally. When set to `true`, connections to insecure http protocol servers will be allowed.
   * Must be set to `false` in production. Default: `false`.
   * @param {boolean} value
   * @static
   */
  static setAllowHttp(value) {
    config.allowHttp = value;
  }

  /**
   * Sets `timeout` flag globally. When set to anything besides 0, the request will timeout after specified time (ms).
   * Default: 0.
   * @param {number} value
   * @static
   */
  static setTimeout(value) {
    config.timeout = value;
  }

  /**
   * Returns the value of `allowHttp` flag.
   * @static
   */
  static isAllowHttp() {
    return clone(config.allowHttp);
  }

   /**
   * Returns the value of `timeout` flag.
   * @static
   */
  static getTimeout() {
    return clone(config.timeout);
  }

  /**
   * Sets all global config flags to default values.
   * @static
   */
  static setDefault() {
    config = clone(defaultConfig);
  }

  /**
   * Creates and returns the definition for the `retry` mechanism.
   * @static
   */
  static getRetry() {
    return clone(config.retry);
  }

}

export {Config};
