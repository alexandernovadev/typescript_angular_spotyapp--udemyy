import { Component, OnInit } from '@angular/core';
import { SptifyService } from 'src/app/services/sptify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevascanciones: any [] = [];

  loading: boolean;

  mensajeErrorSpotify: string;
  error: boolean;

  constructor(private spotifi: SptifyService) {

    // Nada yo creo que esto quedo claro, solo traiga
    // la data y se la asigna a una variable, Json o arreglo
    // depende lo que quiera, siempre hay que suscribirse a la
    // data
    this.loading = true;
    this.error = false;
    this.spotifi.getNewReleases().subscribe((newsongs: any) => {
      console.log(newsongs);
      this.nuevascanciones = newsongs;
      this.loading = false;
    }, (Servicioerror: any)=>{
      this.loading = false;
      this.error = true;
      this.mensajeErrorSpotify = Servicioerror.error.error.messague;
    });

   }

  ngOnInit() {
  }

}
