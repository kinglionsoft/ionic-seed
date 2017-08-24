import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { PlatformService } from 'kl/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  @ViewChild(Nav) nav: Nav;

  constructor(
    platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private platformService: PlatformService) {
    platform.ready().then(() => {
      this.splashScreen.hide();

      if (platform.is('ios') || platform.is('android')) {
        this.statusBar.styleDefault();
      }
      // 注册返回按键事件
      this.platformService.rootNav = this.nav;
      this.platformService.registerBackButton();
    });
  }
}
