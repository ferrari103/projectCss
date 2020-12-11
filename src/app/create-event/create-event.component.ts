import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Event } from '../shared/event';
import { dayNames } from '../shared/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: Event = new Event('', '', 0 , '' , '');
  events: Event[] = [];
  dayNames = dayNames;

  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    this.events.push(new Event(this.event.name, this.event.notify, this.event.date, this.event.day, this.event.text));
  }
}
