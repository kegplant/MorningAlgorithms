//Dec 5 Flood Fill
function floodFill(arr, Pos, val){
    var val1=arr[Pos.x][Pos.y];
    if(val==val1){
        return arr;
    }else{
        arr[Pos.x][Pos.y]=val;
        checkNeighbor(arr,Pos,val1,val);
        return arr;
    }
}
//lots of parameters but well encapsulated; 
//change & check vs check & change?
    //don't need to keep track of checked pos since we're changing its value
//Pos object literals
    //Pos check a lot of work
    //use callback to DRY?  
function checkNeighbor(arr,Pos,val1,val){
    for(let i=-1;i<2;i+=2){
        x=Pos.x+i;y=Pos.y;
        if(arr[x][y]==val1&&inRange(arr,x,y)){
            arr[x][y]=val;
            checkNeighbor(arr,{x:x,y:y},val1,val);
        }
        x=Pos.x;y=Pos.y+i;
        if(arr[x][y]==val1&&inRange(arr,x,y)){
            arr[x][y]=val;
            checkNeighbor(arr,{x:x,y:y},val1,val);
        }
    }
}
function inRange(arr,x,y){
    if(x>=arr.length||y>=arr.length||x<0||y<0){
        return false;
    }else{
        return true;
    }
}
function fib(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }else{
        return fib(n-1)+fib(n-2);
    }
    
}
console.log(fib(4))