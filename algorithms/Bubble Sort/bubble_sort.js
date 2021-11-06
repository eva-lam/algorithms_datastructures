const input = [65,34,32,1,78,45]; 
function bubbleSort(inputArr){
  //Step 1: iterate each elemnt in array 
  for(i=0; i<inputArr.length; i++){
    firstValue = inputArr[i];
    console.log('before second loop', {inputArr})
    //Step 2: compare it with neighbouring element
    for (j = 0; j <inputArr.length; j++){
      if(inputArr[j] > inputArr[j+1] ){
        //Step 3: do a swap 
        let tmp = inputArr[j]; 
        inputArr[j] = inputArr[j+1];
        inputArr[j+1] = tmp;
        console.log('after swapping',{inputArr});
      }
    }
    console.log('finish second loop-------') 
  }
  return inputArr;
}

console.log(bubbleSort(input)); 