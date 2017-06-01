/**
 * Created by brains on 2017/6/1.
 */
/**
 * 73. Set Matrix Zeroes
 *
 *
 *Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
 * */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

    //就用第一行和第一列来存储哪行哪列有0
    //首先要记录第一行和第一列是否为0
var setZeroes = function(matrix) {
    var m=matrix.length,
        n=matrix[0].length,
        i,
        j,
        firstRow=false,
        firstCol=false;
    //先标记第一行和第一列是否有0
    for(j=0;j<n;j++){
        if(matrix[0][j]==0){
            firstRow=true;
            break;
        }
    }
    //标记第一列是否有0
    for(i=0;i<m;i++){
        if(matrix[i][0]==0){
            firstCol=true;
            break;
        }
    }
    //从第二行和第二列开始遍历，遇到0则把所在行和列的第一个值设为0

    for(i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(matrix[i][j]==0){
                matrix[i][0]=0;
                matrix[0][j]=0;
            }
        }
    }

    //把第一行的0所在的列都设置为0
    for(i=1;i<m;i++){
        if(matrix[i][0]==0){
            for(j=1;j<n;j++){
                matrix[i][j]=0;
            }
        }
    }
    //把第一列的0所在的行都设置为0
    for(j=1;j<n;j++){
        if(matrix[0][j]==0){
            for(i=1;i<m;i++){
                matrix[i][j]=0;
            }
        }
    }
    //根据标记决定第一行和第一列是否全设为0
    if(firstRow){
        for(j=0;j<n;j++){
            matrix[0][j]=0;
        }
    }
    if(firstCol){
        for(i=0;i<m;i++){
            matrix[i][0]=0;
        }
    }

};
setZeroes([[1,0,2],[2,2,3],[0,3,5]]);
