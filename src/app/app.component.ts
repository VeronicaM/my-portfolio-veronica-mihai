import { Component, OnInit } from '@angular/core';
import { addEvent } from "./commons/util";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isOpen = true;

  ngOnInit(){
     addEvent(window, "resize", e => {
		this.isOpen = window.innerWidth > 600;
	});
  }
  toggleSideNav(){
	    this.isOpen = !this.isOpen;
  }
  get showBurger(){
  	 return window.innerWidth < 600;
  }
}
