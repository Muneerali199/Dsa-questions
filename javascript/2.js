// binary search
function binarysearch(list, target) {
    let start = 0;
    let end = list.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (list[mid] === target) {
            return mid;
        } else if (list[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;


}
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
console.log(binarysearch(list, target));