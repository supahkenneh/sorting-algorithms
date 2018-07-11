let unsorted = [3, 5, 8, 2, 4, 1, 7, 10, 9];

//quicksort is sorting on the way down to recursion

function quickSort(arr) {
  if (arr.length <= 1){
    return arr;
  }

  let pivot = arr.pop();

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] <= pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

let sorted = quickSort(unsorted);
console.log(sorted);