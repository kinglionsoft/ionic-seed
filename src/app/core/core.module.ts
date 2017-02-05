import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { XHRBackend, RequestOptions } from '@angular/http';
import { provideInterceptorService,InterceptorService } from 'ng2-interceptors';
import { HttpInterceptor, myHttpInterceptorProvider } from './services/http.interceptor';

import { LogService } from './services/log.service';
import { LoadingService } from './services/loading.service';

@NgModule({
    imports: [IonicModule],
    exports: [],
    declarations: [],
    providers: [
        LogService,
        LoadingService,
        myHttpInterceptorProvider,
        // provideInterceptorService([
        //     HttpInterceptor
        // ])]
        {
            provide: InterceptorService,
            // Add it to the factory function
            useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions ) => { 
                let service = new InterceptorService(xhrBackend, requestOptions);
                service.addInterceptor(HttpInterceptor);
                return service;
            },
            /* IMPORTANT: Add it to the deps array in the same order the useFactory method is declared */
            deps: [XHRBackend, RequestOptions, LoadingService]
    }]
})
export class CoreModule { }
