
let displ="";
let currNum="";
let numSet = [];
let i=0;

function addNums(a){ //Number is added to display string (for whole comp), and current number just for the current number not including signs
    displ+=a;
    currNum+=a;
    document.getElementById("label").innerText=displ;
}
function addSign(a){ //numSet's next spot to be filled with current number string, sign is added to sign array, 
    numSet[i]=currNum;
    i++;
    numSet[i]=a;
    displ+=a; //Display string adds sign to it.
    currNum=""; //Current number is reset, as the end of the number is complete.
    i++; //Iterator goes up by one to get ready for next input into each array.
    document.getElementById("label").innerText=displ;
}
function resetNums(){ //resets the number on screen clearing arrays, and display string, and iterator for arrays.
    numSet = [];
    currNum="";
    displ="";
    i=0;
    document.getElementById("label").innerText="Enter Numbers.";
}
function reciprocal(){
    if(currNum!=""){
        displ=(1/parseFloat(currNum)).toString(); //Display string is set to sum as a string.
        document.getElementById("label").innerText=displ;
        numSet = []; //Arrays are reset 
        currNum=displ; //Number left is just the sum of all since end of calculation number is all that is needed now.
        i=0; //Iterators are reset for next calculation.
    }
}
function squared(){
    if(currNum!=""){
        displ=(parseFloat(currNum)*parseFloat(currNum)).toString(); //Display string is set to sum as a string.
        document.getElementById("label").innerText=displ;
        numSet = []; //Arrays are reset 
        currNum=displ; //Number left is just the sum of all since end of calculation number is all that is needed now.
        i=0; //Iterators are reset for next calculation.
    }
}
function compute(){
    numSet[i]=currNum; //Gets the last number before computation
    sum=parseFloat(numSet[0]); //sum is equal to the first value of numSet
    for(let j = 1; j<numSet.length;j+=2){
        if(numSet[j]===undefined){
            break;
        }
        
        if(numSet[j]==="+"){
            sum+=parseFloat(numSet[j+1]); //Ex. [1, +, 2], sum=1, and j=1, if numSet[1]= "+", then sum = 1 + numSet[1+1](2)
        }                               //Index: 0  1  2
        else if(numSet[j]==="-"){ 
            sum-=parseFloat(numSet[j+1]);
        }
        else if(numSet[j]==="*"){
            sum*=parseFloat(numSet[j+1]);
        }
        else if(numSet[j]==="/"){
            sum/=parseFloat(numSet[j+1]); //Ex. [1 + 2], sum=1, and j=0, if sign[0]= "+", then sum = 1 + numSet[0+1](2)
        }
    }
    if(currNum!=""){
        displ=sum.toString(); //Display string is set to sum as a string.
        document.getElementById("label").innerText=displ;
        numSet = []; //Arrays are reset 
        currNum=displ; //Number left is just the sum of all since end of calculation number is all that is needed now.
        i=0; //Iterators are reset for next calculation.
    } 
}