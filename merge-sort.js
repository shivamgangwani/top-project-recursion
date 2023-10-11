function mergeSort(arr) {
    // Base case: an arr of length = 1 is already sorted
    if(arr.length <= 1) return arr;

    // Split the array into two halves, sort them and merge them
    let half_way_point = arr.length / 2;
    return merge(
        mergeSort(arr.slice(0, half_way_point)), 
        mergeSort(arr.slice(half_way_point))
    );
}


function merge(l_arr, r_arr) {
    let merged = [];
    let smaller = null;

    // While both arrays have items, 
    // -> compare the first item of each, put the smaller one into merged
    while(l_arr.length > 0 && r_arr.length > 0) {
        smaller = (l_arr[0] > r_arr[0]) ? r_arr : l_arr;
        merged.push((smaller).splice(0, 1)[0]);
    }

    // After at least one of the arrays is exhausted, concat the other onto merged & return
    return merged.concat(l_arr).concat(r_arr);
}


console.log(mergeSort([])); // Edge case
console.log(mergeSort([1])); // Edge case
console.log(mergeSort([2, 1]));
console.log(mergeSort([2, 2, 1, 3])); 
console.log(mergeSort([4, 9, 2, 1, 3]));
