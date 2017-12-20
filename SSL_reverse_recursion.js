function SLL() {
    this.head = null;
}

function Node(val) {
    this.val = val;
    // this.next = null;
}
node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node1.next = node2;
node2.next = node3;
//
var head;

function rev(curr) {
    if (curr.next) {
        console.log(curr.val)
        rev(curr.next).next = curr;
        console.log('reversed to ' + curr.val);
        curr.next = null; //removes infinite loop
        return curr;
    } else {
        console.log(curr.val)
        head = curr;
        return curr;
    }
    return temp;
}
rev(node1);


reversed = head;
while (reversed) {
    console.log(reversed.val);
    reversed = reversed.next;
}

// using a stack:
function reverseSLL(SLL) {
    var stk = new Stack();
    var curr = SLL.head;
    while (curr) {
        stk.push(curr);
        curr = curr.next;
    }
    SLL.head = stk.pop();
    curr = SLL.head;
    while (stk.top) {
        curr.next = stk.pop();
        curr = curr.next
    }
    return SLL;
}
//1 loop only
function SLLreverse(inList) {
    if (inList.head == null || inList.head.next == null) {
        return inList;
    }
    var curr = inList.head.next;
    inList.head.next = null;
    while (curr) {
        var temp = curr.next;
        //put current in front of already reversed portion
        curr.next = inList.head;
        inList.head = curr;
        //iterate to next node
        curr = temp;
    }
    return inList;
}