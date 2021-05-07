import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

  transform(text: string, args: number): unknown {
    const maxLength = args || 0;
    const length = text.length;

    return (maxLength - length);
  }

}
