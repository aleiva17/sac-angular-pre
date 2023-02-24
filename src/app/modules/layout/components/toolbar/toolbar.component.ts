import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Input() showSideBar: boolean = false;
  @Output() onToggleSideBar = new EventEmitter<boolean>();

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
    this.onToggleSideBar.emit(this.showSideBar);
  }
}
