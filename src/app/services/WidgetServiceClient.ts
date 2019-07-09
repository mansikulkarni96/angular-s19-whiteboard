export class WidgetServiceClient {
  HerokuURL = 'https://murmuring-cliffs-35065.herokuapp.com';
  findAllWidgets() {
    return fetch(this.HerokuURL + '/api/widgets').then(response => response.json());
  }
  findAllWidgetsForTopic(topicId) {
    return fetch(this.HerokuURL + '/api/topics/' + topicId + '/widgets').then(response => response.json());
  }

  findWidgetById(widgetId) {
    return fetch(this.HerokuURL + '/api/widgets/' + widgetId).then(response => response.json());
  }
}
