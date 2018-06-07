import { Component } from '@angular/core';
import {ExchangeAPI} from "./services/exchangeAPI.service";
import {ExchangeService} from "./exchange.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ExchangeAPI, ExchangeService ]
})
export class AppComponent {
  title = 'My First Angular App!';
  currencyFrom = null;
  currencyTo = null;
  constructor(public exchangeService: ExchangeService){}

  calculate(): void {
    this.exchangeService.loadCurrencies();
    this.currencyTo = this.currencyFrom ? this.currencyFrom * this.exchangeService.USDCurrency : null;
    this.currencyTo = (typeof this.currencyTo === "number") ? this.currencyTo.toFixed(4) : this.currencyTo;
  }
}
