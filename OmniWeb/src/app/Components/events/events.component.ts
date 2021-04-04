import { Component, OnInit } from '@angular/core';
import { VideoModel } from './../../Models/VideoModel'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public lstVideos: Array<VideoModel> = [];
  
  constructor(private videoClass: VideoModel,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.lstVideos.splice(0, this.lstVideos.length);
    this.lstVideos = this.videoClass.listaDeEventos();
  }
}