export class ModuleServiceClient{
  HerokuURL = 'https://murmuring-cliffs-35065.herokuapp.com';
  findAllModule() {
    return fetch(this.HerokuURL + '/api/modules').then(response => response.json());
  }
  findAllModulesForCourse(courseId) {
    return fetch(this.HerokuURL + '/api/courses/' + courseId + '/modules').then(response => response.json());
  }

  findModuleById(moduleId)
  {
    return fetch(this.HerokuURL + '/api/modules/' + moduleId).then(response => response.json());
  }
}
