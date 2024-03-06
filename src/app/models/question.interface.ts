import { Answer } from "./answer.interface";

export interface Question {
  value: string;
  url: string;
  answersList: Answer[];
}