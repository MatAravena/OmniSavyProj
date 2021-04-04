import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { EventsComponent } from './Components/events/events.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    EventsComponent,
    WelcomeComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
