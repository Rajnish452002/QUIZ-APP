

const quiz=[
    {
        question:"Q 1 : If the product of two positive integers is equal to the product of their HCF and LCM is true then, the HCF (32, 36) is _",
        a:"2",
        b:"4",
        c:"6",
        d:"8",
        ans:"ans3"
    },

  {  question:"Q 2 : 7 х 11 х 13 х 15 + 15 is a",
    a:"Prime number",
    b:"Composite number",
    c:"Neither prime nor composite",
    d:"None of the above",
    ans:"ans2"
},
{
question:"Q 3 : If p and q are positive integers such that p = ab² and q = a²b, where a, b are prime numbers, then the LCM (p, q) is",
a:"ab",
b:"a²b²",
c:"a³b²",
d:"a³b³",
ans:"ans2"
},
{
question:"Q 4 : 108 can be expressed as a product of its primes as",
a:" 2³ х 3²",
b:"2³ х 3³",
c:"12² х 3²",
d:"2² х 3³",
ans:"ans4"
},
{
question:"Q 5 : If the product of two positive integers is equal to the product of their HCF and LCM is true then, the LCM (850, 680) is",
a:"3100",
b:"3200",
c:"3300",
d:"3400",
ans:"ans4"
},


]

const question=document.querySelector('.question');
const option1=document.querySelector('#opt1');
const option2=document.querySelector('#opt2');
const option3=document.querySelector('#opt3');
const option4=document.querySelector('#opt4');
const submits=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscores=document.querySelector('#showscore');


let ques_count=0;
let score=0;

const loadquestion=()=>{

  const quedtionlist=quiz[ques_count]
  question.innerHTML=quedtionlist.question;

  opt1.innerText=quedtionlist.a;
  opt2.innerText=quedtionlist.b;
  opt3.innerText=quedtionlist.c;
  opt4.innerText=quedtionlist.d;

}


loadquestion();

const checkan=()=>{
  let Answer;

  Array.from(answers).forEach((curElem)=>{
 
    if(curElem.checked){
      Answer=curElem.id;

    }
     
  });
  return Answer;
  };
  

 const deselectAll=()=>{
      answers.forEach((curelem)=>curelem.checked=false);
    }


submits.addEventListener('click',()=>{
  const chans=checkan();
  console.log(chans);

  if(chans==quiz[ques_count].ans){
 
    score++;
  }
  ques_count++;
  deselectAll();
  if(ques_count<quiz.length){
    loadquestion();
  }
  else{
    showscores.innerHTML=`<h3>Your scored  ${score}/${quiz.length}  </h3>
    <button class='btn' onclick="location.reload()">Play Again </button>
    `;


    showscores.classList.remove('score');
    
    

  }
   

}
)








