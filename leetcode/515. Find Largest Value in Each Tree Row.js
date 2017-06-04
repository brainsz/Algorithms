/**
 * Created by brains on 2017/6/4.
 */
/**
 * 515. Find Largest Value in Each Tree Row
 *
 *you need to find the largest value in each row of a binary tree.
 *
 *
 * */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if(root===null){
        return [];
    }
    var arr=[],
        result=[];
    arr.push(root);
    while(arr.length!==0){
        //保存每一行的值的长度
        var size=arr.length;
        //设置初始最大值
        var maxVal=-Number.MAX_VALUE;
        //依次遍历每一行的元素
        while(size--){
            var node=arr.shift();
            //如果当前元素大于最大值,则保存为最大值
            if(node.val>maxVal){
                maxVal=node.val;
            }
            if(node.left){
                arr.push(node.left)
            }
            if(node.right){
                arr.push(node.right);
            }
        }
        result.push(maxVal);
    }
    return result;
};
