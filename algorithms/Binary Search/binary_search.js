var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var i = 1; 
    
    while(max >= min){
        guess = Math.floor((max+min)/2);
        if(array[guess] === targetValue){
            console.log(i);
            return guess;   
        }
        else if ( array[guess]< targetValue) {
            min = guess+1;
            console.log(guess);
        }else{
            max = guess-1;
            console.log(guess);
        }
        i++;
    }

	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);

//test cases
Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 31), 10);
Program.assertEqual(doSearch(primes, 2), 0);