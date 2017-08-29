import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
	imports: [
	RouterModule.forRoot([
	{ path: 'projects', 		
	  component: ProjectComponent },	
    { path: 'contact', 
	  component: ContactComponent },	
    { path: 'about', 
	  component: AboutComponent },
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	])
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}; 