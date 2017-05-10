/**
 * Created by brains on 2017/5/10.
 */
/**
 * 287. Find the Duplicate Number
 *Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */
    //第一种思路:哈希表法,时间:O(n),空间:O(n)
var findDuplicate = function(nums) {
    var res={};
    for(var i=0;i<nums.length;i++){
        if(res[nums[i]]){
            return nums[i];
        }else{
            res[nums[i]]=1;
        }
    }
};
//第二种思路:环路查找
//假设数组中没有重复，那我们可以做到这么一点，就是将数组的下标和1到n每一个数
// 一对一的映射起来。比如数组是213,则映射关系为0->2, 1->1, 2->3。假设这个
// 一对一映射关系是一个函数f(n)，其中n是下标，f(n)是映射到的数。如果我们从下标为0出发，
// 根据这个函数计算出一个值，以这个值为新的下标，再用这个函数计算，以此类推，直到下标超界。实际上可以
// 产生一个类似链表一样的序列。比如在这个例子中有两个下标的序列，0->2->3。
//但如果有重复的话，这中间就会产生多对一的映射，比如数组2131,则映射关系为0->2, {1，3}->1, 2->3。
// 这样，我们推演的序列就一定会有环路了，这里下标的序列是0->2->3->1->1->1->1->...，而环的起点就是重复的数。


var findDuplicate2 = function(nums) {
    var slow=0,
        fast=0;
    //找到快慢指针相遇的地方,两者相减就是环的周长的倍数
    do{
        slow=nums[slow];
        fast=nums[nums[fast]];
        //console.log(slow,fast);
    }while(slow!=fast)
    //用一个新指针从头开始,直到和慢指针相遇,就是环的起点
    var find=0;
    while(find!=slow){
        slow=nums[slow];
        find=nums[find];
    }
    return find;
};
console.log(findDuplicate2([1,2,1]));