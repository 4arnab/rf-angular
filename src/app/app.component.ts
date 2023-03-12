import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'course-project';
  toggleNavigation: Boolean = true;

  recipes(event: string) {
    this.toggleNavigation = true;
  }

  shoppingList(event: string) {
    this.toggleNavigation = false;
  }
}
