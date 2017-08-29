import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";
@Injectable()
export class ProjectService {

  constructor(private http:Http) { 
  		 

  }
  getProjects(){
  	 return this.http.get('../../assets/data/projects.json')
  	 	.map((response)=>response.json())
  	 	.catch(this.handleError);
  }
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error || "Server error");
	}
}
