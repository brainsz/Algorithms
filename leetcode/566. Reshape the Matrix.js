/**
 * Created by brains on 2017/5/7.
 */
/**
 * In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

 You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

 The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

 If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix

 nput:
 nums =
 [[1,2],
 [3,4]]
 r = 2, c = 4
 Output:
 [[1,2],
 [3,4]]
 Explanation:
 There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
 * */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var m=nums.length,
        n=nums[0].length;
    if(n*m!=r*c){
        return nums;
    }
    //定义二维数组
    var newArr=new Array();
    for(var i=0;i<r;i++){
        newArr[i]=new Array();
    }
    //找到行列对应的规律
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            newArr[i][j] = nums[parseInt((i * c + j) / n)][(i * c + j) % n];
        }
    }
    return newArr;
};
matrixReshape([[1,2,3,4]],2,2);