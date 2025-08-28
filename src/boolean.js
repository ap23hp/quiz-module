
//handles rendering/logic for boolean type questions.
export function booleanQuestionModule(question){

     function renderOptions(){
        console.log(question.description); // <-- show the question text
        console.log("1. True");
        console.log("2. False");
     }
       return {
        renderOptions,
      
    };
}