import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HttpClient } from './services/httpclient';
import { LogService } from './services/log.service';
import { LoadingService } from './services/loading.service';

import './rxjs-operators';

@NgModule({
    imports: [IonicModule],
    exports: [],
    declarations: [],
    providers: [
        LogService,
        LoadingService,
        HttpClient
    ]
})
export class CoreModule { }
