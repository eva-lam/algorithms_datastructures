const array = [21, 50, 44, 32, 67,23]
function insertionSort(input){
    let length = input.length;
    for (let i = 1; i < length; i++) {
        let key = input[i];
        let j = i - 1;
        while (j >= 0 && input[j] > key) {
            input[j + 1] = input[j];
            j = j - 1;
        }
        input[j + 1] = key;
    }
    return input;
};

console.log(insertionSort(array)); //-->[ 21, 23, 32, 44, 50, 67 ]