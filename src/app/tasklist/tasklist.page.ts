import { Component, OnInit } from '@angular/core';
import { NavComponent } from '@ionic/core';
import { NavController } from '@ionic/angular';
//import { IonItemSliding } from '@angular/core';
import { Task } from './tasklist';
import { Observable } from 'rxjs';
import { AngularFireList } from 'angularfire2/database';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage{
  tasks: Observable<any[ ]>;
  taskList: AngularFireList<Task>;

  constructor(public af: AngularFireDatabase) { 
    this.tasks = Observable.create(observer => observer.next("hello"));
    this.taskList[
      {title: "Milk", status: "open"},
      {title: "Eggs", status: "open"},
      {title: "Syrup", status: "open"},
      {title: "Pancake Mix", status: "open"}
      ];
    this.taskList = this.af.list('/tasks');
    this.tasks = this.taskList.valueChanges();
  }

  addItem(data){
    let theNewTask: string = prompt("New Task");
    if( theNewTask != "")
    {
      let newTaskRef = this.taskList.push(
      { id: '', title: data.newTask, status: 'open' }
      );
      newTaskRef.update( { id: newTaskRef.key } );
    }
  }

  markAsDone(task: any){
    task.status="done";
  }

  removeTask(task: any){
    task.status="removed";
    let index = this.tasks[task];
    if (index > -1) {
      this.tasks[index] = "";
    }
  }

}
