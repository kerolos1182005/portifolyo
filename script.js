
const incrementBtn = document.getElementById("incerement");
const decrementBtn = document.getElementById("decerement");
const resetBtn = document.getElementById("reset");
const counterDisplay = document.getElementById("count_label");
let counter = counterDisplay.innerHTML;
counter= Number(counter);
incrementBtn.onclick = function() {
    if(counter<20){counter++;
    counterDisplay.innerHTML = counter;}
    else{
        counterDisplay.innerHTML = "counter is maxed out";
    }
    
}
decrementBtn.onclick = function() {
    if(counter>-20)
    {
       counter--;
    counterDisplay.textContent = counter; 
    }
    else{
        counterDisplay.innerHTML = "counter is minned out";
    }
    
}
resetBtn.onclick = function() {
    counter = 0;
    counterDisplay.textContent = counter;
}