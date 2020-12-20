import { Component, OnInit } from '@angular/core';
import { SptifyService } from 'src/app/services/sptify.service';
import { log } from 'util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any [] = []
  loading: boolean
  constructor(private spotifi: SptifyService) {
    
  }

  buscar(dato: string){
    console.log(dato);

    //Para no muestre el loading cuando esta vacio
    if (dato.length != 0) {
      this.loading = true
    }

    this.spotifi.getArtistas(dato).subscribe((data: any) => {
      console.log(data)

      this.artistas = data
      this.loading = false
    }) ;
  }

  ngOnInit() {
  }

}
