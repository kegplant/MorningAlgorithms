function rotateStr(str,num){
    var temp='';
    num=(num%str.length+str.length)%str.length;
    console.log(num);
    for(var i=str.length-1;i>str.length-num-1;i--){
        temp=str[i]+temp;
        console.log(temp);
    }
    for(var i=0;i<str.length-num;i++){
        temp+=str[i];
    }
    return temp;
}
// console.log(rotateStr('Kermit the frog',-2));
////////////////////////////////////
function censor(str,bad){
    var temp='';
    for(let i=0;i<str.length;i++){
        if(str[i]!==bad[0]){
            temp+=str[i];
        }else{
            if(strMatch(str,i,bad)){
                temp+=Array(bad.length+1).join('X');
                i+=bad.length-1;
            }else{
                temp+=str[i];
            }
        }
    }
    return temp;
}
function strMatch(str,i,bad){
    for(let k=0;k<bad.length;k++){
        if(str[i+k]!==bad[k]){
            return false;
        }
    }
    return true;
}
str='assassins are sexy';
bad='ass';
console.log(censor(str,bad));