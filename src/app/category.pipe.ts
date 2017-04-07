import {Pipe, PipeTransform} from '@angular/core';
import {Account} from './account.model';

@Pipe({
  name: "category",
  pure: false

})

export class CategoryPipe implements PipeTransform {

  transform(input: Account[], desiredCategory) {
    var output: Account[] = [];

    if (desiredCategory === "Charity") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category ==="Charity") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Product") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category ==="Product") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Other") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category ==="Other") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
