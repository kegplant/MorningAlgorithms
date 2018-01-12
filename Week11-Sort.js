//some kind of bubble sort: actually selection sort?
function bubbleSort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log('j is:', j);
    }
    return arr;
}
// arr=[3,-1,6,2,5,2,7,6,4];
// console.log(bubbleSort(arr)) 


//real bubble sort: doesn't look like real bubble??!!!!??
//yes! the full for loop gives each element a chance to bubble up; while loop stops if sorted
function bubbleSort2(arr) {
    if (arr.length === 0) {
        return arr;
    }
    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                sorted = false;
            }
        }
    }
    return arr;
}
// arr=[3,-1,6,2,5,2,7,6,4];
// console.log(bubbleSort2(arr)) 

//insertion sort: better w/ recursion?
function insertionSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {
        console.log('inserting: ', arr[i])
        insertIntoSorted(arr, i);
        console.log(arr);
    }
}

function insertIntoSorted(arr, end) {
    var start = 0;
    let i = end - 1
    while (arr[i] > arr[i + 1] && i >= 0) { //very slightly faster if move and shift
        console.log('swap ', arr[i], ' and ', arr[i + 1])
        swap(arr, i, i + 1);
        i--;
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}
// insertionSort(arr)

//another selection sort: keeping track of index only, and put the minima to the front of the unsorted portion each time//just copied from board: not optimized
function selectionSort(arr) {
    var min;
    var temp;
    for (var i = 0; i < arr.length; i++) {
        min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
        // console.log(min)
        // console.log(arr)
    }
    return arr;
}
// arr=[3,-1,6,2,5,2,-10,7,6,4,-11];
// console.log(selectionSort(arr))

// merge sort!!!
function mergeSort(arr, si = 0, ei = (arr.length - 1)) {
    if (ei - si < 1) {
        return
    }
    var mi = Math.floor((si + ei) / 2)
    console.log(`si: ${si}, mi: ${mi}, ei: ${ei}`)
    mergeSort(arr, si, mi)
    mergeSort(arr, mi + 1, ei)
    merge(arr, si, mi, ei)
    return;
}

function merge(arr, si, mi, ei) {
    var tempArr = []
    var p = si;
    var q = mi + 1;
    for (let i = 0; i < ei - si + 1; i++) {
        if (p > mi) {
            tempArr.push(arr[q]);
            q++
        } else if (q > ei) {
            tempArr.push(arr[p])
            p++
        } else if (arr[p] < arr[q]) {
            tempArr.push(arr[p]);
            p++
        } else {
            tempArr.push(arr[q]);
            q++
        }
    }
    //copy merged array into the original array
    for (let i = 0; i < ei - si + 1; i++) {
        arr[si + i] = tempArr[i]
    }
    return
}
// arr=[3,-1,6,2,5,2,-10,7,6,4,-11];
// mergeSort(arr)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//quickSort
function quickSort(arr, si = 0, ei = arr.length - 1) {
    if (ei - si < 1) {
        return
    }
    // r = partition(arr, si, ei) //also works
    r = partition2(arr, si, ei)
    console.log(`in main: r: ${r},                         partions: `,arr.slice(si,r),arr.slice(r+1,ei+1))
    quickSort(arr, si, r -1) //use r also works for partition, but not partition2; use r-1 does not work for Joe's
    quickSort(arr, r +1 , ei) 
    return;
}
function partition(arr, si, ei) {
    var p = si;
    var q = si;
    var pv = arr[ei]
    //doing it once is helpful! helps understand what it is
        //is 1 above: since it starts as 1 above and book keeping keeps it that way
    for (let i = si; i < ei; i++) {
        // console.log("here!")
        if(arr[i]>pv){
            // console.log('case1 swapping, ',arr[i]," and ",arr[q])
            swap(arr,i,q);
            q++
        }else{
            // console.log('case2 swapping, ',arr[i]," and ",arr[p])            
            swap(arr,i,p)
            p++;
            q++;
        }
    }
    swap(arr,p,ei)
    console.log("in partition: arr is: ",arr)
    console.log(`in partition: p=${p},q=${q},`)
    return p
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}
////////////////////////////////////////////alternative partition; note this can be run with for(quoted out) or while
function partition2(arr,si,ei){
    var p=si;var q=ei-1;var pv=arr[ei]
    while(p<=q){
    // for(let i=si;i<ei;i++){
        if(arr[p]>pv){
            console.log(`in partition: pv is: ${pv}, swapping: ${arr[p]} at ${p} and ${arr[q]} at ${q}`)
            swap(arr,p,q);
            console.log(`    q=${q} --; arr[q]=${arr[q]}; arr is ${arr}`)
            q--;
        }else{
            console.log(`in partition: pv is: ${pv}, no swapping: arr[${p}] is ${arr[p]}`)
            console.log(`    p=${p} ++; arr[p]=${arr[p]};  arr is ${arr}`)  
            p++
        }
        //hacky
        // i
    }
    swap(arr,p,ei)    
    console.log("in partition: arr is: ",arr,` p=${p},q=${q},`)
    return p
}
// arr = [3, -1, 6, 2, 5, 2, -10, 7, 6, 4, -11];
// quickSort(arr)
// console.log(arr)
////////////////////////////////////////////Joe's strange partitioning thanks to Greg's strange demo//////////////////
/*
for each unsorted partition
set first element as pivot
storeindex = pivotindex + 1
for i=pivotindex+1 to rightmost index
    if element[i] < element[pivot]
        swap(i, storeindex)
        storeindex++
    swap(pivot, storeIndex-1)
*/
function quickSort(arr, si=0, ei=arr.length-1) {
    if( si < ei) {
        var p = partitionSort(arr, si, ei)
        quickSort(arr, si, p-1)
        quickSort(arr, p, ei)
    }
    return arr
}

function partitionSort(arr, start, end) {
    var pivot = start
    start++
    while(start < end) {
        if(arr[pivot]>=arr[start]) { 
            start++ 
        }
        if(arr[pivot]<=arr[end]) { 
            end-- 
        }
        if(arr[pivot]<arr[start] && arr[pivot]>arr[end]) {//
            swap(arr, start, end)
            start++
            end--
        }
    }
    if(arr[pivot]>arr[start]) {
        swap(arr, pivot, start)
    } 
    else {
        swap(arr, pivot, start-1)
    }
    return start++
}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}
// var myArr = [5,7,6,4,7,6,3,8,1,9,2,8,23,7]
// // var myArr=[1,2,4]
// console.log(quickSort(myArr, 0, myArr.length-1))
//trim in => swap when both are stuck =>this should reach the end (p == q) lol!!!
//2 cases on exit of the while loop   