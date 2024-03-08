import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import fahrzeuge from 'src/app/db/fahrzeuge';
import { Question } from 'src/app/models/question.interface';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-choose-one',
  templateUrl: './choose-one.component.html',
  styleUrls: ['./choose-one.component.scss']
})
export class ChooseOneComponent implements OnInit {
  questionsList: Question[] = this.dbService.selectDb();
  currentQuestionIndex = 0;
  selectedAnswerIndex: number | null = null;
  isAnswerCorrect: boolean | null = null;
  answersSoundFolder = '../../../../assets/audio/answers/'
  correctAnswerSoundFileName = 'right-answer.mp3'
  wrongAnswerSoundFileName = 'wrong-answer.mp3'

  constructor(private dbService: DbService, private router: Router) { }

  ngOnInit(): void {
    this.playAudio(this.questionsList[this.currentQuestionIndex].url)
  }

  checkIsAnswerCorrect(questionId: number, answerId: number) {
    this.isAnswerCorrect = this.questionsList[questionId].answersList[answerId].isCorrect;
    this.isAnswerCorrect ? this.playAudio(this.answersSoundFolder + this.correctAnswerSoundFileName) : this.playAudio(this.answersSoundFolder + this.wrongAnswerSoundFileName)
    this.selectedAnswerIndex = answerId;
  }

  showNextQuestion() {
    if (this.currentQuestionIndex < this.questionsList.length) {
      this.currentQuestionIndex += 1;
      this.selectedAnswerIndex = null;
      this.isAnswerCorrect = null;
      this.playAudio(this.questionsList[this.currentQuestionIndex].url);
    } else {
      this.router.navigate(['/games/results'])
    }
  }

  playAudio(src: string) {
    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const keyPressed = event.key;

    if (/[1-4]/.test(keyPressed)) {
      const answerIndex = Number(keyPressed) - 1;

      if (answerIndex >= 0 && answerIndex < this.questionsList[this.currentQuestionIndex].answersList.length) {
        this.checkIsAnswerCorrect(this.currentQuestionIndex, answerIndex);
      }
    }
  }

}
