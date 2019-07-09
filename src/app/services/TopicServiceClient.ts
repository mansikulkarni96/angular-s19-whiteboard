export class TopicServiceClient{
  HerokuURL = 'https://murmuring-cliffs-35065.herokuapp.com';
  findAllTopic() {
    return fetch(this.HerokuURL + '/api/lessons').then(response => response.json());
  }
  findAllTopicsForLesson(lessonId) {
    return fetch(this.HerokuURL + '/api/lessons/' + lessonId + '/topics').then(response => response.json());
  }

  findTopicById(topicId) {
    return fetch(this.HerokuURL + '/api/topics/' + topicId).then(response => response.json());
  }
}
