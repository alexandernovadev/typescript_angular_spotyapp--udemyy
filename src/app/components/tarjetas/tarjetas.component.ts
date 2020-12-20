import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any [] = [];
  @Input() artista: any [] = [];

  constructor( private router:Router) { }

  ngOnInit() {
  }

  VerArtista(item: any) {
    // console.log(item);

    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId]);
    console.log(artistaId);
  }

}
