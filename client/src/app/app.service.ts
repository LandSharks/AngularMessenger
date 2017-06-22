import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';


import * as io from 'socket.io-client';


@Injectable()
export class AppService {

  private url = "http://localhost:3000";

  private socket;

  constructor() { }

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages(): Observable<any[]> {
    let obs = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    return obs;
  }
}
