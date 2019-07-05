import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: 'course', component: CourseGridComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
];
export const routing = RouterModule.forRoot(appRoutes);
