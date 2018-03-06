var isIsomorphic = function(s, t) {
    if(s.length!==t.length){
       return false
       }
    var charMap={};
    var charVisited={};
    for(var i=0;i<s.length;i++){
        if(charMap[s[i]]){
            if(charMap[s[i]]!==t[i]){
                return false
            }
        }else{
            if(charVisited[t[i]]){//bug; 2nd condition
                return false
            }else{
                charMap[s[i]]=t[i]
                charVisited[t[i]]=true
                       }
        }
    }
    return true
};


//no need to nest if returning; trick: set p == null; complicated base case ==> pretty general case
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return LCA(root,p,q)
    };
    function LCA(root,p,q){
            //base cases
        if(root===null) {
            return false
        }
        var placeholder='p'
        if(root===q){
            let temp=p
            p=q
            q=temp
            placeholder='q'
        }
        if(root===p || p===null){
            if(root===q || q===null){
                return root
            }else{
                let temp=LCA(root.left,null,q)
                if (temp.constructor===TreeNode){
                    return root
                }else{
                    let temp=LCA(root.right,null,q)
                    if (temp.constructor===TreeNode){
                        return root
                    }else{
                        return placeholder+' only'
                    }
                }
            }
        }
        //general case
        let leftResult=LCA(root.left,p,q)
        let rightResult=LCA(root.right,p,q)
        if(leftResult.constructor===String && rightResult.constructor===String){
            return root
        }
        if(leftResult.constructor===TreeNode){
            return leftResult
        }
        if(rightResult.constructor===TreeNode){
            return rightResult
        }
        if(leftResult.constructor===String || rightResult.constructor===String){
            return leftResult+rightResult
        }
        return false
    }
    
    
    ///rotated sorted array
    /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var a=0
    var b=nums.length-1
    while(a!==b){//instead of recursion
        var midIdx=Math.floor((a+b)/2)
        if(num[midIdx]===target){
            return midIdx
        }
        if(num[a]<=target&&)
    }
};