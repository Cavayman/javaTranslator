import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
@NgModule({
  imports: [BrowserModule,
    FormsModule],
declarations: [AppComponent,NavigationComponent, FooterComponent,
    ContentComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
