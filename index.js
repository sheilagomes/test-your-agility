var pushed = false;
var targetInt;
var spinningElem = document.getElementById('spinning');

document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

function buttonPressed(){
    pushed = true;
}

function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101);
    targetElem.innerHTML = targetInt;
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const spin = async () => {
    for (var i = 0; i <= 100; i++) {
        if (pushed) {
            stop(i-1);
            break;
        } else {
            await sleep(75);
        }
        spinningElem.innerHTML = i;
    }
}

function stop(i){
    var result = document.getElementById('result');
    if (i == targetInt) {
        result.innerHTML = "You nailed it!";
    } else {
        result.innerHTML = `Sorry, you were off by ${Math.abs(targetInt-i)}`;
    }
}

function play(){
    setTargetInt();
    spin();
}

play();