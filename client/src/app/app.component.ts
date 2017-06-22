import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "app";

  public message: string;
  public messages: string[];

  connection;
  

  constructor(
    private appService: AppService
  ) { }

  public sendMessage(): void {
    this.appService.sendMessage(this.message);
  }

  public ngOnInit() {
    this.connection = this.appService.getMessages.subscribe(message => {

    });
  }

}
