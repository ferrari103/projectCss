import { Component, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import { CalendarDay } from '../shared/calendarDay';

import {dayNames} from '../shared/event';
import {CreateEventComponent} from '../create-event/create-event.component';
import {getMatFormFieldMissingControlError} from '@angular/material/form-field';

export class EventDay{
  constructor(public title: string,
              public id: number) {
  }
}
@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(calendarDaysArray: any, chunkSize: number): any {
    const calendarDays = [];
    let weekDays = [];

    calendarDaysArray.map((day, index) => {
      weekDays.push(day);
      console.log(day);
      if (++index % chunkSize  === 0) {
        calendarDays.push(weekDays);
        weekDays = [];
      }
    });
    return calendarDays;
  }
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  dayNames = dayNames;
  public calendar: CalendarDay[] = [];
  public eventDay: EventDay[] = [];
  public eventD: EventDay = new EventDay('', 1);
  public monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  public displayMonth: string;
  public displayYear: string;
  private monthIndex = 0;
  public sad: number;

@ViewChild(CreateEventComponent) create: CreateEventComponent;
  // @ts-ignore
  addEvent(): any{

    for (const event of this.create.events) {
      const i = event.date;
      console.log(event.date, 'event date');
      console.log(this.sad, 'calendar date');
      if (event.date === this.sad){
        console.log('zanesti');
        console.log(event.text);
        this.calendar[i].title = event.text;
        console.log(this.calendar);
      }else {
        console.log('net takogo');
      }
    }
  }

  ngOnInit(): void {
    this.generateCalendarDays(this.monthIndex);
  }

  getDateItem(calendarDaysArray: any): any{
    let date: any;
    date = calendarDaysArray;
    this.sad = date;
    // @ts-ignore
    console.log(this.sad);
    return this.sad;

  }
  out(CalendarDaysArray: any, getDate: number): any {
    // tslint:disable-next-line:prefer-const new-parens
    let day: Date = new Date;
    // @ts-ignore
    console.log(day.getDay());
    // @ts-ignore
    console.log(day.toString(day.setDate(getDate)));
    // @ts-ignore
    console.log(Number(day.setDate(getDate)));
    // @ts-ignore
    console.log(Number(day.getDate()));
    // @ts-ignore
    if (day.toDateString(day.getDate()) === day.toDateString(day.setDate(getDate))){
      console.log('true');
      return true;
    }else{
      console.log('false');
      return false;
    }

  }

  private generateCalendarDays(monthIndex: number): void {
    // we reset our calendar
    this.calendar = [];
    // we set the date
    const day: Date = new Date(new Date().setMonth(new Date().getMonth() + monthIndex));

    // set the dispaly month for UI
    this.displayMonth = this.monthNames[day.getMonth()];
    this.displayYear = String(new Date().getFullYear());

    const startingDateOfCalendar = this.getStartDateForCalendar(day);

    let dateToAdd = startingDateOfCalendar;

    for (let i = 0; i < 42; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  private getStartDateForCalendar(selectedDate: Date){
    // for the day we selected let's get the previous month last day
    const lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));

    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;

    // but since we actually want to find the last Monday of previous month
    // we will start going back in days intil we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() !== 1) {
      do {
        startingDateOfCalendar = new Date(startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1));
      } while (startingDateOfCalendar.getDay() !== 1);
    }

    return startingDateOfCalendar;
  }

  public increaseMonth() {
    this.monthIndex++;
    this.generateCalendarDays(this.monthIndex);
  }

  public decreaseMonth() {
    this.monthIndex--;
    this.generateCalendarDays(this.monthIndex);
  }

  public setCurrentMonth() {
    this.monthIndex = 0;
    this.generateCalendarDays(this.monthIndex);
  }


}
