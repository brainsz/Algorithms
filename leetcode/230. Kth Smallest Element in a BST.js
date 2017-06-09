/**
 * Created by brains on 2017/6/9.
 */

/**
 * 230. Kth Smallest Element in a BST
 *
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

 Note:
 You may assume k is always valid, 1 ? k ? BST's total elements.

 Follow up:
 What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
 * */

//链式存储结构，节点对象的构造函数
function BinaryTree(data,left,right){
    this.val=data||null;
    this.left=left||null;
    this.right=right||null;
}

BinaryTree.prototype.insert=function(data){
    var n=new BinaryTree(data,null,null,null);
    if(this.root==null){
        this.root=n;
    }else{
        var current=this.root,
            parent;
        while(true){
            //把当前节点设置为父节点
            parent=current;
            if(data<current.val){
                current=current.left;
                if(current==null){
                    parent.left=n;
                    break;
                }
                //如果要插入的数据小于当前根节点，则插入到左边
            }else{
                current=current.right;
                if(current==null){
                    parent.right=n;
                    break;
                }
                //插入到右边
            }
        }
    }
}
//找到第k大的数字
function findKNum(root,k){
    var myStack=[];
    var node=root;
    var i=0;
    while(node||myStack){
        while(node){
            //左边遍历完毕
            myStack.push(node);
            node=node.left;
        }
        //最后一个数字出栈
        node=myStack.pop();
        i++;
        if(i==k){
            return node.val;
        }
        node=node.right;
    }
}


//插入元素
var nums=new BinaryTree();
//将以下数据导入二叉树
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)

//console.log(nums.root);
console.log(findKNum(nums.root,3));