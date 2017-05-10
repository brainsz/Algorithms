/**
 * Created by brains on 2017/5/10.
 */

/**
 * 154. Find Minimum in Rotated Sorted Array II
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 Find the minimum element.

 The array may contain duplicates
 *
 * */
/**
 * @param {number[]} nums
 * @return {number}
 */

    /**
     *
     * 当A[mid] = A[end]时，无法判断min究竟在左边还是右边。

     但可以肯定的是可以排除A[end]：因为即使min = A[end]，由于A[end] = A[mid]，排除A[end]并没有让min丢失。所以增加的条件是：
     A[mid] = A[end]：搜索A[start : end-1]
     *
     * */
var findMin = function(nums) {
    var left=0,
        right=nums.length-1;
    while(left<right){
        var mid=left+((right-left)>>1);
        if(nums[mid]<nums[right]){
            right=mid;
        }else if(nums[mid]>nums[right]){
            left=mid+1;
        }else{
            right--;
        }
    }
    return nums[left];
};
console.log(findMin([4,5,6,7,0,1,2]));