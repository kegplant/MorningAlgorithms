function Node(val = undefined) {
    this.val = val;
    this.next = null;
}

function SLL() {
    this.head = null;
}

SLL.prototype.addFront = function (node) {
    node.next = this.head;
    this.head = node;
    return this;
}

SLL.prototype.removeFront = function () {
    let tempNode = this.head;
    this.head = tempNode.next;
    tempNode.next = null;
    return tempNode;
}
SLL.prototype.contains = function (val) {
    let curr = this.head;
    while (curr) {
        if (curr.val === val) return true;
        curr = curr.next;
    }
    return false;
}
SLL.prototype.front = function () {
    return this.head;
}

mySLL = new SLL();
mySLL.head = new Node("head");
newFront = new Node("new head");
mySLL.addFront(newFront).removeFront();
console.log(mySLL)
console.log(mySLL.contains("head"))