
export function textQuestionModule(question){

     function renderOptions(){
        console.log(question.description); // <-- show the question text
        console.log("your answer ____________________");
       
     }
       return {
        renderOptions,
      
    };
}