function biExp(str) {
    var temp = str;
    if (str.indexOf('?')==-1) {
        console.log(str);
        return;
    } else {
        // console.log(str)
        biExp(str.replace('?', '1'));
        biExp(temp.replace('?', '0'));
    }
}
function biExp(str, arr=[]) {
    var temp = str;
    if (str.indexOf('?')==-1) {
        // console.log(str);

        arr.push(str);
        // return arr;
    } else {
        // console.log(str)
        biExp(str.replace('?', '1'),arr);
        biExp(temp.replace('?', '0'),arr);
    }
    // console.log(arr);
    return arr;
}
// res= biExp('0?1???0');
// console.log(res)

////////////////////////////////////////////////////////////////////
//linked list method
//use array for now

function anagram(str){
    var anaArr=[];        
    //base case
    if(str.length==1 || str.length==0){
        anaArr.push(str);
    }else{
    //a loop of all the recursion calls
        for(let i=0;i<str.length;i++){
            let subAnaArr=anagram(str.slice(0,i)+str.slice(i+1));
            anaArr=anaArr.concat(subAnaArr.map(x=>str[i]+x));
        }
    }
    return anaArr;
}
// console.log(anagram('abcde').length);
function biSearch(arr,sdx,edx,val){//(arr, start index, end index, target value)
    if(arr[sdx]>val || arr[edx]<val || arr.length==0){
        return -1;
    } else if (arr[edx]===val){
        return edx;
    }else if (arr[sdx]===val){
        return sdx;
    }else{
        var temp=Math.floor((sdx+edx)/2);
        if(val<arr[temp]){
            return (biSearch(arr,sdx+1,temp-1,val));
        }else if(val>arr[temp]){
            return biSearch(arr,temp+1,edx-1,val);
        }else{
            return temp;
        }
    }
}
// console.log(biSearch([1,2.3,3,6,7,12],0,4,2.3));
var x=[1,2,3];
for(let i of x){
    console.log(i);
}