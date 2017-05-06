/*
 35. Search Insert Position

 Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 You may assume no duplicates in the array.

 Here are few examples.
 [1,3,5,6], 5 → 2
 [1,3,5,6], 2 → 1
 [1,3,5,6], 7 → 4
 [1,3,5,6], 0 → 0
 */
//分治法解决
//1.第一种解法从后往前寻找，这种方法需要O(n)复杂度，但是如果对于需要插入的元素比较好
var searchInsert = function (nums, target) {
    if (nums == null) {
        return null;
    }
    var k = 0;
    if (nums.length == 0) {
        return k;
    }
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] >= target) {
            k = i;
        }
    }
    return k;
};
//第二种二分查找O(log^n)
var searchInsert = function (nums, target) {
    var left = 0,
        right = nums.length - 1;
    while (left < right) {
        var mid = left + ((right - left) >> 1);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums[left] >= target ? left : left + 1;
};
searchInsert([1, 3, 5, 6, 7, 8, 12, 25], 26);