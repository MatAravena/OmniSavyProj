export class VideoModel {

  id: number;
  title: string;
  date: Date;
  speakers: string;
  description: string; 

  constructor(id: number,
  title ?: string,
  date ?:  Date  ,
  speakers ?:  string,
  description ?:  string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.speakers = speakers;
    this.description = description;
  }

  listaDeEventos(){

    let list: VideoModel[];

    list.push( new VideoModel(1, "First Event", new Date(), "Sandra", "Charla super interesante"));
    list.push( new VideoModel(2, "Second Event", new Date(), "Sofia", "Charla mas o menos interesante"));
    list.push( new VideoModel(3, "Third Event", new Date(), "Josefina", "Charla no tan interesante"));
    return  list;

  }
}