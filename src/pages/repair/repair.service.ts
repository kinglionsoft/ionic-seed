import { Injectable } from '@angular/core';
import { InterceptorService } from 'ng2-interceptors';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

import { LogService,LoadingService } from '../../app/core';
import { ApiResult } from '../../app/shared';
import { RepairModel } from './models/repair-model';

@Injectable()
export class RepairService {

    private _id: number = -1;

    constructor(private http: InterceptorService,private log:LogService,private loading:LoadingService) { }

    getAll(): Observable<ApiResult<RepairModel[]>> {
        return this.http.get('assets/data/repair.json')
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