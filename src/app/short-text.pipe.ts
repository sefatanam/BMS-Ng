import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {


  transform(text: any, length: number = 3, showAll: boolean = false, suffix: string = '...'): any {
    if (typeof (text) === 'number' || text.length <= 20) {
      return text;
    }

    if (showAll) {
      return text;
    }

    if (text.split(' ').length > length) {

      return text.split(' ').splice(0, length).join(' ') + suffix;
    }

    return text;
  }


}
