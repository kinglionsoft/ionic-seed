import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiResult } from '../../app/shared';
import { RepairModel } from './models/repair-model';
import { HttpClient } from '../../app/core';

@Injectable()
export class RepairService {

    private _id: number = -1;

    constructor(private http: HttpClient) { }

    getAll(): Observable<ApiResult<RepairModel[]>> {
        return this.http.get('assets/data/repair.json',{'k':'1'})
            .map(r=> {
                return r.json() as ApiResult<RepairModel>;
            })
            .catch(x => this.handleError(x));

    }
    
    get(id: number): number {
        console.log('RepairService.Get ' + id);
        if (id > 0) this._id = id;
        return this._id;
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.Message || '服务器发生异常，请稍后再试');
    }

}