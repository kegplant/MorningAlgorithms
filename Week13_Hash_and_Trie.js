//rehash:
//traverse old: 1. traverse .table, 2. traverse.table's SLL
//rehash: 1. get to newTable's index 2. traverse to the end of the SLL there
//make sure to set newly hashed node's next to null

//Trie: TrieNode has children, value, isWord attributes
function TrieNode(value){
    this.value=value
    this.children=[]
    this.isWord=false
}
function Trie(arr){
    this.root=TrieNode(null)
    for(let i=0;i<arr.length;i++){//iterate through the words from arr
        var curr=this.root        
        for(let j=0;j<arr[i].length;j++){//iterate trhough each letter of the word
            var isFound = false
            for(let k=0;k<curr.children.length;k++){//find the children that matches
                if(curr.children[k].value==arr[i][j]){
                    isFound=true
                    curr=curr.children[k]
                    break
                }
            }
            if(!isFound){
                var newNode=new TrieNode(arr[i][j])
                curr.children.push(newNode)
                curr=newNode
            }
        }
        curr.isWord=true
    }
}
//trie insert is just what's inside the outer loops of our TrieSet

Trie.prototype.contains = function(str){
    var curr=this.root
    for(let i=0;i<str.length;i++){
        var isFound=false
        for(let j=0;j<curr.children.length;j++){
            if(curr.children[j].value==str[i]){
                isFound=true;
                curr=curr.children[j];
                break
            }
        }
        if(!isFound){
            return false
        }
    }
    return true
}
//Thursday: trie auto complete: just contains then find all descendants who are words
//can be done iteratively on TrieSet or recursively on TrieNode