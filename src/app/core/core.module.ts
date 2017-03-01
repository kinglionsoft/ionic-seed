import { NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { IonicModule } from 'ionic-angular';
import { HttpClient } from './services/httpclient';
import { Logger } from './services/logger';
import { LoadingService } from './services/loading.service';
import { MessageBox } from './services/messagebox';
import './rxjs-operators';

export function provideStorage() {
    return new Storage(['sqlite','localstorage', 'websql', 'indexeddb'], { name: '_xg' });
}

@NgModule({
    imports: [
        
    ],
    exports: [],
    declarations: [],
    providers: [
        Logger,
        LoadingService,
        HttpClient,
        MessageBox,
        { provide: Storage, useFactory: provideStorage }
    ]
})
export class CoreModule { }
