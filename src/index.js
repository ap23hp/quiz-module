import { booleanQuestionModule } from "./boolean";
import { multiplechoicequestionModule } from "./multipleChoice";
import { textQuestionModule } from "./text";
import { rangeQuestionModule } from "./range";
import { scoreModule } from "./score";
const questions = [
  {
    type: "boolean",
    description: "Is this video useful?",
    correctAnswer: true,
  },
  {
    type: "multipleChoice",
    description: "Which language is primarily used for web development?",
    options: ["JavaScript", "Python", "Java", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    type: "text",
    description: "What is your name?",
    correctAnswer: null,
  },
  {
    type: "range",
    description: "What is the speed limit in your city?",
    min: 30,
    max: 70,
    correctAnswer: null,
  },
  {
    type: "boolean",
    description: "Do you like programming?",
    correctAnswer: true,
  },
  {
    type: "boolean",
    description: "Is the sky green?",
    correctAnswer: false,
  },
  {
    type: "boolean",
    description: "Does 2 + 2 equal 4?",
    correctAnswer: true,
  },
  {
    type: "boolean",
    description: "Is JavaScript a typed language?",
    correctAnswer: false,
  },
  {
    type: "boolean",
    description: "Do cats bark?",
    correctAnswer: false,
  },

  {
    type: "multipleChoice",
    description: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    type: "multipleChoice",
    description: "Which language runs in a web browser?",
    options: ["C++", "Python", "JavaScript", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    type: "multipleChoice",
    description: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: "Pacific",
  },
];
const scoreM = scoreModule();
export function getQuestions(arr) {
  arr.forEach((q) => {
    if (q.type === "boolean") {
      const questionModule = booleanQuestionModule(q);
      questionModule.renderOptions();
      const isCorrect = questionModule.getUserInput();
      scoreM.incrementScore(isCorrect); // pass the boolean
           questionModule.getAnswer();
    }
    if (q.type === "multipleChoice") {
      const questionModule = multiplechoicequestionModule(q);
      questionModule.renderOptions();
      const isCorrect = questionModule.getUserInput();
      scoreM.incrementScore(isCorrect); // pass the boolean
        questionModule.getAnswer();
    }
    if (q.type === "text") {
      const questionModule = textQuestionModule(q);
      questionModule.renderOptions();
      const isCorrect = questionModule.getUserInput();
      scoreM.incrementScore(isCorrect); // pass the boolean
    }
    if (q.type === "range") {
      const questionModule = rangeQuestionModule(q);
      questionModule.renderOptions();
      const isCorrect = questionModule.getUserInput();
      scoreM.incrementScore(isCorrect); // pass the boolean
    }
  });
}
getQuestions(questions);
scoreM.showScore()
