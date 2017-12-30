function BST() {
    this.root = null;
    this.buffer = [];
    this.nextBuffer = [];
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
BST.prototype.add = function (val) {
    if (!this.root) {
        console.log('adding root:', val);
        this.root = new Node(val);
        return;
    }
    curr = this.root;
    prev = null;
    while (curr) {
        if (curr.val <= val) {
            prev = curr;
            curr = curr.right;
        } else {
            prev = curr;
            curr = curr.left;
        }
    }
    if (prev.val <= val) {
        console.log('adding right:', val)
        prev.right = new Node(val);
    } else {
        console.log('adding left:', val)
        prev.left = new Node(val);
    }
}
// theTree=new BST();
// theTree.add(13);
// theTree.add(16);  
// console.log(theTree.root.val);
// console.log(theTree.root.right.val);

/////////////////////////////Node level functionalities: add; good way to approach a lot of things
Node.prototype.add = function (val) {
    if (val < this.val) {
        if (!this.left) {
            this.left = new Node(val);
        } else {
            this.left.add(val); //almost like recursion! I was going to wrap .add with a wrapper method of BST
        }
    } else {
        if (!this.right) {
            this.right = new Node(val);
        } else {
            this.right.add(val);
        }
    }
}
BST.prototype.add = function (val) {
    if (!this.root) {
        this.root = new Node(val);
    } else {
        this.root.add(val);
    }
}
Node.prototype.min = function () {
    if (this.left) {
        console.log('going left')
        return this.left.min();
    } else {
        console.log('found min')
        return this;
    }
}
BST.prototype.min = function () {
    if (!this.root) {
        return false;
    }
    return this.root.min();
}
theTree = new BST();
// console.log('adding13');
theTree.add(13);
theTree.add(15);
theTree.add(14);
theTree.add(10);
theTree.add(11);
theTree.add(12);
theTree.add(9);

// console.log('min: ', theTree.min());
// console.log(theTree.root.left.val);
Node.prototype.count = function () {
    var count = 1;
    if (this.left) {
        count += this.left.count();
    }
    if (this.right) {
        count += this.right.count();
    }
    return count;
}
BST.prototype.count = function () {
    if (!this.root) {
        return 0;
    } else {
        return this.root.count();
    }
}
// console.log(theTree.count());
/////////////////////////// display  //////////////////////
BST.prototype.buffer = [];
BST.prototype.nextBuffer = [];
Node.prototype.displayHelper = function (buffer, nextBuffer) {
    nextBuffer.push(this.left);
    nextBuffer.push(this.right);
    if (buffer.length === 0) {
        var branchStr = '';
        var branches='';
        nextBuffer.forEach(node => {
            if (node) {
                branchStr += (node.val+'  ');
                if(node.left){
                    branches+='/';
                }
                if(node.right){
                    branches+='\\';
                }
            }
        })
        console.log(branchStr);
        console.log(branches);
        for (let i = 0; i < nextBuffer.length; i++) { //direct manipulation doesn't change original pointer???
            buffer.push(nextBuffer.pop());
        }
        if (buffer.length == 0) {
            return;
        } else {
            var temp = buffer.pop();
            if (temp) {
                temp.displayHelper(buffer, nextBuffer);
            }

        }
    } else {
        var temp = buffer.pop();
        if (temp) {
            temp.displayHelper(buffer, nextBuffer);
        }
    }
}
BST.prototype.display = function () {
    this.buffer = [];
    this.nextBuffer = [];
    this.nextNextBuffer=[];
    if (!this.root) {
        return console.log('empty!');
    } else {
        this.root.displayHelper(this.buffer, this.nextBuffer);
    }
}
// /////////theTree.display();
// buffer empty: display each of next buffer
// move next buffer to buffer,empty next buffer
// pop first of buffer and call display Helper on it//starting putting children of buffer into next buffer

// buffer non empty: pop buffer, and result's childre gets pushed into nextBuffer

//////////////////////display in order //////////////////////
Node.prototype.inOrderDisplay=function(){
    if(this.left){
        this.left.inOrderDisplay();
    }
    console.log(this.val);      
    if(this.right){
        this.right.inOrderDisplay();
    }
}
BST.prototype.inOrderDisplay=function(){
    if(!this.root){
        console.log('empty');
    }else{
        this.root.inOrderDisplay();
    }    
}
theTree.inOrderDisplay();
///////////////////////////Thursday remove by value, need to implement the comments
BST.prototype.remove=function(val){
    //special case of cannot find
    //special case of root only / no root
    var curr=this.find(val); //need to find it
    //check that curr has right child
    target=curr.right.min()
    if(target.right){
        target.parent.left=target.right;
    }
    curr.swapWithLeaf()            
}

//alternatively: get the tree to have prev,parity=false for left true for right
//go through the tree to add parent attribute (or modify Node.prodotype.parent and BST.Add)
Node.prototype.swapWithLeaf=function(leaf){
    var reject=this;
    if(reject.parent.left){
    if(reject.val=reject.parent.left.val){
            reject.parent.left=leaf;
            leaf.left=reject.left;
            leaf.right=reject.right;
        }
        else{
            reject.parent.right=leaf;
            leaf.left=reject.left;
            leaf.right=reject.right;
        }
    }else{
        reject.parent.right=leaf;
        leaf.left=reject.left;
        leaf.right=reject.right;
    }   
}

/***************** height & isBalanced **********************/
/* originally made an isBalanced function, which recursively calls height */
Node.prototype.height=function(checkBalance=false){
    var lc=0;
    var rc=0;
    if(this.left){
        lc=this.left.height();
    }
    if(this.right){
        rc=this.right.height();
    }
    if(checkBalance){
        if(Math.abs(rc-lc)>=2){
            return false
        }else{
           //unfinished code 
        }
    }else{
        if(rc>lc){
            return rc+1;
        }else{
            return lc+1;
        }
    }
}
console.log('height is: ',theTree.root.height(true))

/* balance! */
// keep it balanced upon add, so only need to deal with 4 base cases
// four base cases: /, \, <, >
///: right rotate; \: left rotate
// <: turn into / then right rotate
// >: turn into \ then left rotate










