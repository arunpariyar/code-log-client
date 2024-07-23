import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewFeedbackFormComponent } from './components/new-feedback-form/new-feedback-form.component';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';
import { EditFeedbackFromComponent } from './components/edit-feedback-from/edit-feedback-from.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'feedback',
    component: NewFeedbackFormComponent,
  },
  {
    path: 'feedback/:id',
    component: FeedbackDetailsComponent,
  },
  { path: 'feedback/edit/:id', component: EditFeedbackFromComponent },
  { path: 'roadmap', component: RoadmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
