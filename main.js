//VARIAVIES
const btnStart = document.querySelector('#start');
const btnReset = document.querySelector('#reset');
const screenOne = document.querySelector('.screen1');
const screenTwo = document.querySelector('.screen2');
const main      = document.querySelector('main');
let inputNumber = document.querySelector("#number");
let randomNumber = Math.round(Math.random() * 10);
let tentativa   = 1;

function handleClick(e){
    e.preventDefault()
    if(Number(inputNumber.value == '') || Number(inputNumber.value) > 10){
        alert('NÃO VAI PODER JOGAR AINDA OU O CAMPO ESTA VAZIO OU E MAIOR QUE 10');
    }else{
        if(Number(inputNumber.value) == randomNumber){
            toogleScreen();
            screenTwo.querySelector('h2').innerText = `Acertou em ${tentativa} tentativas`;
        }else{
            inputNumber.value = '';
            inputNumber.focus()
        }
        inputNumber.value = '';
        tentativa++;

        
    }
}
function resetClick(){
    toogleScreen();
    inputNumber.focus();
    tentativa   = 1;
    randomNumber = Math.round(Math.random() * 10);
}
function toogleScreen(){
    screenOne.classList.toggle('hide');
    screenTwo.classList.toggle('hide');

}
btnStart.addEventListener('click', handleClick)
btnReset.addEventListener('click', resetClick)
