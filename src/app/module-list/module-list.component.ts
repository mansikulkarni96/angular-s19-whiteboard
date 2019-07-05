import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  courseId;
  moduleId;
  modules = [];
  constructor(private moduleService: ModuleServiceClient, private moduleRoute: ActivatedRoute) {
    this.moduleRoute.params.subscribe(params => this.loadData(params));
  }

  loadData(params){
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.loadModules(this.courseId);
  }

  loadModules(courseId) {
    this.moduleService.findAllModulesForCourse(courseId).then(modules => this.modules = modules);
  }


  ngOnInit() {
  }

}
