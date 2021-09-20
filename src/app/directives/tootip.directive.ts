import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTootip]'
})
export class TootipDirective {

  tooltip: any;
  @Input() appTootip = "";
  
  constructor(private el: ElementRef, private renderer: Renderer2) { 
  }
  
  @HostListener('mouseenter') onMouseEnter() {
     if(!this.tooltip) this.showTooltip(this);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(this.tooltip) this.hideTooltip(this);
  }

  showTooltip(elem: any) {
    this.tooltip = this.renderer.createElement('SPAN');
    this.renderer.addClass(this.tooltip, "tooltiptext")
    let text = this.renderer.createText(this.appTootip);
    this.renderer.appendChild(this.tooltip, text);
    this.renderer.setStyle(this.el.nativeElement, "position", "relative")
    elem.el.nativeElement.appendChild(this.tooltip);
  }

  hideTooltip(elem: any) {
    this.renderer.removeChild(elem.el.nativeElement, this.tooltip);
    this.tooltip = null;
  }
}
