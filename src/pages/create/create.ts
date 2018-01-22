import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  taskData = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, fireDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createTask(taskTitle: string, taskMessage: string) {
    const taskRef: firebase.database.Reference = firebase.database().ref(`/tasks`);
    taskRef.push(this.taskData);
    this.taskData = {};
  }

}
