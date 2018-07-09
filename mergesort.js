let unsorted = [3, 5, 8, 2, 4, 1, 7, 10, 9];
let one = [1];
let test = [1, 2, 3];
let test2 = [1, 4, 3];

/* Takes an array, breaks up into single digits, compares arr[0] of each small array and pushes into new array */

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let midpoint = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, midpoint);
  let rightArray = arr.slice(midpoint);


  let newLeft = mergeSort(leftArray);
  let newRight = mergeSort(rightArray);


  let sortedArr = [];

  while (newLeft.length > 0 || newRight.length > 0) {
    if (newLeft[0] < newRight[0] || newRight[0] === undefined) {
      sortedArr.push(newLeft.shift());
    } else {
      sortedArr.push(newRight.shift());
    }
  }

  return sortedArr;
}

console.log(mergeSort(unsorted));