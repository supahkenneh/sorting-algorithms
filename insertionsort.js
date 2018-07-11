let unsorted = [3, 5, 8, 2, 4, 1, 7, 10, 9];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[i] < arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

let sorted = insertionSort(unsorted);