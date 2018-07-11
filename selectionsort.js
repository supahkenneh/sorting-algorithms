let unsorted = [3, 5, 8, 2, 4, 1, 7, 10, 9];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {                //Loop through array
    let smallestNum = i;                                //variable for i because you'll only want to look through values after i in second loop
    for (let j = i + 1; j < arr.length; j++) {          //loop through array starting from next value after minimum
      if (arr[smallestNum] > arr[j]) {                  //if smaller number is found, then set that to new smallest num
        smallestNum = j;
      }
    }
    if (smallestNum != i) {                             //After looping once (before i++), if the smallest num isn't at 0 (set at beginning of outer loop), do swap
      let temp = arr[i];
      arr[i] = arr[smallestNum]
      arr[smallestNum] = temp;
    }
  }
  return arr;
};

let sorted = selectionSort(unsorted);
console.log(sorted);