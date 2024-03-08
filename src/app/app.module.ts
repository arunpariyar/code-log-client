import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackBarComponent } from './components/feedback-bar/feedback-bar.component';
import { PrimaryBtnComponent } from './components/buttons/primary-btn/primary-btn.component';

@NgModule({
  declarations: [AppComponent, FeedbackBarComponent, PrimaryBtnComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
