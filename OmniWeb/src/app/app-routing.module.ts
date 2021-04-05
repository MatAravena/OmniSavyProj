    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import {EventsComponent} from './Components/events/events.component'
    import {AboutUsComponent} from './Components/about-us/about-us.component'
    import { WelcomeComponent } from './Components/welcome/welcome.component';
    import { VideoComponent } from './Components/events/video/video.component';

    const appRoutes: Routes = [
        { path: 'events', component: EventsComponent }, 
        { path: 'aboutUs', component: AboutUsComponent },
        { path: 'welcome', component: WelcomeComponent },
        {path: '', redirectTo: '/welcome', pathMatch: 'full'},
        { path: 'video', component: VideoComponent },
        { path: 'video/:id', component: VideoComponent },
        // { path: '**', component: WelcomeComponent }
    ];
    
    @NgModule({
        imports: [RouterModule  .forRoot(appRoutes, {
        useHash: true
        //    , enableTracing: true
        })],
        exports: [RouterModule]
    })
 
    export class AppRoutingModule { }
