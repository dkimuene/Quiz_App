function init() {
    const quizData = [
        {
            question: "Who was the first American woman in space?",
            a: "Judith Resnik",
            b: "Valentina Tereshkova",
            c: "Sally Ride",
            d: "Svetlana Savitskaya",
            correct: 'c'
        },
        {
            question: "(5 + 3)/2 * 10 = ? ",
            a: "40",
            b: "45",
            c: "3/4",
            d: "20",
            correct: 'a'
        },
        {
            
            question: "What is the minimum crew size for the ISS? ",
            a: "5",
            b: "3",
            c: "7",
            d: "12",
            correct: 'b'
        },
        {
            question: "Who is in charge of the executive branch?",
            a: "The Speaker of the House",
            b: "The Prime Minister",
            c: "The President",
            d: "The Chief Justice",
            correct: "c"
    
        },
        {
            question: "We elect a U.S. Senator for how many years?",
            a: "10",
            b: "4",
            c: "2",
            d: "6",
            correct:"d"
        }
    ];
    
    const questionElement = document.getElementById('question')
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById('submit');
    
    let currentQuestion = 0;
    
    loadQuiz();
    
    function loadQuiz(){
        const currentQuizData = quizData[currentQuestion];
      
        questionElement.innerText = currentQuizData.question;
    
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
     
    }
    submitBtn.addEventListener("click", () => {
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        } else {
            alert('You are finish')
        }
    })
    
}
window.addEventListener("load", init)

