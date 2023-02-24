import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  protected showSideBar: boolean = false;

  setShowSideBar(state: boolean): void {
    this.showSideBar = state;
  }
}
