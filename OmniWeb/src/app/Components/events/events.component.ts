import { Component } from '@angular/core';
import { VideoModel } from './../../Models/VideoModel'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  video: VideoModel = new VideoModel();
  public lstVideos: Array<VideoModel> = [];
  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.lstVideos.splice(0, this.lstVideos.length);
    this.lstVideos = this.video.listaVideos();
  }

  ClickDetails(id: number){
    
  }
}