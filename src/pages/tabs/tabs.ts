import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'home';
  tab2Root = 'about';
  tab3Root = 'contact';

  @ViewChild('mainTabs') tabs: Tabs;
  constructor() {

  }
}
