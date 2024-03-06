import { Injectable } from "@angular/core";
import fahrzeuge from "../db/fahrzeuge";
import { Games } from "../models/games.interface";

@Injectable({
  providedIn: 'root',
})

export class DbService {
  private gameType: null | Games = null;

  constructor() { }

  public setGameType(type: Games) {
    this.gameType = type;
  }

  selectDb() {
    switch (this.gameType) {
      case Games.fahrzeuge:
        return fahrzeuge;
    }
    return [];
  }
}