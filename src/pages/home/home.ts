import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(public navCtrl: NavController, fireDatabase: AngularFireDatabase) {
    this.tasksRef = fireDatabase.list('tasks');
    this.tasks = this.tasksRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
  }

  viewDetails(taskInfo) {
    this.navCtrl.push(DetailsPage, taskInfo);
  }

}
