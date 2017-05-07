/**
 * Created by brains on 2017/5/7.
 */
/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

 You may assume the integer do not contain any leading zero, except the number 0 itself.

 The digits are stored such that the most significant digit is at the head of the list.
 * */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var res='',
        c=0;
    var b=[1];
    while(digits.length||b.length||c){
        c+=~~digits.pop()+~~b.pop();
        res=c%10+res;
        c=c>9;
    }
    var arr=[]
    for(var i=0;i<res.length;i++){
        arr.push(~~res[i]);
    }
    return arr;
};
console.log(plusOne([1,2,3,4,9]));