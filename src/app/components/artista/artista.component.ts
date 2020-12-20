import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Para saber el id que esta en la ruta. o url

import { SptifyService } from '../../services/sptify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {}
  toptrack: any []=[]
  loading: boolean;

  constructor(private Activatedrouter: ActivatedRoute,
              private spotifyservice:SptifyService) {

    this.Activatedrouter.params.subscribe(params =>{
       // console.log(params['id']);
       // Con esta clase traemos los varoles por el URL
        this.loading = true;

        // Esto Como es que era que lmma ?
       this.getArtista(params['id']);
       this.getTopTrack(params['id']);
    })
  }

  ngOnInit() {
  }

  getArtista(id: string){
    this.spotifyservice.getArtista(id)
        .subscribe(artista =>{
          console.log(artista);
          this.artista = artista;
          this.loading = false;
        });
  }

  getTopTrack(id: string){
    this.spotifyservice.getTopTrack(id)
        .subscribe(toptrack =>{
          console.log("TOP----");
          console.log(toptrack);
          this.toptrack = toptrack;
          this.loading = false;
        });
  }
}
