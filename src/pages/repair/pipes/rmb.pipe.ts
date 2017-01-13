import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rmb'
})
export class RmbPipe implements PipeTransform {
    transform(value: any, args: any[]): string {
        if(isNaN(value)) return value;
        return `￥${value.toFixed(2)}`;
    }
}