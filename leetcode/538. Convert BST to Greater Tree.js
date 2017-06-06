/**
 * Created by brains on 2017/6/4.
 */
/**
 * 538. Convert BST to Greater Tree
 *
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys
 * greater than the original key in BST.
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
 * @return {TreeNode}
 */
    //根节点等于右边节点的和加上当前节点的和，左边节点等于右子树的和
var convertBST = function(root) {
    var temp=0;
    if(root==null){
        return root;
    }
    root&&add(root)
    function add(root){
        root.right&&add(root.right)
        root.val+=temp;
        temp=root.val;
        root.left&&add(root.left)
    }
    return root;
};




