import {Pipe, PipeTransform} from '@angular/core';
import {Account} from './account.model';

@Pipe({
  name: "category",
  pure: false

})

export class CategoryPipe implements PipeTransform {
  transform(input: Account[],) {

    return input;
  }
}
