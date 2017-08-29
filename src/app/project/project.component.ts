import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [];
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  	this.projectService.getProjects().subscribe((projects) => this.projects = projects);
  }

}
