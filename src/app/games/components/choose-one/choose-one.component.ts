import { Component, OnInit, HostListener } from '@angular/core';
import { Question } from 'src/app/models/question.interface';

@Component({
  selector: 'app-choose-one',
  templateUrl: './choose-one.component.html',
  styleUrls: ['./choose-one.component.scss']
})
export class ChooseOneComponent implements OnInit {
  questionsList: Question[] = [{
    value: 'First question is really really long, the longest question ever', answersList: [{ value: 'first', isCorrect: true }, { value: 'second', isCorrect: false }, {
      value: 'third', isCorrect: false
    }, {
      value: 'fourth', isCorrect: false
    }]
  }, {
    value: 'Second question is really really long, the longest question ever', answersList: [{ value: 'first', isCorrect: false }, { value: 'second', isCorrect: true }, {
      value: 'third', isCorrect: false
    }, {
      value: 'fourth', isCorrect: false
    }]
  }, {
    value: 'Third question is really really long, the longest question ever', answersList: [{ value: 'first', isCorrect: false }, { value: 'second', isCorrect: false }, {
      value: 'third', isCorrect: true
    }, {
      value: 'fourth', isCorrect: false
    }]
  }, {
    value: 'Fourth question is really really long, the longest question ever', answersList: [{ value: 'first', isCorrect: false }, { value: 'second', isCorrect: false }, {
      value: 'third', isCorrect: false
    }, {
      value: 'fourth', isCorrect: true
    }]
  }];
  currentQuestionIndex = 0;
  selectedAnswerIndex: number | null = null;
  isAnswerCorrect: boolean | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  checkIsAnswerCorrect(questionId: number, answerId: number) {
    this.isAnswerCorrect = this.questionsList[questionId].answersList[answerId].isCorrect;
    this.selectedAnswerIndex = answerId;
  }

  showNextQuestion() {
    if (this.currentQuestionIndex < this.questionsList.length) {
      this.currentQuestionIndex += 1;
      this.selectedAnswerIndex = null;
      this.isAnswerCorrect = null
    }
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