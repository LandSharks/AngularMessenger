import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';
import { Subscription } from "rxjs/Subscription";

import { Message } from "./message";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "app";

  public message: Message;
  public messages: Message[] = [];
  private connection: Subscription;


  constructor(
    private appService: AppService
  ) { }

  public sendMessage(): void {
    this.appService.sendMessage(this.message);
  }

  public ngOnInit() {
    this.message = new Message();
    this.connection = this.appService.getMessages().subscribe(message => {
      //var temp = Object.assign(Message, message);

      this.messages.push(message);
      
      console.log(message);

    });
  }
  public ngOnDestroy() {
    this.connection.unsubscribe();
  }
}