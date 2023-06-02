import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GamesComponent } from './components/games/games.component';
import { ChooseOneComponent } from './components/choose-one/choose-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GamesComponent,
    ChooseOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
