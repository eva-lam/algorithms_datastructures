function InsertionSort(inputArr){
    //step 1: iterate on original unsorted array
     for (i=0; i<inputArr.length; i++){ //O(n)
      //step 2: keep track of current keyvalue 
       let keyValue = inputArr[i]
       let key = i 
        //step 3: iterate on adjacent index
        for (adjIndex = i+1; adjIndex<inputArr.length; adjIndex ++){
          //step 4: compare its value with left subarray one by one 
          while(inputArr[adjIndex]<inputArr[i]){
            //Do a slide when the value of smaller than keyposition 
            let temp = inputArr[i]; 
            inputArr[i] = inputArr[adjIndex]; 
            inputArr[adjIndex] = temp; 
            //keep comparing with left elements til it is well sorted
            adjIndex --;
          }
          keyValue = inputArr[adjIndex]; 
        }
    }
    return inputArr
  }
  console.log(InsertionSort([45,65,12,23,90,2])) //--[ 2, 12, 23, 45, 65, 90 ]
  console.log(InsertionSort([5,4,3,2,1,0]))//--[ 0, 1, 2, 3, 4, 5 ]
  console.log(InsertionSort([]))//--[]
  console.log(InsertionSort([90,34,21,4,233,12]))//--[ 4, 12, 21, 34, 90, 233 ]
  console.log(InsertionSort([1,2,3,4,5]))//--[ 1, 2, 3, 4, 5 ]
  console.log(InsertionSort([-1,2,-3,4,5]))//-- [-3, -1, 2, 4, 5 ]