import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeInterval',
  standalone: true
})
export class TimeIntervalPipe implements PipeTransform {

  transform(value: string | any): string {
    if (!value) return '';

    const date = new Date(value);
    const today = new Date();
    let counter: number;
    const seconds = Math.floor((today.getTime() - date.getTime()) / 1000);

    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };

    for (const i in intervals) {
      counter = Math.floor(seconds / intervals[i]);
      if (counter > 0) {
        if (counter === 1) {
          return counter + ' ' + i + ' ago';
        } else {
          return counter + ' ' + i + 's ago';
        }
      }
    }

    return 'Just now';

  }

}
