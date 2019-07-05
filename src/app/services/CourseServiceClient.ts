export class CourseServiceClient {
  HerokuURL = ' https://murmuring-cliffs-35065.herokuapp.com/api/courses';
  findAllCourses() {
    return fetch(this.HerokuURL )
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.HerokuURL + "/" + courseId)
      .then(response => response.json());
  }
}
