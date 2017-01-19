import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './contents/home/content.component';
import { LearnMainComponent } from './contents/learn-main/learn-main.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule,
    FormsModule, AppRoutingModule],
  declarations: [AppComponent,
    NavigationComponent, FooterComponent,
    ContentComponent, LearnMainComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
