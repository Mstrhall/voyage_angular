import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private initialColor:string ='white';
  private defaultColor:string= 'blue';
  private defaultHeight:number=200;
  private defaultwidht:number=400;
  constructor(private el:ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
    this.setwidht(this.defaultwidht);

  }
  @Input('appBorderCard') borderColor :string;
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor||this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

private setHeight(height:number){
  this.el.nativeElement.style.height=`${height}px`;
}

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }
  private setwidht(widht:number){
    this.el.nativeElement.style.width=`${widht}px`;
  }
}
