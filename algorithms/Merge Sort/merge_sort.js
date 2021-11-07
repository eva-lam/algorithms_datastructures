function mergeSort(inputArr, p,r){
  
    //step 1 : on condition that upper index is higher than lower index 
    if(p < r){
      let q =  Math.floor((p+r)/2);
      
      mergeSort(inputArr,p,q);
      mergeSort(inputArr,q+1, r);
      //start merging 
      merge(inputArr,p,q,r);
    } 
  }
  
  
  var merge = function(array, p, q, r) {
      let lowHalf = [];
      let highHalf = [];
  
      let k = p;
      let i;
      let j;
      for (i = 0; k <= q; i++, k++) {
          lowHalf[i] = array[k];
      }
      for (j = 0; k <= r; j++, k++) {
          highHalf[j] = array[k];
      }
      k = p;
      i = 0;
      j = 0;
      // Repeatedly compare the lowest untaken element in lowHalf with the lowest untaken element in highHalf and copy the lower of the two back into array
      while(i< lowHalf.length && j< highHalf.length){
        if(lowHalf[i]<highHalf[j]){
          //copy the index into the away
            array[k]= lowHalf[i];
            i++;
        }else{
            array[k]= highHalf[j];
            j++;
        }
        k++;
      }
       // Once one of lowHalf and highHalf has been fully copied
      //  back into array, copy the remaining elements from the
      //  other temporary array back into the array
      while (i<lowHalf.length){
        array[k]=lowHalf[i];
        i++;
        k++;
  
      };
      while(j<highHalf.length){
        array[k]= highHalf[j];
        j++; 
        k++;
      };
      
     
  };
  
  
  const array = [3, 7, 12, 14, 2, 6, 9, 11];
  
  mergeSort(array,0,array.length-1);
  console.log("Array after sorting: " + array);
  //Array after sorting: 2,3,6,7,9,11,12,14

