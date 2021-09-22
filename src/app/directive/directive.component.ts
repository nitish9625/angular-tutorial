import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  title:string = 'this is title';

  allowNewServer = false;
  serverCreationStatus = 'No server is creates';
  serverName = 'TestSever';
  serverCreated = false;

  serverID:number = 10;
  serverStatus:string = 'Offline';


  todaydate =Date.now();
  jsonval = {name:'Alex', age:'25', address:{a1:'Paris', a2:'France'}};
  months = ['jan','fab','mar','april','may','jun', 'july','aug','sep','oct','nov','dec']


 

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 5000);

    this.serverStatus = Math.random()>0.5?'Online':'Offline';
   
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getcolor(){
    return this.serverStatus ==='Online'?'green':'red'
  }

  ngOnInit(): void {
  }
onCreateServer(){
  this.serverCreated= true;
  this.serverCreationStatus = 'server is created. Name of the serveris'+this.serverName;
}
onUpdateServerName(event:Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}
}
