/**
 * Created by brains on 2017/5/10.
 */
/**
 * 153. Find Minimum in Rotated Sorted Array
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 Find the minimum element.
 *
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
    //用二分查找
var findMin = function(nums) {
    var left=0,
        right=nums.length-1;
    while(left<right){
        var mid=left+((right-left)>>1);
        if(nums[mid]<nums[right]){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return nums[left];
};
console.log(findMin([4,5,6,7,0,1,2]));