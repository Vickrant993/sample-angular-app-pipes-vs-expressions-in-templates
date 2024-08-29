import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(person: any, args?: any): any {
    console.log('pipe called ---> ');
    return person.firstName + ' ' + person.lastName;
  }
}
