function sNode(value) {
    this.val = value;
    this.next = null;
}

function addFront(node, val) {
    let newHead = new sNode(val);
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

// mySLL = new sNode("head");
// console.log(removeFront(addFront(mySLL, 10)));
// console.log(mySLL)
// console.log(contains(mySLL, "heead"))

/********************Wednesday*****************/
function sList() {
    this.head = null;
}

function sNode(value) {
    this.val = value;
    this.next = null;
}

function length(node) {
    let length = 0;
    while (node) {
        length += 1;
        node = node.next;
    }
    return length;
}
// mySLL = new sNode(2);
// myList = new sList();
// myList.head = addFront(mySLL, 10);
// console.log("length which should be 2 is: " + length(myList.head));

function average(node) {
    if (!node) return false;
    let sum = 0;
    let length = 0;
    while (node) {
        length += 1;
        sum += node.val;
        node = node.next;
    }
    return sum / length;
}
// myNode = new sNode(2);
// myList = new sList();
// myList.head = addFront(myNode, 10);
// console.log(`average which should be 6 is: ${average(myList.head)}`)

function max(node) {
    if (!node) return false; //is this even necessary?
    let max = node.val;
    while (node.next) {
        node = node.next;
        if (node.val > max) max = node.val;
    }
    return max;
}

function min(node) {
    if (!node) return false; //is this even necessary?
    let min = node.val;
    while (node.next) {
        node = node.next;
        if (node.val < min) min = node.val;
    }
    return min;
}
// myNode = new sNode(12);
// myList = new sList();
// myList.head = addFront(myNode, 10);
// console.log(`min which should be 10 is: ${min(myList.head)}`)

//display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!
function display(node) {
    while (node) {
        console.log(node.val);
        node = node.next;
    }
}
// myNode = new sNode(12);
// myList = new sList();
// myList.head = addFront(myNode, 10);
// display(myList.head);

/***************** Bonus *****************/
//prependVal(list,value,before) that inserts a new node with given value immediately before the node with before (or at end). Return the new list. 
function prependVal(list, value, before) {
    let temp = new sNode();
    temp.val = value;
    //special case * 2
    if (!list.head) {
        list.head = temp;
        return list;
    }
    if (list.head.val === before) {
        temp.next = list.head;
        list.head = temp;
        return list;
    }
    //general case which returns upon prepending
    let curr = list.head;
    while (curr.next) {
        if (curr.next.val === before) {
            temp.next = curr.next;
            curr.next = temp;
            return list;
        }
        curr = curr.next;
    }
    //add at the end
    curr.next = temp;
    return list;
}
// myNode = new sNode(12);
// myList = new sList();
// myList.head = addFront(myNode, 10);
// prependVal(myList, 3, 10);
// display(myList.head);

// removeVal(list,value) that removes from our list the node with the given value. Return the new list.
function removeVal(list, value) {
    //special case * 2
    if (!list.head) {
        return list;
    }
    if (list.head.val === value) {
        list.head = list.head.next;
        return list;
    }
    //general case which returns upon prepending
    let curr = list.head;
    while (curr.next) {
        if (curr.next.val === value) {
            curr.next = curr.next.next;
            return list;
        }
        curr = curr.next;
    }
    return list;
}
// myNode = new sNode(12);
// myList = new sList();
// myList.head = addFront(myNode, 10);
// prependVal(myList, 3, 10);
// removeVal(myList,13)
// display(myList.head);

// appendVal(list,value,after) that inserts a new listNode with given value immediately after the node containing after (or at end). Return the new list.
function appendVal(list, value, after) {
    let temp = new sNode();
    temp.val = value;
    //special case * 1
    if (!list.head) {
        list.head = temp;
        return list;
    }
    //general case; return upon append
    let curr = list.head;
    while (true) {
        if (curr.val === after) {
            temp.next = curr.next;
            curr.next = temp;
            return list;
        }
        if (!curr.next) { //append at the end
            curr.next = temp;
            return list;
        }
        curr = curr.next;
    }
}
// myNode = new sNode(12);
// myList = new sList();
// myList.head = addFront(myNode, 10);
// prependVal(myList, 3, 10);
// // myList=new sList();
// appendVal(myList, 4, 3)
// display(myList.head);

/***************** Bonus Friday ******************/
// Create splitOnVal(list,num) that, given number, splits a list in two. The latter half of the list should be returned, starting with node containing num. E.g.: splitOnVal(5) for the list (1 >3>5>2>4) will change list to (1>3) and return value will be (5>2>4). 
// Given: (1)->(2)->(3)->(4), 3
// Return: (3)->(4)

// partition(list,value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved. 
// Given: (3)->(1)->(2)->(4)->(5)
// Return: (1)->(2)->(3)->(4)->(5)
// Given: (10)->(15)->(11)->(4)->(9)
// Return: (4)->(9)->(10)->(15)->(11)


// deleteGivenNode
// Create listNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list, and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next.
// Hint:
/*function sList() {
       this.head = null;
       this.____  = function(){ .... }
 }
function sNode(val) {
       this.val = val;
       this.next = null;
       this.removeSelf = function() { ... }
 }
*/