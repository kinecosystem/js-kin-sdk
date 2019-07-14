import {CallBuilder} from "./call_builder";

export class FriendbotBuilder extends CallBuilder {

    constructor(url, headers, retry, address) {
        super(url, headers, retry);
        this.url.segment('friendbot');
        this.url.setQuery("addr", address);
    }

}
