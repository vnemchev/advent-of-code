let arr = [1, 2, 3],
    fn = function firstIndex(n, i) {
        return i === 0;
    };

function filter(arr, fn) {
    const resultArr = [],
        arrL = arr.length;

    for (let i = 0; i < arrL; i++) {

        resultArr.push(fn(arr[i], i));
    }
    return resultArr;
}
console.log(filter(arr, fn));
