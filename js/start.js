const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = qnaList.length;
const scores = [0, 0, 0];


console.log(endPoint);

/*
function calResult(){
  console.log(scores);
  var result = select.indexOf(Math.max(...select));
  return result;
}
*/

function setResult(){
  let sense = (scores[0]/20)*100;
  let view = (scores[1]/24)*100;
  let create = (scores[2]/20)*100;
  let total = Math.round((sense+view+create)/3);

  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[0].name;

  /*
  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + 0 + '.png';
  resultImg.src = imgURL;
  resultImg.alt = 0;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[0].desc;
  */

  //Put Chart Instead
  const imgDiv = document.querySelector('#resultImg');
  // Create a new canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'myChart';

  // Append the new canvas to the body (or another container element)
  imgDiv.appendChild(canvas);

  // Get the context of the newly created canvas
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
      type: 'polarArea',
      data: {
          labels: ['감각', '감상', '창작'],
          datasets: [{
              //label: 'score',
              data: [sense, view, create],
              //borderWidth: 1
          }]
      },
      options: {
        scales: {
            r: {
                suggestedMax: 100,
            }
        }
    }
  });

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = '총점: ' + total +'점!';
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].q.type;
      var weight = qnaList[qIdx].a[idx].weight;
      for(let i = 0; i < target.length; i++){
        scores[target[i]] += weight;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q.question;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
  console.log(scores);
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
