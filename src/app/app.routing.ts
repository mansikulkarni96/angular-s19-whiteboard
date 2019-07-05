import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './course-grid/course-grid.component';
const appRoutes: Routes = [
  { path: 'course', component: CourseGridComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
