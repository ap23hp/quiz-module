
export function rangeQuestionModule(question){

     function renderOptions(){
        console.log(question.description); // <-- show the question text
console.log(`minimum range : ${question.min} __________________`)
   console.log(`maximumrange : ${question.max}_______________`)
     }
       return {
        renderOptions,
      
    };
}