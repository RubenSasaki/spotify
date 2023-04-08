import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('consola lista');
  }
  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCTEqyDKpB_56i6Zaf8z6FREC82cEIrZZJyA7fs17HzelCne4ipF1jxwFDqpvTv8qNuA5-EiLKusm5t0DM'
    });
    return this.http.get(url , {headers});
  }
  getNewReleases(){

    //*const headers = new HttpHeaders({
     //* 'Authorization': 'Bearer BQBQRARRkeIN-vXtnHUwAo-Nsp79PzXtAy7PUahDLYI9aoCwUwGxp8_elM9DBBuXEshXzDw2_nPfav0dlO8'
    //* este codigo nos servia para llamar cada vez el api de spotify y el code})

   return  this.getQuery('browse/new-releases?limit=20')
         .pipe( map((data: any)  => data['albums'].items));
          
     
}
getArtistas(termino: string ){

  
return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
.pipe( map((data: any)  => data['artists'].items));
}

getArtista(id: string ){

  
  return this.getQuery(`artists/${id}`)
  //.pipe( map((data: any)  => data['artists'].items));
  
  
  
  }

}