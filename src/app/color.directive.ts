import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input() status = '';
  constructor(private el: ElementRef) { 
    this.statusColor();
  }
  
  private statusColor() {
    if (this.status === 'offen') { this.el.nativeElement.style.backgroundColor = 'red'; }
    if(this.status === 'erledig'){  this.el.nativeElement.style.backgroundColor = 'green';}

  }

}
