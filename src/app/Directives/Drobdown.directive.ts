import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[AppDrobdown]',
})
export class DrobdownDirective {
  @HostBinding('class.open') isVisble: boolean = false;
  @HostListener('click') onClick() {
    this.isVisble = !this.isVisble;
  }
}
