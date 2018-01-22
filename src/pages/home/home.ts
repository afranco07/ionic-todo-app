import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Observable<any[]>;

  constructor(public navCtrl: NavController, fireDatabase: AngularFireDatabase) {
    this.tasks = fireDatabase.list('tasks').valueChanges();
  }

  ionViewDidLoad() {
  }

}
