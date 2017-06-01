/**
 * Created by brains on 2017/6/1.
 */
/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 *
 *Given inorder and postorder traversal of a tree, construct the binary tree.
 *
 * */

//后序序列的最后一个元素就是树根，
// 然后在中序序列中找到这个元素（由于题目保证没有相同的元素，
// 因此可以唯一找到），中序序列中这个元素的左边就是左子树的中序，右边就是右子树的中序，然后根据刚才中序序列中左右子树的元素个数可以在后序序列中找到左右子树的后序序列，
// 然后递归的求解即可

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length==0){
        return null;
    }
    return BuildTree(0,inorder.length-1,0,postorder.length-1,inorder,postorder);
};

function BuildTree(iStart,iEnd,pStart,pEnd,inorder,postorder){
    if(pStart==pEnd){
        return new TreeNode(postorder[pEnd]);
    }
    if(iStart>iEnd){
        return null;
    }

    var rootVal=postorder[pEnd];
    var i=inorder.indexOf(rootVal);
    var root=new TreeNode(rootVal);
    root.left=BuildTree(iStart,i-1,pStart,pStart+(i-iStart)-1,inorder,postorder);
    root.right=BuildTree(i+1,iEnd,pStart+(i-iStart),pEnd-1,inorder,postorder);
    return root;
}
console.log(buildTree([4,2,5,1,6,3,7],[4,5,2,6,7,3,1]))