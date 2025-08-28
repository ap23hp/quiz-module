
export function textQuestionModule(question){
let isCorrect=false
     function renderOptions(){
        console.log(question.description); // <-- show the question text
        console.log("your answer ____________________");
       
     }
  
       function getUserInput() {
    const answer = prompt("type your answer");
       let userAnswer = String(answer || "").toLowerCase();
      console.log(`your answer ${userAnswer} is correct `);
      return isCorrect=true
  
  }
       return {
        renderOptions,
        getUserInput,
    
    };
}