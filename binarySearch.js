const binarySearch = (sortedArray, target) => {
  let start = 0;
  let end = sortedArray.length - 1;
  
  while (start <= end) {
    const middle = start + Math.trunc((end - start) / 2);

    if (sortedArray[middle] === target) {
      return middle;
    }

    if (sortedArray[middle] < target) {
      start = middle + 1;
    } else if (sortedArray[middle] > target) {
      end = middle - 1;
    }
  }

  return -1;
}

export default binarySearch;

binarySearch([1,2,3,4,5,6,7,8,9,10], 7)
