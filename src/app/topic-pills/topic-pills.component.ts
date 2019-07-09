import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];
  constructor(private topicService: TopicServiceClient, private topicRoute: ActivatedRoute) {
    this.topicRoute.params.subscribe(params => this.loadData(params));
  }

  loadData(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.loadLessons(this.lessonId);
  }

  loadLessons(lessonId) {
    if (lessonId !== undefined)
    {
      this.topicService.findAllTopicsForLesson(lessonId).then(topics => this.topics = topics);
    }
  }

  ngOnInit() {
  }

}
