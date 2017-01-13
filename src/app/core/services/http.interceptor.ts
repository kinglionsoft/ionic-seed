import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
import { Config } from './config.service';
import { LoadingService } from './loading.service';

export class HttpInterceptor implements Interceptor {
    
    constructor(public loading: LoadingService) { }

    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        request.options.headers.append('X-Requested-With', 'X-Requested-With');
        request.options.withCredentials = true;

        request.url = Config.host + request.url;

        this.loading.show();
        return request;
    }
    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        this.loading.hide();
        return response;
    }
}

let myHttpInterceptorFactory = (loading: LoadingService) => {
    return new HttpInterceptor(loading);
};

export let myHttpInterceptorProvider =
    {
        provide: HttpInterceptor,
        useFactory: myHttpInterceptorFactory,
        deps: [LoadingService]
    };