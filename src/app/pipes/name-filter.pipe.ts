import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../model/item';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], searchText: string): any[] {
    if (searchText) {
      const search = searchText.toLocaleLowerCase();
      return items.filter(item => {
        return item.name.toLocaleLowerCase().includes(search);
      });
    }
    return items;
  }

}
