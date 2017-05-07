/**
 * Created by brains on 2017/5/7.
 */
/**
 *
 1. Two Sum
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:
 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
 * */
//先对数组进行排序，然后用双指针夹逼
//使用两个指针i和j，分别指向数组第一个数和最后一个数
//nums[i]加nums[j]的和如果等于target，则返回下标,如果加起来小于target,i下标向前移动，否则j下标向前移动

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //数组一定要深拷贝
    var arr=nums.slice(0);
    nums.sort(function(a,b){
        return a-b;
    });
    var i=0,
        j=nums.length-1;
    while(i<j){
        if((nums[i]+nums[j])==target){
            i=nums[i];
            j=nums[j];
            break;
        }else if((nums[i]+nums[j])<target){
            i++;
        }else{
            j--;
        }
    }
    nums=[];
    for(var k=0;k<arr.length;k++){
        if(arr[k]==i||arr[k]==j){
            nums.push(k);
        }
    }
    return nums.sort(function(a,b){return a-b});
};

//第二种方法,用hash表来处理,时间复杂度:O(n),空间复杂度O(n)
//循环数组中的元素，如果当前元素不在哈希表中，则把target与当前数字的差存入哈希表中,value值是当前的下标
//如果在哈希表中找到该元素，则返回哈希表中当前元素的value值，因为这个就是之前遍历到的元素的下标
var twoSum = function(nums, target) {
    var hash={};
    for(var i=0;i<nums.length;i++){
        if(hash[nums[i]]){
            return [hash[nums[i]]-1,i];
        }else{
            hash[target-nums[i]]=i+1;
        }
    }
}


console.log(twoSum([1,2,5,7,3],9));