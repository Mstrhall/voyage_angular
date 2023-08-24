import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryContinentColor'
})
export class CountryContinentColorPipe implements PipeTransform {

  transform(continent: string): string {
    let color: string;
    switch (continent) {
      case 'Europe':
        color = 'blue';
        break;
      case 'Asia':
        color = 'red';
        break;
      case 'Africa':
        color = 'orange';
        break;
      case 'South America':
        color = 'yellow';
        break;
      case 'North America':
        color = 'blue';
        break;
      case 'Oceania':
        color = 'purple';
        break;
      default:
        color = 'white'; // Définir une couleur par défaut si nécessaire
        break;
    }
    return 'chip ' + color;
  }
}

