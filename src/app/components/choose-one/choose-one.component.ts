import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-one',
  templateUrl: './choose-one.component.html',
  styleUrls: ['./choose-one.component.scss']
})
export class ChooseOneComponent implements OnInit {
  answersList: [string, boolean][] = [['first', true], ['second', false], ['third', false], ['fourth', false]];

  constructor() { }

  ngOnInit(): void {
  }

}
