import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  getIconPath(iconName: string): string {
    return `/assets/icons/${iconName}.svg`;
  }

}
