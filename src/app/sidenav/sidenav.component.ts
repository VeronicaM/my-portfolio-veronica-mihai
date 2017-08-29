import { 
  Component, Input, OnInit, Output, EventEmitter
 } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent  {
  @Input() isOpen;
  constructor() { }
    ngOnInit() {
  }
}
