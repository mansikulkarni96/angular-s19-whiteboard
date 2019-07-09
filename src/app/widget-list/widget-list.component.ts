import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets = [];
  topicId;
  constructor(private widgetService: WidgetServiceClient, private widgetRoute: ActivatedRoute) {
    this.widgetRoute.params.subscribe(params => this.loadData(params));

  }

  loadData(params) {
    this.topicId = params['topicId'];
    if ( this.topicId !== undefined) {
      this.widgetService.findAllWidgetsForTopic(this.topicId).then(widgets => this.widgets = widgets);
    }
  }

  ngOnInit() {
  }

}
