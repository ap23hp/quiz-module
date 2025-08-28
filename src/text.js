export function textQuestionModule(question) {
  let isCorrect = null;
  const container = document.querySelector("#quiz-container");
  const questionBox = document.createElement("div");
  const userAnswerDiv = document.createElement("div");
  const correctAnswerDiv = document.createElement("div");
  function renderOptions() {
    questionBox.classList.add("question-box");

    const questionText = document.createElement("p");
    questionText.textContent = question.description;

    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.placeholder = "Type your answer here";

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    submitBtn.addEventListener("click", () => {
      const userAnswer = inputBox.value.trim().toLowerCase();
     

      if (userAnswer) {
        userAnswerDiv.textContent = `✅ Your answer "${userAnswer}" is correct`;
        isCorrect = true;
      } 
    });

    questionBox.appendChild(questionText);
    questionBox.appendChild(inputBox);
    questionBox.appendChild(submitBtn);
    questionBox.appendChild(userAnswerDiv);
    questionBox.appendChild(correctAnswerDiv);
    container.appendChild(questionBox);
  }

  function getUserInput() {
    return isCorrect;
  }

  function getAnswer() {
    correctAnswerDiv.textContent = `This is the correct answer: ${question.correctAnswer}`;
    console.log(`this is the correct answer: ${question.correctAnswer}`);
  }

  return {
    renderOptions,
    getUserInput,
    getAnswer,
  };
}
