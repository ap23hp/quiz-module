//handles rendering/logic for boolean type questions.
export function booleanQuestionModule(question) {
    let isCorrect=false
  function renderOptions() {
    console.log(question.description); // <-- show the question text
    console.log("1. True");
    console.log("2. False");
  }

  function getAnswer() {
    console.log(`this is the correct answer: ${question.correctAnswer}`);
  }

  function getUserInput() {
    const answer = prompt("type your answer");
    const userAnswer = String(answer || "").toLowerCase();
    const correct = String(question.correctAnswer || "").toLowerCase();
    if (userAnswer === correct) {
      console.log(`your answer ${answer} is correct `);
      return isCorrect= true
    } else {
      console.log(`your answer ${answer} is wrong`);
      return isCorrect=false
    }
  }
  return {
    renderOptions,
    getUserInput,
    getAnswer,
  };
}
