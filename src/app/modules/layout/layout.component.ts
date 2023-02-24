import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  protected showSideBar: boolean = false;
  @Output() onToggleSideBar: EventEmitter<boolean> = new EventEmitter(false);

  setSideBar(state: boolean): void {
    this.showSideBar = state;
    this.onToggleSideBar.emit(state);
  }
}
