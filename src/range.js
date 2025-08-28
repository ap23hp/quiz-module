//handles rendering/logic for range type questions
export function rangeQuestionModule(question) {
  const container = document.querySelector("#quiz-container");
  const questionBox = document.createElement("div");
  let isCorrect = null;

  // reusable divs
  const userAnswerDiv = document.createElement("div");
  const correctAnswerDiv = document.createElement("div");

  function renderOptions() {
    questionBox.classList.add("question-box");

    const questionText = document.createElement("p");
    questionText.textContent = question.description;

    const inputBox = document.createElement("input");
    inputBox.type = "number";
    inputBox.placeholder = `Enter a number between ${question.min} and ${question.max}`;

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    submitBtn.addEventListener("click", () => {
      const userAnswer = Number(inputBox.value);
      const correct = Number(question.correctAnswer);

      if (isNaN(userAnswer)) {
        userAnswerDiv.textContent = "❌ Please enter a valid number";
        isCorrect = false;
        return;
      }
        // range-only validation
        if (userAnswer >= question.min && userAnswer <= question.max) {
          userAnswerDiv.textContent = `✅ Your answer "${userAnswer}" is within the valid range`;
          isCorrect = true;
        } else {
          userAnswerDiv.textContent = `❌ Your answer "${userAnswer}" is out of range`;
          isCorrect = false;
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
    if (question.correctAnswer !== null) {
      correctAnswerDiv.textContent = `This is the correct answer: ${question.correctAnswer}`;
    } else {
      correctAnswerDiv.textContent = `Valid range: ${question.min} - ${question.max}`;
    }
    console.log("Correct answer or range:", question.correctAnswer ?? `${question.min}-${question.max}`);
  }

  return {
    renderOptions,
    getUserInput,
    getAnswer,
  };
}
