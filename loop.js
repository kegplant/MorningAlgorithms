//detect a loop
SLL.prototype.detectLoops=function(){
    var curr=this.head;
    var arr=[];
    var count=1;
    while(curr){
        try{
            if(curr.index){
                arr.push(true);
                arr.push(curr);
                return arr;
            }
        }
        catch(err){
            curr['index']=count;
            count++;
            
        }
        curr=curr.next;
    }
    arr.push(false);
    return arr;
}
SLL.prototype.fixLoop=function(){
    if(this.detectLoop[0]){
        var curr=this.head;
        while(curr){
            if(curr.next===this.detectLoop[1]){
                curr.next=null;
                return true;
            } else{
                curr=curr.next;
            }
        }
    } else{
        return true
    }
}