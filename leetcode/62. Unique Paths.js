/**
 * Created by brains on 2017/5/25.
 */

/**
 * 62. Unique Paths
 *
 *
 *A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

 The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

 How many possible unique paths are there?
 *
 * */

//思路：定义一个二维数组，从左上开始一次计算每一行的值，最后返回A[m-1][n-1]就可以
//因为只能往右边或者往下边走,所有

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //先定义一个二维数组
    var temp=[];
    for(var i=0;i<m;i++){
        temp[i]=[];
        for(var j=0;j<n;j++){
            temp[i][j]=1;
        }
    }
    //从第二行和第二列开始
    for(var i=1;i<m;i++){
        for(var j=1;j<n;j++){
            temp[i][j]=temp[i-1][j]+temp[i][j-1];
        }
    }
    return temp[m-1][n-1];
};
console.log(uniquePaths(4,5));