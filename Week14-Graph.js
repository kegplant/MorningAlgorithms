//adjancy list vs edge/vertex list
//DFS can refactor
function find(node,target,visited={}){
    var res=false
    visited[node]=true
    if (node.val==target){
        return true
    }else{      
        for(var i=0;i<node.children.length;i++){
            if(!visited[node.children[i]]){
                res= res || find(node.children[i],target,visited)
            }
        }
        return res
    }
} 