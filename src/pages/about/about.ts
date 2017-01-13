import { Component } from '@angular/core';

import { NavController,ActionSheetController  } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public hello:string;

  public heros:any[];

  public newHero='';

  // DI:依赖注入
  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController
  ) {

    this.hello='welcome!';

    this.heros=[
      {
        id:1,
        color:'red'
      },
      {
        id:2,
        color:'green'
      },
      {
        id:3,
        color:'blue'
      }
    ];
  }

   presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  delete(index:number,h:string){
    if(confirm(`确定要删除${h}?`))
      this.heros.splice(index,1);
  }

}
