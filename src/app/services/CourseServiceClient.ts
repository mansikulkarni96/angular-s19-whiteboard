export class CourseServiceClient {
  HerokuURL = ' https://murmuring-cliffs-35065.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.HerokuURL + 's')
      .then(response => response.json());
  }
}
