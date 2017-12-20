function binarySearch(arr,val){
    var temp = arr;
    while(temp.length>0){
        n=Math.trunc(temp.length/2);
        if (temp[n]<val){
            temp=temp.slice(n+1,temp.length);
        }
        else if(temp[n]>val){
            temp=temp.slice(0,n);
        }
        else{
            return true;
        }
    }
    return false;
}

// arr=[0,1,2,3,4,5,6]
// var d=binarySearch(arr,-1)
// console.log(d)

function rotated(arr){
    var temp=arr;
    var n=-1
    var base=0;
    while(temp.length>1){
        n=Math.trunc(temp.length/2);
        console.log(n)
        if(temp[n]>temp[n-1]){
            temp=temp.slice(n,temp.length);
            base+=n;
            console.log(temp);
        }
        else{
            console.log('here!')
            return n+base;
        }
    }
    return -1;
}
arr=[4,4.5,5,6,7,1,2,3];
d=rotated(arr);
console.log(d)


//last minute; GTFO


















