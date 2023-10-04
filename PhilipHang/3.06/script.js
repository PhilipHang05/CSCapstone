var p = document.querySelector("#changeme");

p.innerHTML = "text";
p.style.background = "blue";
p.style.color = "red";
p.textAlign = "center";

function changeColor()
{

    this.style.background = 'green';
}

p.onclick = changeColor;

var currentMargin = 0;
function nextFrame(){
    currentMargin++;
    p.style.margin = currentMargin + 'px';
}

var animation;

function play()
{
   animation = setInterval(nextFrame,50);
}
play();
document.querySelector("#play").onclick = play;
function stop()
{
    currentMargin = 0;
    p.style.margin = "0px";
    clearInterval(animation);
}

document.querySelector("#stop").onclick = stop;