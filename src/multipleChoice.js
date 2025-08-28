
export function multiplechoicequestionModule(question){
     function renderOptions(){
        console.log(question.description); // <-- show the question text
    question.options.forEach((ele,index)=>{
console.log(`${index+1} : ${ele}`)
    })
     }
       return {
        renderOptions,
      
    };
}