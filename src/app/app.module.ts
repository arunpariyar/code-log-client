import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackBarComponent } from './components/feedback-bar/feedback-bar.component';
import { PrimaryBtnComponent } from './components/buttons/primary-btn/primary-btn.component';
import { UpvoterBtnComponent } from './components/buttons/upvoter-btn/upvoter-btn.component';
import { CategoryBtnComponent } from './components/buttons/category-btn/category-btn.component';

@NgModule({
  declarations: [AppComponent, FeedbackBarComponent, PrimaryBtnComponent, UpvoterBtnComponent, CategoryBtnComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
