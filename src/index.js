
import { booleanQuestionModule } from "./boolean";
import { multiplechoicequestionModule } from "./multipleChoice";
import { textQuestionModule } from "./text";
import { rangeQuestionModule } from "./range";
const questions = [
  {
    type: "boolean",
    description: "Is this video useful?"
  },
  {
    type: "multipleChoice",
    description: "What is your favorite language?",
    options: ["JavaScript", "Python", "Java", "C++"]
  },
  {
    type: "text",
    description: "What is your name?"
  },
  {
    type: "range",
    description: "What is the speed limit in your city?",
    min: 30,
    max: 70
  }
];

function getQuestions(arr){
  arr.map((q)=>{
    if(q.type==="boolean") {
const questionModule=booleanQuestionModule(q)
questionModule.renderOptions()
    }
    if(q.type==="multipleChoice") {
const questionModule=multiplechoicequestionModule(q)
questionModule.renderOptions()
    }
    if(q.type==="multipleChoice") {
const questionModule=textQuestionModule(q)
questionModule.renderOptions()
    }
         if(q.type==="multipleChoice") {
const questionModule=rangeQuestionModule(q)
questionModule.renderOptions()
    }   
    })
}
getQuestions(questions)