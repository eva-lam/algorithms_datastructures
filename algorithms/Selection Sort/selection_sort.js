const array = [50, 44, 21, 32, 67, 23]
function selectionSort(inputArr){
  //step 1: scan from left to right 
  for(i=0; i<inputArr.length-1; i++) {
     //find the smallest number 
     let minIndex = i; 
    //-1 because the last index we don't have to compare
     for(scanIndex=i+1; scanIndex<inputArr.length;scanIndex++){
       if(inputArr[scanIndex]<inputArr[minIndex]){
         minIndex = scanIndex;
       }
     }
     //Step 2: swap the value after smallest value was found
     //only do the swapping if index is not the same
     if(minIndex != i){
       let valueToBeCompared = inputArr[minIndex];
       inputArr[minIndex] = inputArr[i]; 
       inputArr[i] = valueToBeCompared;
     }   
  }
  return inputArr

  

}
console.log(selectionSort(array));