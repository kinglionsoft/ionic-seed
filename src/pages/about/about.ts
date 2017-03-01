import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 
  // DI:依赖注入
  constructor(
    public navCtrl: NavController
  ) {
  }
}
