function mergeSort(array: Array<number>, start: number, size: number) {
    if ((start + 1) < size) {
        // calculate index in the middle
        const half = Math.round((start + size) / 2);
        // break first half
        console.log(`first call - start: ${start}, half: ${half}, size: ${size}`);
        mergeSort(array, start, half);
        // break second half
        console.log(`second call - start: ${start}, half: ${half}, size: ${size}`);
        mergeSort(array, half, size);
        // merge arrays
        merge(array, start, half, size);
    }
}

function merge(array: Array<number>, start: number, half: number, size: number) {
    // creating 2 new arrays
    const left: Array<number> = new Array<number>();
    const right: Array<number> = new Array<number>();

    let k = 0;
    for (let i = start; i < half; i++) {
        left[k] = array[i];
        k++;
    }
    left[k] = 10000;
    k = 0;
    for (let i = half; i < size; i++) {
        right[k] = array[i];
        k++;
    }
    right[k] = 10000;
    console.log(`merging - start: ${start}, half: ${half}, size: ${size}`);
    console.log("left", left);
    console.log("right", right);
    // merge arrays
    let i = 0;
    let j = 0;
    for (let k = start; k < size; k++) {
        if (left[i] <= right[j]) {
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
    }
    console.log("array", array);
}

function sort() {
    let array: Array<number> = [6, 5, 3, 1, 8, 7, 2, 4];
    console.log("initial array", array);
    mergeSort(array, 0, array.length);
    console.log("final array", array);
}
sort();