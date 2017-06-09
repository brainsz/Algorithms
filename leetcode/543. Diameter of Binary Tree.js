/**
 * Created by brains on 2017/6/9.
 */
/**
 *
 * 543. Diameter of Binary Tree
 *
 * Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

 Example:
 Given a binary tree
 1
 / \
 2   3
 / \
 4   5
 Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
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
 *
 */

    //思路:对于每个节点,以该节点为根的最长路径即为左子树的深度加上右子树的深度
    //每一个节点的深度为左子树和右子树的深度的较大值
    //直接找到每一个节点的深度,同时更新最大值
var diameterOfBinaryTree = function(root) {
    if(root==null){
        return 0;
    }
    var maxDistance=0;
    function maxDepth(root){
        if(root==null){
            //递归结束出口
            return 0;
        }
        var left=maxDepth(root.left);//左边深度
        var right=maxDepth(root.right);//右边深度
        maxDistance=Math.max(maxDistance,left+right);//最大深度等于左边加右边和当前的比较
        return Math.max(left,right)+1;//左右子树的最大值加1
    }
    maxDepth(root);
    return maxDistance;
};
