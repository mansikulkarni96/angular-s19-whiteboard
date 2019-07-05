import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private  courseService: CourseServiceClient, private courseRoute: ActivatedRoute) {
    this.courseRoute.params.subscribe( params => this.findCourse(params['courseId']));

  }
  course: Course = new Course();
  findCourse(courseId) {
    this.courseService.findCourseById(courseId).then(course => this.course = course);
  }


  ngOnInit() {
  }

}
