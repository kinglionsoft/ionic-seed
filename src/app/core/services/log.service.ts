import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    constructor() { }

    info(msg:string){
        console.log(msg);
    }

    warn(msg:string){
        console.warn(msg);
    }

    error(msg:string){
        console.error(msg);
    }
}