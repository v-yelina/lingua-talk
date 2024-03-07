import { Question } from "../models/question.interface";

const spielplatz: Question[] = [{
  value: 'rutsche',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_rutsche.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/rutsche.png', isCorrect: true }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/schaukel.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/spielen.png', isCorrect: false
  }]
}, {
  value: 'hüpfen',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_hüpfen.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/rutsche.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/seilbahn.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/hupfen.png', isCorrect: true
  }, {
    value: '../../../../assets/img/spielplatz/spielen.png', isCorrect: false
  }]
}]

export default spielplatz;