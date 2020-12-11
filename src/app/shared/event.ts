import {Time} from '@angular/common';

export class Event{


  constructor( public name: string,
               public notify: string,
               public date: number,
               public day?: string,
               public text?: string,
               ) {
  }

}
export const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

