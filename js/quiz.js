const quizData = [
    {
        question: "Quelle est la capitale de la France?",
        a: "Marseille",
        b: "Toulouse",
        c: "Paris",
        d: "Rennes",
        response: "c",
    },
    {
        question: "Quelle est la couleur du cheval blanc d'Henry IV?",
        a: "Blanc",
        b: "Noir",
        c: "Marron",
        d: "Gris",
        response: "a",
    },
    {
        question: "Quelle est la capitale des USA?",
        a: "New York",
        b: "Washington",
        c: "San Fransisco",
        d: "Los Angeles",
        response: "b",
    },
    {
        question: "Quelles sont les couleurs du drapeau de l'Arménie?",
        a: "bleu, blanc rouge",
        b: "vert, jaune, noir",
        c: "bleu, rouge, blanc",
        d: "rouge, bleu, jaune",
        response: "d",
    },
];

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answersElement = document.querySelectorAll(".answer");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  question.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersElement.forEach((answers) => {
    if (answers.checked) {
      answer = answers.id;
    }
  });

  return answer;
}

function desabledChecked() {
  answersElement.forEach((answers) => {
    answers.checked = false;
  });
}

btn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer === quizData[currentQuiz].response) {
    score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    desabledChecked();
    loadQuiz();
  } else {
    quiz.innerHTML = `
            <h2>Vous avez terminer le quiz</h2>
            <p class="result">Vous avez eu ${
              score < 2 ? score + " bonne reponse" : score + " bonnes reponses"
            } sur ${quizData.length}</p>
            <button onclick=location.reload()>Rafraichir la page</button>
        `;
  }
});