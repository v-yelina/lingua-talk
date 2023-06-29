import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { ChooseOneComponent } from './components/choose-one/choose-one.component';
import { SharedModule } from './shared/shared.module';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    ChooseOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
