function prepend(ssl,val,before){
    if (ssl.head===null){
        return ssl;
    }
    if (ssl.head.val==before){
        var temp=new Node(val);
        temp.next=ssl.head;
        ssl.head=temp;
        return ssl;
    }
    var curr=ssl.head.next//time saving!!!
    var prev=ssl.head;
    while(curr!==null){
        if(curr.val==before){
            prev.next=new Node(val);//something like this
            prev.next.next=curr;
            return ssl
        }else{
            prev=prev.next;
            curr=curr.next;
        }
    }
    return ssl;//no target found
}
//head
//
