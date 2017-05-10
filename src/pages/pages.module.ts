import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../app/shared';
import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { TabsPage } from './tabs/tabs';
import { TestPage } from './test/test';

const _modules = [
    IonicModule,
    SharedModule
];

const _pages = [
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TestPage
];

@NgModule({
    imports: [
        ..._modules
    ],
    exports: [],
    declarations: [
        ..._pages
    ],
    entryComponents: [
        ..._pages
    ],
    providers: [],
})
export class PagesModule { }
