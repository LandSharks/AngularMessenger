import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Message } from './message';

import * as io from 'socket.io-client';


@Injectable()
export class AppService {

  private url = "http://localhost:3000";

  private socket;

  constructor() { }

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages(): Observable<Message> {

    let observable = new Observable(
      observer => {
        this.socket = io(this.url);

        this.socket.on('message', (data) => {
          observer.next(new Message(data));
        });

        return () => {
          this.socket.disconnect();
        };
      })

    return observable;
  }
}