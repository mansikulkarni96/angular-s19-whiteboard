export class LessonServiceClient{
  HerokuURL = 'https://murmuring-cliffs-35065.herokuapp.com';
  findAllLesson() {
    return fetch(this.HerokuURL + '/api/lessons').then(response => response.json());
  }
  findAllLessonForModule(moduleId) {
    return fetch(this.HerokuURL + '/api/modules/' + moduleId + '/lessons').then(response => response.json());
  }
}
