import { Component} from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[] = [];
  constructor(private spotify: SpotifyService) { }
  buscar(termino: string){
 console.log(termino);
 this.spotify.getArtistas(termino)
 .subscribe((data: any) =>{
   console.log(data);
   this.artistas = data;
 });
  }
  }
