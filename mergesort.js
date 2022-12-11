function mergeSort(arr) {
    if (arr.length === 0) {
        return "Please provide non-empty array"
    }

    if (arr.length === 1) {
        return arr
    }

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr, rightArr) {
    const resultArr = []

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex])
            leftIndex++
        } else {
            resultArr.push(rightArr[rightIndex])
            rightIndex++
        }
    }
    return resultArr
            .concat(leftArr.slice(leftIndex))
            .concat(rightArr.slice(rightIndex))
}