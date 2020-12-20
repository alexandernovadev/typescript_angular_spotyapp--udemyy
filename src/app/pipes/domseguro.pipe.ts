import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  // si se agrega la constante este PIPE solo serviria para
  // este reproductor

  transform( value: string): any {
    const URL = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( URL + value );
  }

}
