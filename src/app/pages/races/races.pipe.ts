import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'races'
})
export class RacesPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if (query === undefined || query === '') { return value; }
    return value.filter(data => {
      return String(data.name).toLowerCase().includes(String(query).toLowerCase());
    });
  }

}
