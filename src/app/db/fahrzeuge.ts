import { Question } from "../models/question.interface";

const fahrzeuge: Question[] = [{
  value: 'anhänger',
  url: '../../../../assets/audio/fahrzeuge/pronunciation_de_anhänger.mp3', answersList: [{ value: '../../../../assets/img/fahrzeuge/anhänger.png', isCorrect: true }, { value: '../../../../assets/img/fahrzeuge/boot.jpg', isCorrect: false }, {
    value: '../../../../assets/img/fahrzeuge/fahrrad.png', isCorrect: false
  }, {
    value: '../../../../assets/img/fahrzeuge/flugzeug.jpg', isCorrect: false
  }]
}, {
  value: 'boot',
  url: '../../../../assets/audio/fahrzeuge/pronunciation_de_boot.mp3', answersList: [{ value: '../../../../assets/img/fahrzeuge/anhänger.png', isCorrect: false }, { value: '../../../../assets/img/fahrzeuge/boot.jpg', isCorrect: true }, {
    value: '../../../../assets/img/fahrzeuge/fahrrad.png', isCorrect: false
  }, {
    value: '../../../../assets/img/fahrzeuge/flugzeug.jpg', isCorrect: false
  }]
}, {
  value: 'fahrrad',
  url: '../../../../assets/audio/fahrzeuge/pronunciation_de_fahrrad.mp3', answersList: [{ value: '../../../../assets/img/fahrzeuge/fähre.jpg', isCorrect: false }, { value: '../../../../assets/img/fahrzeuge/boot.jpg', isCorrect: false }, {
    value: '../../../../assets/img/fahrzeuge/fahrrad.png', isCorrect: true
  }, {
    value: '../../../../assets/img/fahrzeuge/flugzeug.jpg', isCorrect: false
  }]
}, {
  value: 'auto',
  url: '../../../../assets/audio/fahrzeuge/pronunciation_de_auto.mp3', answersList: [{ value: '../../../../assets/img/fahrzeuge/auto.png', isCorrect: true }, { value: '../../../../assets/img/fahrzeuge/boot.jpg', isCorrect: false }, {
    value: '../../../../assets/img/fahrzeuge/krankenwagen.png', isCorrect: false
  }, {
    value: '../../../../assets/img/fahrzeuge/flugzeug.jpg', isCorrect: false
  }]
}, {
  value: 'bagger',
  url: '../../../../assets/audio/fahrzeuge/pronunciation_de_bagger.mp3', answersList: [{ value: '../../../../assets/img/fahrzeuge/auto.png', isCorrect: false }, { value: '../../../../assets/img/fahrzeuge/boot.jpg', isCorrect: false }, {
    value: '../../../../assets/img/fahrzeuge/bagger.png', isCorrect: true
  }, {
    value: '../../../../assets/img/fahrzeuge/krankenwagen.png', isCorrect: false
  }]
}, {
  value: 'laufrad',
  url: '../../../../assets/audio/fahrzeuge/pronunciation_de_laufrad.mp3', answersList: [{ value: '../../../../assets/img/fahrzeuge/u-bahn.jpg', isCorrect: false }, { value: '../../../../assets/img/fahrzeuge/boot.jpg', isCorrect: false }, {
    value: '../../../../assets/img/fahrzeuge/bagger.png', isCorrect: false
  }, {
    value: '../../../../assets/img/fahrzeuge/laufrad.png', isCorrect: true
  }]
}, {
  value: 'u-bahn',
  url: '../../../../assets/audio/fahrzeuge/pronunciation_de_u-bahn.mp3', answersList: [{ value: '../../../../assets/img/fahrzeuge/u-bahn.jpg', isCorrect: true }, { value: '../../../../assets/img/fahrzeuge/boot.jpg', isCorrect: false }, {
    value: '../../../../assets/img/fahrzeuge/bagger.png', isCorrect: false
  }, {
    value: '../../../../assets/img/fahrzeuge/laufrad.png', isCorrect: false
  }]
}, {
  value: 'fähre',
  url: '../../../../assets/audio/fahrzeuge/pronunciation_de_fähre.mp3', answersList: [{ value: '../../../../assets/img/fahrzeuge/u-bahn.jpg', isCorrect: false }, { value: '../../../../assets/img/fahrzeuge/fahrrad.png', isCorrect: false }, {
    value: '../../../../assets/img/fahrzeuge/fähre.jpg', isCorrect: true
  }, {
    value: '../../../../assets/img/fahrzeuge/laufrad.png', isCorrect: false
  }]
}];

export default fahrzeuge;