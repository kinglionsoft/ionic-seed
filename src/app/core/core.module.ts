import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { provideInterceptorService } from 'ng2-interceptors';
import { HttpInterceptor,myHttpInterceptorProvider } from './services/http.interceptor';

import { LogService }   from './services/log.service';
import { LoadingService } from './services/loading.service';

@NgModule({
    imports: [IonicModule],
    exports: [],
    declarations: [],
    providers: [
        LogService,
        LoadingService,
        myHttpInterceptorProvider,
        provideInterceptorService([
            HttpInterceptor
        ])
    ]
})
export class CoreModule { }
