/**
 * Created by brains on 2017/5/7.
 */
/**
 * Say you have an array for which the ith element is the price of a given stock on day i.

 If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

 Example 1:
 Input: [7, 1, 5, 3, 6, 4]
 Output: 5

 max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
 Example 2:
 Input: [7, 6, 4, 3, 1]
 Output: 0

 In this case, no transaction is done, i.e. max profit = 0.
 *
 * */
//先记录下数组前n个之间的最小值,对于第n+1个数，如果他和前n之间的最小值的差大于0，则把这个差当作利益最大值
//继续数组的下一个数字，直到循环完所有数字
//维护一个前n个数的最小值，还有第n+1个数和前n个数之间最小值之间的差值
//时间复杂度 :O(n),空间复杂度:O(1)

function MaxProfit(prices){
    var min=prices[0],
        maxProfit=0;
    for(var i=0;i<prices.length;i++){
        //如果当前这个数小于之前n个数中的最小值，则这个数为最小
        if(prices[i]<min){
            min=prices[i];
        }else{
            //如果当前这个数与前n个数之间的差值大于之前的最大值，则这个差值最大
            if((prices[i]-min)>maxProfit){
                maxProfit=prices[i]-min;
            }
        }
    }
    return maxProfit;
}
console.log(MaxProfit([1,2,3,6,7]));

