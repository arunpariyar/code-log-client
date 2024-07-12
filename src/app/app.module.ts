// Modules
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//App Component
import { AppComponent } from './app.component';

//CUSTOM COMPONENTS
import { FeedbackBarComponent } from './components/feedback-bar/feedback-bar.component';
import { UpvoterBtnComponent } from './components/buttons/upvoter-btn/upvoter-btn.component';
import { CategoryBtnComponent } from './components/buttons/category-btn/category-btn.component';
import { ButtonComponent } from './components/button/button.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLogoComponent } from './components/main-logo/main-logo.component';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { RoadmapSidebarComponent } from './components/roadmap-sidebar/roadmap-sidebar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { EmptyDisplayComponent } from './components/empty-display/empty-display.component';
import { PrimaryBtnComponent } from './components/buttons/primary-btn/primary-btn.component';
import { NewFeedbackFormComponent } from './components/new-feedback-form/new-feedback-form.component';
import { StoreModule } from '@ngrx/store';

//NGRX Reducers
import { feedbackReducer } from './store/feedback.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeedbackEffects } from './store/feedback.effects';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';
import { EditFeedbackFromComponent } from './components/edit-feedback-from/edit-feedback-from.component';

//devtools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackBarComponent,
    UpvoterBtnComponent,
    CategoryBtnComponent,
    ButtonComponent,
    DashboardComponent,
    MainLogoComponent,
    DisplayCategoryComponent,
    RoadmapSidebarComponent,
    FeedbackComponent,
    EmptyDisplayComponent,
    PrimaryBtnComponent,
    NewFeedbackFormComponent,
    FeedbackDetailsComponent,
    EditFeedbackFromComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      feedback: feedbackReducer,
    }),
    EffectsModule.forRoot([FeedbackEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
