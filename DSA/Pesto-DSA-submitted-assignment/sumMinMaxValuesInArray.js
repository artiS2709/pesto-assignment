/**
 * @param {number[]} arr
 * @return {number}
 */
// Brute Force Approch
function findSumOfMaxAndMin(arr) {
  // PLACEHOLDER_JAVASCRIPT_FIND_SUM_OF_MAX_AND_MIN_BODY
  
  let max = arr[0];
  let min = arr[0];
  for(let i=0;i<=arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return min + max;
}


