import { Component, OnInit } from '@angular/core';
import { NavComponent } from '@ionic/core';
import { NavController, IonItemSliding } from '@ionic/angular';
//import { IonItemSliding } from '@angular/core';
import { Task } from './tasklist';
import { Task as Home} from './tasklist';
import { Observable } from 'rxjs';
import { AngularFireList } from 'angularfire2/database';

import { AngularFireDatabase } from 'angularfire2/database';
import { isPromiseAlike } from 'q';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage{
  tasks: Observable<any[ ]>;
  taskList: AngularFireList<Task>;


  constructor(public af: AngularFireDatabase) { 
    this.taskList = this.af.list('/tasks');
    this.tasks = this.taskList.valueChanges();
  }

  addItem(data){
    let theNewTask: string = prompt("New Task");
    if( theNewTask != "")
    {
      let newTaskRef = this.taskList.push(
      { id: '', title: theNewTask, status: 'open' }
      );
      newTaskRef.update( { id: newTaskRef.key } );
    }
  }

  markAsDone(task: any, slide: IonItemSliding){
    if (task.status != "done")
    {
      task.status = "done";
    }
    else
    {
      task.status = "open";
    }
    this.taskList.update(task.id, task);
  }

  removeTask(task: any, slide: IonItemSliding){
    this.taskList.remove(task.id);
    slide.close();
  }

}
