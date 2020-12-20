import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Para utilizar los servicios de HTTP hayq ue traerlos de esta
// librerias

import { map } from 'rxjs/operators';
// Ese providedIn: 'root' me evita que lo ponga
// en el app.module
// POrque el servicio tengo que pornderlo en el app.module
@Injectable({
  providedIn: 'root'
})
export class SptifyService {

  constructor(private http:HttpClient) {
    console.log('Proeuba del servicio');
  }

  getQuery(query: string ) {

    // Para el servicio de Spotidy hay que traer un token
    // que en este caso se genero en PostMan, y se copio aqui
    // hay que renovar el token cada hora (o hacer un servidor)
    // YA LO APRENDEER......

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer code here' 
    })
    const url = `https://api.spotify.com/v1/${ query }`;

    // Todas las peticiones a Spotify hay que traerlas  con esa url
    // despues de es url va el query, para mas info consultar la pagina 
    // de developer que spotify

    return this.http.get(url, {headers} )
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map(data=> data['albums'].items))
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
               .pipe(map(data=> data['artists'].items))
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`)
              //  .pipe(map(data=> data['artists'].items))
  }

  getTopTrack(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
               .pipe(map(data=> data['tracks']))
  }
}
