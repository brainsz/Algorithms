/**
 * Created by brains on 2017/6/1.
 */
/**
 *
 * 80. Remove Duplicates from Sorted Array II
 *Follow up for "Remove Duplicates":
 What if duplicates are allowed at most twice?

 For example,
 Given sorted array nums = [1,1,1,2,2,3],

 Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.
 It doesn't matter what you leave beyond the new length
 *
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var k=0;
    for(var j=nums.length-1;j>0;j--){
        if(nums[j]==nums[j-1]){
            k++;
            if(k==2){
                nums.splice(j,1);
                k--;
            }
        }else{
            k=0;
        }
    }
    return nums.length;
};
console.log(removeDuplicates([1,1,1,1]));