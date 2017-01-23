import { Component } from '@angular/core';





@Component({
  selector: 'my-app',
  template: `
  <app-navigation>navigation</app-navigation>
   <section class="home-content row">
    <router-outlet></router-outlet>
    </section>
    
   <app-footer>footer</app-footer>`
  }
 )
export class AppComponent {

}
