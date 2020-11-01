var count=0;
//disabling decrement key for count==0.
document.getElementById("decrement").disabled = true;
document.getElementById("decrement").style.backgroundColor = "#FFFF00";
document.getElementById("decrement").style.boxShadow = "0 9px #260d0d";
function increment(){ //Activating decrement key for count>0.
    document.getElementById("decrement").disabled = false;
    document.getElementById("decrement").style.backgroundColor = "##ff0066";
    document.getElementById("decrement").style.boxShadow = "0 9px #999";
    //increasing count value
    count += 1;
    document.getElementById("counter").innerHTML = count;
}
function decrement(){
    //check if count==0 then disable decrement button if not decrease the count value.
    if (count == 0) {
        document.getElementById("decrement").disabled = true;
        document.getElementById("decrement").style.backgroundColor = "#FFF00";
        document.getElementById("decrement").style.boxShadow = " 0 9px #260d0d";

    } else {
        count -= 1;
        document.getElementById("counter").innerHTML = count;
        document.getElementById("decrement").style.backgroundColor = " #ff0066";
        document.getElementById("decrement").style.boxShadow = " 0 9px #999";
    }

    // for last time when count value goes to zero after decrementing, disabling the decrement key

    if (count == 0) {
        document.getElementById("decrement").disabled = true;
        document.getElementById("decrement").style.backgroundColor = "#FFF00";
        document.getElementById("decrement").style.boxShadow = " 0 9px #260d0d";

    }
}