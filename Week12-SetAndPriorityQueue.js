function intersect(arr1, arr2) {
    var p = 0;
    var q = 0;
    var newArr = []
    while (p < arr1.length && q < arr2.length) {
        if (arr1[p] === arr2[q]) {
            newArr.push(arr1[p])
            p++
            q++
        }
        if (arr1[p] < arr2[q]) {
            p++
        } else if (arr1[p] > arr2[q]) {
            q++
        }
    }
    return newArr
}

function uniqueIntersect(arr1, arr2) {
    var p = 0;
    var q = 0;
    // var prev=null
    var newArr = []
    while (p < arr1.length && q < arr2.length) {
        if (arr1[p] === arr2[q]) {
            if (newArr[newArr.length - 1] !== arr1[p]) {
                newArr.push(arr1[p])
                // prev=arr1[p]
            }
            p++
            q++

        }
        if (arr1[p] < arr2[q]) {
            p++
        } else if (arr1[p] > arr2[q]) {
            q++
        }
    }
    return newArr
}
//union uses similar logic
// var arr1 = [1, 2, 2, 3, 5, 7, 9]
// var arr2 = [2, 2, 4, 6, 7]
// console.log(uniqueIntersect(arr1, arr2))

//heap see pictures lol
// function Heap(){
//     this=[]
// }
