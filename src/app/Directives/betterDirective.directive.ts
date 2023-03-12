import {
  Renderer2,
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[betterDirective]',
})
export class BetterDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostBinding('style.backgroundColor') BackgroundColor: string = 'transparent';

  // hostListener makes the directive dynamic and more intractive
  @HostListener('mouseenter') mouseOver(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
    this.BackgroundColor = 'green';
  }
  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.BackgroundColor = 'blue';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor',
    //   'blue'
    // );
  }
}

// https://www.youtube.com/watch?v=Kbauf9IgsC4
