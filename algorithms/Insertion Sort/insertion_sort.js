function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
    insert(array, i-1, array[i]); }
    return(array);
}

function insert(array, j, key) { 
    while((j > -1) && (key < array[j])) {
    array[j+1] = array[j];
    j--; }
    array[j+1] = key; 
}