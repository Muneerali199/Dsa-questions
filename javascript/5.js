function sum(arr, total) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) {
                return [arr[i], arr[j]];
            }
        }
    }
    return -1;
}

console.log(sum([1, 2, 3, 4, 5], 9)); // Output: [4, 5]