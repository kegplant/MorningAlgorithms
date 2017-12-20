function SLL() {
    this.head = null;
}

function Node(val) {
    this.val = val;
    // this.next = null;
}
//don't forget to check empty head!
function findKth(k,val,SLL){
    if(SLL.head===null){
        return -1;
    }
    var slow=SLL.head;
    var curr=SLL.head;
    for(var i=0;i<k-1;i++){
        curr=curr.next;
        if(curr===null){
            return false;
        }
    }
    while(curr.next){
        slow=slow.next;
        curr=curr.next;
    }
    return slow;
}
//k-1 in for, curr.next in while
//or k in for, curr in while