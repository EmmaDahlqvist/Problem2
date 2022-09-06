var ps = require("prompt-sync");
var prompt = ps();

//problem 2:
console.log("Skriv in lite nummer:");
const array = [];
for(let i = 0; i < 5; i++){
    let input = prompt();
    array.push(input); //lägg till i array
}

let temp;
for(let i = 0; i < array.length-1; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[j] < array[i]){
            console.log("upptäckt, arrayi= " + array[i] + " arrauj = " + array[j]);
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

//skriv ut array
console.log("Sorterad lista: ");
array.forEach(element => console.log(element));