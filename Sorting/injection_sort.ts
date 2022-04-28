function insertionSort(array) {
    // go through each element
    for (let i = 1; i <  array.length; i++) {
        let j = i - 1;
        // swap elements until element on the left is smaller than the one in the right
        while(j >= 0 && array[j] > array[(j+1)]) {            
            console.log("comparing indexes", j,j+1);
            const aux = array[j];
            array[j] = array[(j+1)];
            array[(j+1)] = aux;
            console.log("updated array", array);
            j = j - 1;
        }
    }    
    console.log("ordered array", array);
}
insertionSort([6, 5, 3, 1, 8, 7, 2, 4]);
// insertionSort([]);
// insertionSort([1,2,3,4,5,6,7,8]);
// insertionSort([8,7,6,5,4,3,2,1]);
