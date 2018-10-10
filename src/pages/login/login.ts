import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
//import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { EsqueceuSenhaPage } from '../esqueceu-senha/esqueceu-senha';
import{RegisterPage} from '../register/register';
//import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  registrar() {
    this.navCtrl.push(RegisterPage);
  }

  esqueceuSenha(){
    this.navCtrl.push(EsqueceuSenhaPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


alert(message: string) {
    this.alertCtrl.create({
      title: 'Importante!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  login() {

    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('got some data', this.fire.auth.currentUser);
        this.alert('Sucesso! Você esta logado');
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        console.log('got an error', error);
        this.alert(error.message);
      })
    console.log('would sign in with', this.user.value, this.password.value);
    // this.navCtrl.push(LoginPage);

  }
}
