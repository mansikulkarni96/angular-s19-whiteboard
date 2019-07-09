import { Component, OnInit } from '@angular/core';
import {WidgetServiceClient} from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets = [];

  constructor(private widgetService: WidgetServiceClient) {

    this.widgetService.findAllWidgets().then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
  }

}
