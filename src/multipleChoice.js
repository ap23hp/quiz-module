export function multiplechoicequestionModule(question) {
  let isCorrect = false;
  function renderOptions() {
    console.log(question.description); // <-- show the question text
    question.options.forEach((ele, index) => {
      console.log(`${index + 1} : ${ele}`);
    });
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
      return (isCorrect = true);
    } else {
      console.log(`your answer ${answer} is wrong`);
      return (isCorrect = false);
    }
  }
  return {
    renderOptions,
    getUserInput,
    getAnswer,
  };
}
