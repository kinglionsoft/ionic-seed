import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RepairPage } from '../repair';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public repair:any;

  constructor(public navCtrl: NavController) {
    this.repair=RepairPage;
  }

  go(){
    this.navCtrl.push(this.repair,{id:1,title:'test'});
  }

}
