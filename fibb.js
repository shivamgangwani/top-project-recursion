// Assignment 1

// Using iteration, write a function fibs which takes a number and returns an 
// array containing that many numbers from the fibonacci sequence. 
// Using an example input of 8, 
// this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
function fibs(n) {
    let out = [0, 1];
    if(n <= 2) return out.slice(0, n);
    while(out.length < n) out.push(out.slice(-2).reduce((acc, x) => acc + x, 0))
    return out;
}
console.log(`fibs(8): [${fibs(8)}]`);


// Now write another function fibsRec which solves the same problem recursively. 
// This can be done in just a couple of lines (or 1 if you’re crazy, 
// but don’t consider either of these lengths a requirement… just get it done).
function fibsRec(n) {
    if(n <= 2) return [0, 1].slice(0, n);
    let tmp = fibsRec(n - 1);
    return tmp.concat(tmp.slice(-2).reduce((acc, x) => acc + x, 0));
}
console.log(`fibsRec(8): [${fibsRec(8)}]`);