import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('hover') onMouseClick() {
    this.highlight('green');
  }

  @HostListener('mouseout') onMouseOut(){
    this.highlight('white');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
