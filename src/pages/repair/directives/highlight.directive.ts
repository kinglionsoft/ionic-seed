import { Directive, ElementRef, Input, Renderer,Output,EventEmitter } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    
    @Input('myHighlight') highlightColor: string;
    @Output() public colorChange:EventEmitter<string> = new EventEmitter<string>();

    constructor(el: ElementRef, renderer: Renderer) {
       this.highlightColor='yellow';
       setTimeout(()=>{
           this.colorChange.emit(this.highlightColor);
           renderer.setElementStyle(el.nativeElement, 'backgroundColor', this.highlightColor);
       },2e3);
    }
}