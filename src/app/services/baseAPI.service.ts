import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class BaseAPI {
    protected authHttp: HttpClient;

    constructor(authHttp: HttpClient) {
        this.authHttp = authHttp;
    }

    private getOptions(): any {
        /*let headers = new HttpHeaders({'Content-Type': 'application/json'});
        let options = {headers: headers};
        return options;*/
        return {};
    }

    public get(url:string) {
        return this.authHttp.get(url, this.getOptions());
    }

    public post(url:string, payload:any) {
        return this.authHttp.post(url, payload, this.getOptions());
    }

    public delete(url:string) {
        return this.authHttp.delete(url);
    }

    public put(url:string, payload:any) {
        return this.authHttp.put(url, payload, this.getOptions());
    }
}

