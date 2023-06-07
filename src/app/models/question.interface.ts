import { Answer } from "./answer.interface";

export interface Question {
  value: string;
  answersList: Answer[];
}