import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  title = 'everybuddies-web';
}
