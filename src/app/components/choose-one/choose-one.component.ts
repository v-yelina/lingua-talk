import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.interface';

@Component({
  selector: 'app-choose-one',
  templateUrl: './choose-one.component.html',
  styleUrls: ['./choose-one.component.scss']
})
export class ChooseOneComponent implements OnInit {
  answersList: Answer[] = [{ value: 'first', isCorrect: true }, { value: 'second', isCorrect: false }, {
    value: 'third', isCorrect: false
  }, {
    value: 'fourth', isCorrect: false
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
