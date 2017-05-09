/**
 * Created by brains on 2017/5/9.
 */
/**
 * 167. Two Sum II - Input array is sorted
 *
 *Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

 You may assume that each input would have exactly one solution and you may not use the same element twice.

 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2
 *
 * */
//给定一个递增的数组序列，然后在给一个目标数字，找出数组元素中相加等于这个数的下标

//思路：用两个指针，从前面和后面开始查找，如果相加等于这个数，则停止，如果大于，则右边往左走，
//如果小于，则左边往右边走
//最后返回的时候，下标都加1

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left=0,
        right=numbers.length-1;
    while(left<right){
        if((numbers[left]+numbers[right])==target){
            return [left+1,right+1];
        }else if((numbers[left]+numbers[right])<target){
            left++;
        }else{
            right--;
        }
    }
};
console.log(twoSum([5,25,75],100));