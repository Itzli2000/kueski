var main = "923857614";
var myArray = Array.from(main);
var numArray = myArray.map(function(item) {
    return parseInt(item, 10);
});
console.log(numArray);
var i = 0;
var j= 1;
var totalTime = 0;

count(numArray);


function count(array){
  if (array[i] === 1 && array[j] ===  6|| array[j] === 4|| array[j] === 5|| array[j] === 8|| array[j] === 7) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] === 2 && array[j] ===  9|| array[j] === 4|| array[j] === 5|| array[j] === 8|| array[j] === 7) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] === 3 && array[j] === 5|| array[j] === 2|| array[j] === 7) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] === 4 && array[j] === 5|| array[j] === 1|| array[j] === 7) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] === 5) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] === 6 && array[j] === 5|| array[j] === 1|| array[j] === 8) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] === 7 && array[j] === 1|| array[j] === 2|| array[j] === 3|| array[j] === 4|| array[j] === 5) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] === 8 && array[j] === 5|| array[j] === 1|| array[j] === 2|| array[j] === 6|| array[j] === 9) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] === 9 && array[j] === 5|| array[j] === 2|| array[j] === 8) {
    totalTime = totalTime + 1;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else if (array[i] != null) {
    totalTime = totalTime + 2;
    i = i+1;
    j = j+1;
    console.log(totalTime);
    count(array);
  }
  else {
    totalTime = parseInt(totalTime);
    console.log(totalTime);
    return totalTime;
  }
}