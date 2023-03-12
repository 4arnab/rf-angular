import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // encapsulation:ViewEncapsulation.None // You can also use ViewEncapsulation TO chage the default behavior
})
export class HeaderComponent {
  @ViewChild('selector', { static: true }) contentInput!: ElementRef;
  @Output() shoppingList = new EventEmitter<string>();
  @Output() Recipes = new EventEmitter<string>();

  checkButton() {
    console.log(this.contentInput.nativeElement.value);
  }

  value = 1209;
}
