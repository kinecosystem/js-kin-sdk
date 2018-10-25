require('es6-promise').polyfill();
import HorizonAxiosClient from './horizon_axios_client';

// stellar-sdk classes to expose
export * from "./errors";
export {Config} from "./config";
export {Server} from "./server";
export {HorizonAxiosClient};
export {FederationServer, FEDERATION_RESPONSE_MAX_SIZE} from "./federation_server";
export {StellarTomlResolver, STELLAR_TOML_MAX_SIZE} from "./stellar_toml_resolver";

// expose classes and functions from stellar-base
export * from "stellar-base";

export default module.exports;
