let unsorted = [3, 55, 8, 16, 29, 91, 77, 53, 2352, 112, 2, 11, 5, 68];
let one = [1];

/* takes in an index, seperates numbers into new arrays by < or > and repeats until numbers have been sorted, unwinds by concatenating smaller arrays*/

function quickSort(arr){
  
  if(arr.length <= 1){
    return arr;
  } else {
    let pivot = arr.shift();
    let lessThan = [];
    let moreThan = [];
    let newArr = [];
    for (let i = 0; i <= arr.length-1; i++){
      if (arr[i] < pivot){
        lessThan.push(arr[i]);
      } else {
        moreThan.push(arr[i]);
      }
    }
    return newArr.concat(quickSort(lessThan), pivot, quickSort(moreThan));
  }
};

let sortedArr = quickSort(unsorted);
console.log(sortedArr);
