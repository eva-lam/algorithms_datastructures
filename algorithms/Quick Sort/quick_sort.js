// const input = [20,33,41,2,12,45,1];

function partition(inputArr,leftKey,rightKey){
    //locate middle element 
        var pivotValue = inputArr[Math.floor((leftKey+rightKey)/2)];
            
        console.log({pivotValue});
        console.log("Before first while loop",{inputArr})
        //Step 2: use left key and right key as first & last element
        while (leftKey < rightKey){
          //search for element that is smaller than pivot 
          //compare element at left pointer with pivot element, increment if element is smaller 
          while(inputArr[leftKey]< pivotValue ){
              //move leftKey to the right only if its value is less than pivot.
              console.log("Inside leftKey<pivotValue",{inputArr})
              leftKey ++; 
          }
          //search for element greater than pivot
          //compare value at the right pointer with the pivot element. 
          while(inputArr[rightKey]> pivotValue){
            //move rightKey to the left
            console.log("Inside rightKey>pivotValue",{inputArr})
              rightKey --;
          }
          if (leftKey <= rightKey){
            //do a swap 
            console.log("before swap",{inputArr})
            swap(inputArr,leftKey, rightKey);
            leftKey++; 
            rightKey--; 
            console.log("after swap",{inputArr})
          }
        }
        console.log(inputArr)
        return leftKey; 
    
    }
    
    function swap(inputArr, left, right){
      var temp = inputArr[left];
      inputArr[left]= inputArr[right]; 
      inputArr[right] = temp;
    }
    
    function quickSort(inputArr, left, right){
      var indexOfPartition; 
    
      if(right-left>0){
        //create a partition 
        indexOfPartition = partition(inputArr, left,right);
        //recursive function for the left side 
        quickSort(inputArr,left,indexOfPartition-1);
        //recursive function for the right side 
        quickSort(inputArr, indexOfPartition+1);
      }
     
    }
    
    
    
    console.log(quickSort(input,0, input.length-1)); 
    