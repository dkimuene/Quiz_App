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
    const answerEls = document.querySelectorAll('.answer');
    const quiz = document.getElementById('quiz');

    
    let currentQuestion = 0;
    let answer = undefined;
    let score = 0;
    
    loadQuiz();
    
    function loadQuiz(){
        deselectAnswers();
        const currentQuizData = quizData[currentQuestion];
      
        questionElement.innerText = currentQuizData.question;
    
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
     
    }

    function getSelected(){
        answerEls.forEach(answerEl => {
            if(answerEl.checked){
                answer = answerEl.id
            }

        });
        return answer;
    }

    function deselectAnswers(){
        answerEls.forEach(answerEl => {
            answerEl.checked = false;
        });
    }

    submitBtn.addEventListener("click", () => {
        
        let answer = getSelected();
        if(answer){
            if (answer === quizData[currentQuestion].correct){
                score++;
            }
            currentQuestion++;
            if(currentQuestion < quizData.length){
                loadQuiz();
            } else {
                quiz.innerHTML = 
                `<h2> You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>`
            }
        }
    })
    
}
window.addEventListener("load", init)

