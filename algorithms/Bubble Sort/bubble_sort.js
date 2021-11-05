const array = [21, 50, 44, 32, 67,23];

function bubbleSort(input) {
  let leng = input.length;
  let swapped;
  do {
        swapped = false;
        for (let i = 0; i < leng; i++) {
            if (input[i] > input[i + 1]) {
                let tmp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return input;
}

console.log(bubbleSort(array)); // => [ 21, 23, 32, 44, 50, 67 ]