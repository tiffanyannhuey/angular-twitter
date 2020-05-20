import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwitterSearchComponent } from './twitter-search/twitter-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigModule } from './app-config.module';
import { SearchTweetsService } from './services/search-tweets.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TwitterSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppConfigModule,
    HttpClientModule
  ],
  providers: [SearchTweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
