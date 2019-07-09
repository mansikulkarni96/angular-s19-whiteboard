import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';
@Component({

  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {


  courseId;
  moduleId;
  lessonId;
  lessons = [];
  constructor(private lessonService: LessonServiceClient, private lessonRoute: ActivatedRoute) {
    this.lessonRoute.params.subscribe(params => this.loadData(params));
  }

  loadData(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    if(this.moduleId !== undefined) {
      this.loadLessons(this.moduleId);
    }
  }

  loadLessons(moduleId) {
    this.lessonService.findAllLessonForModule(moduleId).then(lessons => this.lessons = lessons);
  }

  ngOnInit() {
  }

}
