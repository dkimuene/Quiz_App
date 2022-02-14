function init() {
    
    const quizData = [
        {
            question: "Who was the first American woman in space?",
            a: "Judith Resnik",
            b: "Valentina Tereshkova",
            c: "Sally Ride",
            d: "Svetlana Savitskaya",
            correct: 'c'
        },{
            question: "(5 + 3)/2 * 10 = ? ",
            a: "40",
            b: "45",
            c: "3/4",
            d: "20",
            correct: 'a'
        },{
            
            question: "What is the minimum crew size for the ISS? ",
            a: "5",
            b: "3",
            c: "7",
            d: "12",
            correct: 'b'
        },{
            question: "Who is in charge of the executive branch?",
            a: "The Speaker of the House",
            b: "The Prime Minister",
            c: "The President",
            d: "The Chief Justice",
            correct: "c"

        },{
            question: "We elect a U.S. Senator for how many years?",
            a: "10",
            b: "4",
            c: "2",
            d: "6",
            correct:"d"
        }
    ]
}

window.addEventListener("load", init)

// const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let quizData = [];
let correctAnswers = [];
let candidateAnswers = [];


// function askForName() {
//   // TODO 1.1b: Ask for candidate's name //
//    return candidateName = input.question('What is your name?:  ');
// }

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  console.log("Lets begin the Quiz.\n ")
  for (let i = 0; i < questions.length; i++){
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer)
  }

}
// function gradeQuiz(candidateAnswers) {

//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//   let correctCandidateAnswers = 0
//   console.log("\n" + 'Candidate Name: ' + candidateName + "\n");
//   for (let i = 0; i < candidateAnswers.length; i++){
//     count = i+1;
//     console.log(`${count}) ${questions[i]}\n Your Answer: ${candidateAnswers[i]}\n Correct Answer: ${correctAnswers[i]}\n`);
//     if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
//       correctCandidateAnswers += 1 ;
//       }
//     }
  


//   let grade;
  

//   return grade;
// }

// function runProgram() {
//   askForName();
//   // TODO 1.1c: Ask for candidate's name //
//   console.log("Hello " + candidateName + ', nice to meet you.');
  
//   askQuestion();
//   gradeQuiz(this.candidateAnswers);
// }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
// module.exports = {
//   candidateName: candidateName,
//   questions: questions,
//   correctAnswers: correctAnswers,
//   candidateAnswers: candidateAnswers,
//   gradeQuiz: gradeQuiz,
//   runProgram: runProgram
// };