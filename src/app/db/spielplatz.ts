import { Question } from "../models/question.interface";

const spielplatz: Question[] = [{
  value: 'ich_muss_aufs_klo',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_ich_muss_aufs_klo.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/ich_muss_aufs_klo.png', isCorrect: true }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/schaukel.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/spielen.png', isCorrect: false
  }]
}, {
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
}, {
  value: 'baumhaus',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_baumhaus.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/eimer.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/seilbahn.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/hupfen.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/baumhaus.png', isCorrect: true
  }]
}, {
  value: 'im sandkasten spielen',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_spielen_im_sandkasten..mp3', answersList: [{ value: '../../../../assets/img/spielplatz/eimer.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/fußball_spielen.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/die_kinder_spielen_im_sandkasten.png', isCorrect: true
  }, {
    value: '../../../../assets/img/spielplatz/baumhaus.png', isCorrect: false
  }]
}, {
  value: 'fußball spielen',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_fußball_spielen.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/eimer.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/fußball_spielen.png', isCorrect: true }, {
    value: '../../../../assets/img/spielplatz/die_kinder_spielen_im_sandkasten.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/mit_puppen_spielen.png', isCorrect: false
  }]
}, {
  value: 'schubsen',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_schubsen.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/ich_muss_aufs_klo.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/schubsen.png', isCorrect: true
  }, {
    value: '../../../../assets/img/spielplatz/spielen.png', isCorrect: false
  }]
}, {
  value: 'mit puppen spielen',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_mit_puppen_spielen.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/eimer.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/fußball_spielen.png', isCorrect: true }, {
    value: '../../../../assets/img/spielplatz/die_kinder_spielen_im_sandkasten.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/mit_puppen_spielen.png', isCorrect: true
  }]
}, {
  value: 'ich bin dran',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_bin_ich_jetzt_dran.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/bin_ich_jetzt_dran.png', isCorrect: true }, { value: '../../../../assets/img/spielplatz/fußball_spielen.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/seilbahn.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/mit_puppen_spielen.png', isCorrect: false
  }]
}, {
  value: 'eimer',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_eimer.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/bin_ich_jetzt_dran.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/schaufel.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/eimer.png', isCorrect: true
  }]
}, {
  value: 'schaufel',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_schaufel.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/schaufel.png', isCorrect: true }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/trampolin.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/eimer.png', isCorrect: false
  }]
}, {
  value: 'klettergerüst',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_klettergerüst.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/schaufel.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/klettergerüst.png', isCorrect: true
  }, {
    value: '../../../../assets/img/spielplatz/eimer.png', isCorrect: false
  }]
}, {
  value: 'sandkasten',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_sandkasten.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/schaufel.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/sandkasten.png', isCorrect: true }, {
    value: '../../../../assets/img/spielplatz/klettergerüst.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/eimer.png', isCorrect: false
  }]
}, {
  value: 'schaukel',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_schaukel.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/rutsche.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/schaukel.png', isCorrect: true
  }, {
    value: '../../../../assets/img/spielplatz/spielen.png', isCorrect: false
  }]
}, {
  value: 'seilbahn',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_seilbahn.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/rutsche.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/schaukel.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/seilbahn.png', isCorrect: true
  }]
}, {
  value: 'trampolin',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_trampolin.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/trampolin.png', isCorrect: true }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: false }, {
    value: '../../../../assets/img/spielplatz/schaukel.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/seilbahn.png', isCorrect: false
  }]
}, {
  value: 'wippe',
  url: '../../../../assets/audio/spielplatz/pronunciation_de_wippe.mp3', answersList: [{ value: '../../../../assets/img/spielplatz/trampolin.png', isCorrect: false }, { value: '../../../../assets/img/spielplatz/wippe.png', isCorrect: true }, {
    value: '../../../../assets/img/spielplatz/schaukel.png', isCorrect: false
  }, {
    value: '../../../../assets/img/spielplatz/seilbahn.png', isCorrect: false
  }]
}]

export default spielplatz;