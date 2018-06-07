import {Injectable} from '@angular/core';
import {BaseAPI} from "./baseAPI.service";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class ExchangeAPI extends BaseAPI {
    private EXCHAGE_API = 'http://data.fixer.io/api/latest?access_key=9d7426decbd95430c739666b3ee844bd';

    constructor(authHttp: HttpClient) {
        super(authHttp);
    }

    public getExchange() {
        return this.get(this.EXCHAGE_API);
    }
}

