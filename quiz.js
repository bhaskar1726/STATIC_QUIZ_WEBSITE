const quizData = [
    { 
        question : 'How old is Bhaskar Mishra?',
        a: '10',
        b: '21',
        c: '26',
        d: '11',
        correct: 'b'
    }, {
        question: 'What is most used programming language in 2020?',
        a: 'Java',
        b: 'Python',
        c: 'c++',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'What is the full form of CSS?',
        a: 'Casceding style sheet',
        b: 'Casting style sheet',
        c: 'Cascet styling sheet',
        d: 'Cast styling sheet',
        correct: 'a'
    }, {
        question: 'What is the full form of HTML?',
        a: 'HYPER TEXT MAKEUP LANGUAGE',
        b: 'HYPER TEXTING MARKUP LANGUAGE',
        c: 'HYPER TEXT MARKUP LANGUAGE',
        d: 'HYPE TEST MAKING LANGUAGE',
        correct: 'a'
    }, {
        question: 'When did BCET established?',
        a: '2000',
        b: '2004',
        c: '1999',
        d: '2001',
        correct: 'd'
    }, 

]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

//     currentQuiz++;
 }

 function getSelected(){
     
        let answer = undefined;

     answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
     });

     return answer;

 }

 function deselectAnswers(){
     answerEls.forEach((answerEl) =>{ 
     answerEl.checked = false;
     });
 }

  submitBtn.addEventListener("click", () =>{

    const answer = getSelected();

    if(answer){
        if(answer == quizData[currentQuiz].correct){
            score++;
        }
        
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
                quiz.innerHTML =  `<h2> You answered correctly at ${score} / ${quizData.length} questions</h2>

                <button onclick = "location.reload()">Reload</button>`;
        }
    }
    
     
     
  });