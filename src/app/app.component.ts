import { Component, ViewChild } from '@angular/core';
import { Platform, ToastController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  backButtonPressed: boolean = false;  // 用于判断返回键是否触发
  @ViewChild(Nav) nav: Nav;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private toastCtrl: ToastController) {
      platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();

        // 注册返回按键事件
        if (this.platform.is('android')) {
          this._registerExit();
        }
      });
  }

  /**
   * 为安卓注册双击返回退出app
   */
  private _registerExit() {
    this.platform.registerBackButtonAction((): any => {
      let activeVC = this.nav.getActive();
      let page = activeVC.instance;
      if (!(page instanceof TabsPage)) {
        if (!this.nav.canGoBack()) {
          // 当前页面为tabs，退出APP
          return this._showExit();
        }
        // 当前页面为tabs的子页面，正常返回
        return this.nav.pop();
      }
      let tabs = page.tabs;
      let activeNav = tabs.getSelected();
      if (!activeNav.canGoBack()) {
        // 当前页面为tab栏，退出APP
        return this._showExit();
      }
      // 当前页面为tab栏的子页面，正常返回
      return activeNav.pop();
    }, 101);
  }

  // 双击退出提示框，这里使用Ionic2的ToastController
  private _showExit() {
    if (this.backButtonPressed) {
      this.platform.exitApp();  // 当触发标志为true时，即2秒内双击返回按键则退出APP
    } else {
      let toast = this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      this.backButtonPressed = true;
      // 2秒内没有再次点击返回则将触发标志标记为false
      setTimeout(() => {
        this.backButtonPressed = false;
      }, 2000);
    }
  }

}
