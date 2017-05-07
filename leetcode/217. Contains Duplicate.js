/**
 * Created by brains on 2017/5/7.
 */
/**
 *
 * 217. Contains Duplicate
 * Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash={};
    for(var i=0;i<nums.length;i++){
        if(hash[nums[i]]){
            return true;
        }else{
            hash[nums[i]]=1;
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,2,4,5,6]));