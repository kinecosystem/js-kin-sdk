import {CallBuilder} from "./call_builder";

export class FriendbotBuilder extends CallBuilder {

    constructor(url, headers, address) {
        super(url, headers);
        this.url.segment('friendbot');
        this.url.setQuery("addr", address);
    }

}
