import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackBarComponent } from './components/feedback-bar/feedback-bar.component';
import { PrimaryBtnComponent } from './components/buttons/primary-btn/primary-btn.component';
import { UpvoterBtnComponent } from './components/buttons/upvoter-btn/upvoter-btn.component';
import { CategoryBtnComponent } from './components/buttons/category-btn/category-btn.component';
import { ButtonComponent } from './components/button/button.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLogoComponent } from './components/main-logo/main-logo.component';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { RoadmapSidebarComponent } from './components/roadmap-sidebar/roadmap-sidebar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

import { EmptyDisplayComponent } from './components/empty-display/empty-display.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackBarComponent,
    PrimaryBtnComponent,
    UpvoterBtnComponent,
    CategoryBtnComponent,
    ButtonComponent,
    DashboardComponent,
    MainLogoComponent,
    DisplayCategoryComponent,
    RoadmapSidebarComponent,
    FeedbackComponent,

    EmptyDisplayComponent,

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
