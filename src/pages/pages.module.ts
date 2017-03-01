import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { TabsPage } from './tabs/tabs';

const _modules=[
    IonicModule
];

const _pages=[
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
];

@NgModule({
    imports: [
        ..._modules
    ],
    exports: [],
    declarations: [
        ..._pages
    ],
    entryComponents:[
        ..._pages
    ],
    providers: [],
})
export class PagesModule { }
