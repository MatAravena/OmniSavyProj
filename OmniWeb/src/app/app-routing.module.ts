import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './Components/events/events.component'
import {AboutUsComponent} from './Components/about-us/about-us.component'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
      { path: 'events', component: EventsComponent }, 
      { path: 'aboutUs', component: AboutUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: false
    })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
