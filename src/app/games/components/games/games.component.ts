import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/games.interface';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
  }

  setFahrzeuge() {
    this.dbService.setGameType(Games.fahrzeuge);
  }
  setSpielplatz() {
    this.dbService.setGameType(Games.spielplatz);
  }

}
