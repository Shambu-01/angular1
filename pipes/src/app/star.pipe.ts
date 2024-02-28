import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
   if(value%2==0)
   {
    return "Even"
   }
   else{
    return "ODD"
   }
   }
  }

