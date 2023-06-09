import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [  ]
})
export class HomeComponent{
  nuevascanciones: any[] = [];
  constructor(private spotify: SpotifyService ) {
    this.spotify.getNewReleases()
    .subscribe((data: any) => {
      console.log(data);
      this.nuevascanciones = data;
    });
  }
  }
