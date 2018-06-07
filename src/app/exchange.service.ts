import {Injectable} from '@angular/core';
import {ExchangeAPI} from "./services/exchangeAPI.service";

@Injectable()
export class ExchangeService {
    public USDCurrency: any = "";

    constructor(private exchangeAPI: ExchangeAPI) {}

    public loadCurrencies() {
        this.exchangeAPI.getExchange()
            .subscribe((data:any) => {
                    this.USDCurrency = data.rates.USD;
                },
                err => console.log("*ERROR*", err),
                () => console.log('load currencies OK')
            );
    }
}

