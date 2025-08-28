//handles rendering/logic for boolean type questions.
export function booleanQuestionModule(question) {
        const container = document.querySelector("#quiz-container");
    const questionBox = document.createElement("div");
  let isCorrect = null;
      const userAnswerDiv = document.createElement("div");
      const correctAnswerDiv = document.createElement("div");

  function renderOptions() {
    let options = [true, false];
    //    console.log(question.description); // <-- show the question text

    questionBox.classList.add("question-box");

    const questionText = document.createElement("p");
    questionText.textContent = question.description;

    const optionsDiv = document.createElement("div");
    const list = document.createElement("ol");

    options.forEach((opt) => {
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
          userAnswerDiv.textContent = `✅ Your answer "${userAnswer}" is correct`;
          isCorrect = true;
        } else {
          userAnswerDiv.textContent = `❌ Your answer "${userAnswer}" is wrong`;
          isCorrect = false;
        }
        questionBox.appendChild(userAnswerDiv);
         questionBox.appendChild(correctAnswerDiv);
      });
    });

    //  console.log("1. True");
    //console.log("2. False");
  }



  function getUserInput() {
    return isCorrect;
    //console version
    // const answer = prompt("type your answer");
    // const userAnswer = String(answer || "").toLowerCase();
    // const correct = String(question.correctAnswer || "").toLowerCase();
    // if (userAnswer === correct) {
    //   console.log(`your answer ${answer} is correct `);
    //   return isCorrect= true
    // } else {
    //   console.log(`your answer ${answer} is wrong`);
    //   return isCorrect=false
    // }
  }
    function getAnswer() {

    let corrAns = question.correctAnswer;
    correctAnswerDiv.textContent = `This is the correct answer :${corrAns}`;
           
    console.log(`this is the correct answer: ${question.correctAnswer}`);
  }
  return {
    renderOptions,
    getUserInput,
    getAnswer,
  };
}
