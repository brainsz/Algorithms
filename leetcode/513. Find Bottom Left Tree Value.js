/**
 * Created by brains on 2017/6/3.
 */
/**
 * 513. Find Bottom Left Tree Value
 *
 * Given a binary tree, find the leftmost value in the last row of the tree
 *
 * */

/**
 * Definition for a binary tree node.
 *
 *
 *
 *
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val){
    this.val=val;
    this.left=this.right=null;
}

var findBottomLeftValue = function(root) {
    if(root===null){
        console.error("root is null")
    }
    let arr=[];
    arr.push(root);
    var result;
    while(arr.length!==0){
        var size=arr.length;
        //保存每一层最左边的值
        result=arr[0].val;
        while(size--){
            //从第一个元素开始弹出
            let node=arr.shift();
            if(node.left){
                arr.push(node.left);
            }
            if(node.right){
                arr.push(node.right)
            }
        }
    }
    return result;
};