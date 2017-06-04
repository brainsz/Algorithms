/**
 * Created by brains on 2017/6/4.
 */
/**
 * 78. Subsets
 *
 * Given a set of distinct integers, nums, return all possible subsets.
 * */

/*
给定一个数组集合，返回所有的子集的组合
思路:对结合[1,2,3]从0节点的1开始，都有选择或者不选的情况，不选为空，放右子树
选择就放左子树，这样就会得到一颗完全二叉树,叶子节点就是我们所求的集合
* */

var subsets=function(arr){
    //回溯法
    var res=[];
    if(arr==null||arr.length==0){
        return res;
    }
    arr.sort(function(a,b){
        return a-b;
    });
    var list=[];
    dfs(res,list,arr,0);
    console.log("************");
    console.log(res);
    return res;
}
function dfs(res,list,arr,pos){
    res.push(list.slice(0));//数组深拷贝,不能浅拷贝,因为是数组的引用,只会保存最后的值
    //console.log(list);
    for(var i=pos;i<arr.length;i++){
        //如果有重复元素
        if(i>pos&&arr[i]==arr[i-1]){
            continue;
        }
        list.push(arr[i]);
        //console.log(list);
        dfs(res,list,arr,i+1);
        list.pop();
    }
}
//迭代法：每次都在原有的子集后面添加新的元素arr[i],并加入到result中,就会得到另外一个新子集
var subsets2=function(arr){
    var temp=[];
    var res=[];
   iterSet(arr,temp,0,res);
    //console.log(res);
}
function iterSet(arr,temp,level,res){
   if(level==arr.length){
       res.push(temp.slice(0));
       return ;
   }
    iterSet(arr,temp,level + 1,res);
    console.log(temp);
    temp.push(arr[level])
    iterSet(arr,temp,level + 1,res);

}

subsets2([1,2,3]);