import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  title: string = this.navParams.get('title');
  message: string = this.navParams.get('message');
  key: string = this.navParams.get('key');
  taskRef: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, fireDatabase: AngularFireDatabase) {
    this.taskRef = fireDatabase.list('tasks');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  deleteTask() {
    this.taskRef.remove(this.key);
    this.navCtrl.pop();
  }

}
