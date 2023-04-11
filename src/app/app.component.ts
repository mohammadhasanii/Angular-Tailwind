import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  features: Array<any> = [
    { title: 'WORKS AT ANY SCALE ',more:'Angular lets you start small and supports you as your team and apps grow.    ', image: 'https://angular.io/generated/images/marketing/home/any-size.svg', link: 'https://angular.io/scaling' },
    { title: 'LOVED BY MILLIONS    ',more:'Join the millions of developers building with Angular in a thriving and friendly community.    ', image: 'https://angular.io/generated/images/marketing/home/loved-by-millions.svg', link: 'https://angular.io/resources?category=community' },
    { title: 'BUILD FOR EVERYONE    ',more:"Rely on Angular's internationalization tools, security, and accessibility to build for everyone around the world.    ", image: 'https://angular.io/generated/images/marketing/home/build-for-everyone.svg', link: 'https://angular.io/everyone' }

  ]
}
