import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  congratsAudioUrl = '../../../assets/audio/congrats.mp3'

  constructor() { }

  ngOnInit(): void {
    this.playAudio(this.congratsAudioUrl)
  }

  playAudio(src: string) {
    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }
}
