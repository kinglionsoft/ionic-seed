import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  @ViewChild('mainTabs') tabs: Tabs;

  constructor() {
  }
}
