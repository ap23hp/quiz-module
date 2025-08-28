export function multiplechoicequestionModule(question) {
        const container = document.querySelector("#quiz-container");
    const questionBox = document.createElement("div");
  let isCorrect = null;
  function renderOptions() {

    questionBox.classList.add("question-box");

    const questionText = document.createElement("p");
    questionText.textContent = question.description;

    const optionsDiv = document.createElement("div");
    const list = document.createElement("ol");
    const correctAnswerDiv = document.createElement("div");
    question.options.forEach((opt) => {
      const listItems = document.createElement("li");
      listItems.textContent = opt;
      list.appendChild(listItems);
      optionsDiv.appendChild(list);
      questionBox.appendChild(questionText);
      questionBox.appendChild(optionsDiv);
      container.appendChild(questionBox);

      listItems.addEventListener("click", function () {
        console.log("clicked");
        const userAnswer = String(listItems.textContent).toLowerCase();
        console.log(userAnswer, "user answer.......");
        const correct = String(question.correctAnswer).toLowerCase();
        console.log(correct, "corrrreeecttt");
    
        if (userAnswer === correct) {
          correctAnswerDiv.textContent = `✅ Your answer "${userAnswer}" is correct`;
          isCorrect = true;
        } else {
          correctAnswerDiv.textContent = `❌ Your answer "${userAnswer}" is wrong`;
          isCorrect = false;
        }
        questionBox.appendChild(correctAnswerDiv);
      });
    });
  //  question.options.forEach((ele, index) => {
     // console.log(`${index + 1} : ${ele}`);
  //  });
  }
  function getAnswer() {
        const correctAnswerDiv = document.createElement("div");
    let corrAns = question.correctAnswer;
    if(isCorrect!==null) correctAnswerDiv.textContent = `This is the correct answer :${corrAns}`;
    console.log(`this is the correct answer: ${question.correctAnswer}`);
    //console.log(`this is the correct answer: ${question.correctAnswer}`);
            questionBox.appendChild(correctAnswerDiv);
  }

  function getUserInput() {
        return isCorrect;
    // const answer = prompt("type your answer");
    // const userAnswer = String(answer || "").toLowerCase();
    // const correct = String(question.correctAnswer || "").toLowerCase();
    // if (userAnswer === correct) {
    //   console.log(`your answer ${answer} is correct `);
    //   return (isCorrect = true);
    // } else {
    //   console.log(`your answer ${answer} is wrong`);
    //   return (isCorrect = false);
    // }
  }
  return {
    renderOptions,
    getUserInput,
    getAnswer,
  };
}
