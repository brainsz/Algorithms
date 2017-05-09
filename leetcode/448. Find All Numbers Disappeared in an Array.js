/**
 * Created by brains on 2017/5/9.
 */
/**
 *
 * 448. Find All Numbers Disappeared in an Array
 *
 *Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

 Find all the elements of [1, n] inclusive that do not appear in this array.

 Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

 Example:

 Input:
 [4,3,2,7,8,2,3,1]

 Output:
 [5,6]
 * */

//一个数组中，有的元素出现一次，有的元素出现两次，求出中间没有出现的元素
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   //第一种直接判断，超时
   /* var result=[];
    for(var i=1;i<nums.length+1;i++){
        if(nums.indexOf(i)===-1){
            result.push(i);
        }
    }*/
    let map = {};
    nums.forEach((n,index)=>{
        map[~~(index+1)] = index+1;
    });

    nums.forEach((n,index)=>{
        delete map[n];
    });
    //Object.values()获取对象的values值
    return Object.values(map);
};
console.log(findDisappearedNumbers([1,2,4,4,6,6,7]));
