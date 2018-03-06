function ListNode(value) {
    this.val = value;
    this.next = null;
}

function addFront(node, val) {
    let newHead = new ListNode(val);
    newHead.next = node;
    return newHead;
}

function removeFront(node) {
    let newHead = node.next;
    node.next = null;
    return newHead;
}

function contains(node, val) {
    let curr = node;
    while (curr) {
        if (curr.val === val) return true;
        curr = curr.next;
    }
    return false;
}

function front(node) {
    if (node) return node.val;
    return null;
}


mySLL = new ListNode("head");
console.log(removeFront(addFront(mySLL, 10)));
console.log(mySLL)
console.log(contains(mySLL, "heead"))