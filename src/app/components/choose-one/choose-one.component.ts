import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.interface';
import { Question } from 'src/app/models/question.interface';

@Component({
  selector: 'app-choose-one',
  templateUrl: './choose-one.component.html',
  styleUrls: ['./choose-one.component.scss']
})
export class ChooseOneComponent implements OnInit {
  questionsList: Question[] = [{
    value: 'First question', answersList: [{ value: 'first', isCorrect: true }, { value: 'second', isCorrect: false }, {
      value: 'third', isCorrect: false
    }, {
      value: 'fourth', isCorrect: false
    }]
  }, {
    value: 'Second question', answersList: [{ value: 'first', isCorrect: false }, { value: 'second', isCorrect: true }, {
      value: 'third', isCorrect: false
    }, {
      value: 'fourth', isCorrect: false
    }]
  }, {
    value: 'Third question', answersList: [{ value: 'first', isCorrect: false }, { value: 'second', isCorrect: false }, {
      value: 'third', isCorrect: true
    }, {
      value: 'fourth', isCorrect: false
    }]
  }, {
    value: 'Fourth question', answersList: [{ value: 'first', isCorrect: false }, { value: 'second', isCorrect: false }, {
      value: 'third', isCorrect: false
    }, {
      value: 'fourth', isCorrect: true
    }]
  }];
  currentQuestionIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
