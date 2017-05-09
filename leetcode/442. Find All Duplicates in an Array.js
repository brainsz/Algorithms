/**
 * Created by brains on 2017/5/9.
 */
/**
 *
 *442. Find All Duplicates in an Array
 *
 *Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

 Find all the elements that appear twice in this array.

 Could you do it without extra space and in O(n) runtime?

 Example:
 Input:
 [4,3,2,7,8,2,3,1]

 Output:
 [2,3]
 * */
//目的是要找出数组中出现了两次的数字
//思路:用一个哈希表存储数组中元素出现的个数
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var hash={};
    for(var i=nums.length-1;i>=0;i--){
        if(hash[nums[i]]){
            hash[nums[i]]+=1;
        }else{
            hash[nums[i]]=1;
        }
    }
    nums=[];
    for(var k in hash){
        if(hash[k]==2){
            nums.push(~~k);
        }
    }
    return nums;
};
console.log(findDuplicates([1,2,2,3,3,4]));