import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { SimuladosPage } from '../pages/simulados/simulados';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: Nav;
  rootPage2:any = TabsPage;
  public rootPage:any;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = PerfilPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

      this.rootPage = HomePage;
      this.pages = [
        {titulo: 'Home', component: HomePage, icon: 'ios-home'},
        {titulo: 'Simulados', component: SimuladosPage, icon: 'md-clipboard'}

      ];

       platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(page){
    this.nav.setRoot(page);
  }
}

