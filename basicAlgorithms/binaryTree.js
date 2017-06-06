/**
 * Created by brains on 2017/6/3.
 */
/**
 * 二叉树遍历
 *
 * */


//链式存储结构,节点对象的构造函数
function BinaryTree(data,left,right){
    this.val=data||null;
    this.left=left||null;
    this.right=right||null;
}
//插入节点，构造二叉树
BinaryTree.prototype.insert=function(data){
    var n=new BinaryTree(data,null,null);
    //是否根节点已经构造完成
    if(this.root==null){
        this.root=n;
    }else{
        var current=this.root;
        var parent;
        while(true){
            //当前节点设置为父节点
            parent=current;
            //如果小于当前根结点的值,则应该插入到左子树
            if(data<current.val){
                //当前节点设置为左子树
                current=current.left;
                if(current==null){
                    parent.left=n;
                    break;
                }
            }else{
                current=current.right;
                if(current==null){
                    parent.right=n;
                    break;
                }
            }
        }
    }
}

//中序遍历二叉树
function inOrder(node){
    if(!(node==null)){
        inOrder(node.left);
        console.log(node.val);
        inOrder(node.right);
    }
}
//非递归深度优先遍历二叉树
function inOrderDFS(root){
    if(!root){
        return null;
    }
    var arr=[];
    arr.push(root);
    while(arr.length!==0){
        var node=arr.pop();
        console.log(node.val);
        if(node.right){
            arr.push(node.right);
        }
        if(node.left){
            arr.push(node.left);
        }

    }
}
//非递归广度优先遍历二叉树
function inOrderBFS(root){
    if(root===null){
        console.error("root is null")
    }
    let arr=[];
    arr.push(root);
    var result;
    while(arr.length!==0){
        var size=arr.length;
        result=arr[0].val;
        while(size--){
            //从第一个元素开始弹出
            let node=arr.shift();
            //console.log(node.val);
            if(node.left){
                arr.push(node.left);
            }
            if(node.right){
                arr.push(node.right)
            }
        }
    }
    return result;
}

//非递归中序遍历
function inOrderStack(root){
    if(root===null){
        console.log("root is null");
    }
    var arr=[];
    arr.push(root)
   //console.log(arr);
    var p=root;
    while(p!==null&&arr.length!==0){
        //左边一直走到头
        while(p){
            p=p.left;
            if(p!==null){
                arr.push(p);
            }
        }
        if(arr.length){
            p=arr.pop();
            console.log(p.val);
            arr.push(p.right);
            p=p.right;
        }
    }
}
var convertBST = function(root) {
    var temp=0;
    if(root==null){
        return null;
    }
    root&&add(root)
    function add(root){
        //console.log(root.val);
        root.right&&add(root.right)
        root.val+=temp;
        temp=root.val;
        console.log(temp);
        root.left&&add(root.left)
    }
};


var root=null;
//插入元素
var nums=new BinaryTree(root);
//将以下数据导入二叉树
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)

convertBST(nums.root)