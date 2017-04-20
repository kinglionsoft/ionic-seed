import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  d: Date= new Date();
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
