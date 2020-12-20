import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  // Este filtro se crea con la finalidad de reemplar
  // por una imagen que tengo dentro de mi carpete
  // por si cuando spotyfy no regresa imagen colocar
  // una de sustituta


  // vamos a validar que el arreglo de imagenes no este vacio 
  // si lo esta, colocar una imagen de mi app, en este caso
  // no.image.png
  transform(image: any[]): any {
    if (!image) {
      return 'assets/imagenes/noimage.png'
    }
    if (image.length > 0) {
      return image[0].url
    } else {
      return 'assets/imagenes/noimage.png'
    }

  }
}
