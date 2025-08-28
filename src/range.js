
export function rangeQuestionModule(question){
let isCorrect=false
     function renderOptions(){
        console.log(question.description); // <-- show the question text
console.log(`choose a number between  ${question.min} and  ${question.max}`)
     }
    
       function getUserInput() {
    const answer = prompt("type your answer");
      let  userAnswer = Number(answer);
      console.log(`your answer ${userAnswer} is correct `);
      return isCorrect=true
  
  }
       return {
        renderOptions,
        getUserInput,
    
    };
    
}