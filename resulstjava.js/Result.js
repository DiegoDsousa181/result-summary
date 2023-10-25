let resultContanier = document.querySelector('.result-componet');
let stateRange = document.getElementById('state-range');
let statusRandom = document.getElementById('status');
let reaction = document.getElementById('Reaction');
let paraGraph = document.getElementById('result-componet-paragraph');
let numbersContanier = document.getElementById('numbers-contanier');
let memory = document.getElementById('memory');
let Verbal = document.getElementById('Verbal');
let Visual = document.getElementById('Visual');
let button = document.querySelector('.button');

window.addEventListener('load', randomValues);

buttonContinue.addEventListener('click', randomValues);

function randomValues() {
   let values = [] ;
   for (let i = 1; i <= 4; i++){
    randomNumbers = Math.round(Math.random()*100);
    values.push(randomNumbers);
   }

   values.forEach((element, index) =>{
    switch(index) {
        case 0:
            reaction.innerTex = element + ' /100';
            break;
        case 1:
            reaction.innerTex = element + ' /100';
            break;
        case 2:
            reaction.innerTex = element + ' /100';
            break;
        case 3:
            memory.innerTex = element + ' /100';
            break;
            default :
            'Error';
        }
   });
 
    const media = values.reduce((valuePrevious, currentValue) => {
        return valuePrevious + currentValue;
    });
    
    let result = Math.round(media / 4);

    if (result >= 75){
        resultContanier.classList.add ('result-componet');
        numbersContanier.classList.add('numbers-contanier');
        resultContanier.classList.remove('result-componet-warning', 'result-componet-danger');
        numbersContanier.classList.remove('numbers-wraning', 'numbers-danger');
        stateRange.innerText = result;
        statusRandom.innerText = 'Great';
        paraGraph.innerText = "You score higher than 65% of the people who have taken these test";
    }
    if (result <= 74 && result > 43){
        resultContanier.classList.add ('result-componet');
        numbersContanier.classList.add('numbers-warning');
        resultContanier.classList.remove('result-componet', 'result-componet-danger');
        numbersContanier.classList.remove('numbers-wraning', 'numbers-danger');
        stateRange.innerText = result;
        statusRandom.innerText = 'Warning';
        paraGraph.innerText = "You score lower than 81% of the people who have taken these test";
    } 

    if (result <= 43){
        resultContanier.classList.add ('result-componet-danger');
        numbersContanier.classList.add('numbers-danger');
        resultContanier.classList.remove('result-componet-warning', 'result-componet');
        numbersContanier.classList.remove('numbers', 'numbers-warning');
        stateRange.innerText = result;
        statusRandom.innerText = 'Danger';
        paraGraph.innerText = "You score lower than 43% of the people who have taken these test";
        }

}