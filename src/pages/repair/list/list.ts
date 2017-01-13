import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RepairService } from '../repair.service';
import { LogService } from '../../../app/core';

import { RepairModel } from '../models/repair-model';

@Component({
  selector: 'page-repair-list',
  templateUrl: 'list.html'
})
export class RepairPage {

  show:boolean=false;

  currentDate:Date;

  repairList:RepairModel[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service:RepairService,
    private log: LogService
  ) {
    this.currentDate=new Date();

    this.repairList=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepairPage: '+JSON.stringify(this.navParams));
  
  }



  back(){
    this.navCtrl.pop(); 
  }

  onColorChanged(event){
    console.log(event)
  }

  doRefresh(refresher){
      this.service.getAll()
      .subscribe(r=>{
        if(r.Code>=0){
          this.repairList=r.Data;
        }else{
          //show error
        }
        refresher.complete();
      },x=>{
        console.error(x);
        refresher.complete();
      });
  }
}
