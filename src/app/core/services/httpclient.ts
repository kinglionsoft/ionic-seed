import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpClient {

    constructor(private http: Http, private loading: LoadingService) { }

    get(url: string, params?: { [key: string]: string }, showLoading?: boolean): Observable<Response> {
        return this._request(url + this._formatUrl(params), RequestMethod.Get, null, showLoading);
    }

    post(url: string, body?: any, showLoading?: boolean) {
        return this._request(url, RequestMethod.Post, body, showLoading);
    }

    postEx(url: string, params?: { [key: string]: string }, showLoading?: boolean): Observable<Response> {
        return this._request(url + this._formatUrl(params), RequestMethod.Post, null, showLoading);
    }

    private _request(url: string, method: RequestMethod, body?: any, showLoading?: boolean): Observable<Response> {
        let headers = new Headers();

        let options = new RequestOptions();
        options.headers = headers;
        options.url = url;
        options.method = method;
        options.body = body;
        options.withCredentials = true;

        let request = new Request(options);

        if (showLoading !== false) this.loading.show();

        return this.http.request(request)
            .map(r => {
                if (showLoading !== false) this.loading.hide();
                return r;
            })
            .catch(x => {
                if (showLoading !== false) this.loading.hide();
                return Observable.throw(x);
            });
    }

    /**
     * 将字典转为QueryString
     */
    private _formatUrl(params?: { [key: string]: string }): string {
        if (!params) return '';

        let fegment = [];
        for (let k in params) {
            let v: any = params[k];
            if (v instanceof Date) {
                v = moment(v).format('YYYY-MM-DD HH:mm:SS');
            }
            fegment.push(`${k}=${v}`);
        }
        return '?' + fegment.join('&');
    }
}