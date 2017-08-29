import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports:[ToolbarComponent, MaterialModule, BrowserAnimationsModule],
  declarations: [ToolbarComponent]
})
export class CommonsModule { }
