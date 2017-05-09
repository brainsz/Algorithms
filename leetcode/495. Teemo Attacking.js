/**
 * Created by brains on 2017/5/9.
 */
/**
 *495. Teemo Attacking
 *
 * In LLP world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition. Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.

 You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.

 Example 1:
 Input: [1,4], 2
 Output: 4
 Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately.
 This poisoned status will last 2 seconds until the end of time point 2.
 And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds.
 So you finally need to output 4.
 * */
//题目:输入一个数组，数组中的每一个数字是中毒开始时间。后面输入一个中毒持续时间，
//求出中毒的所有时间之和

//思路:其实是贪心算法，求出相邻两个数字的差，如果这个差大于中毒时间，则加上中毒时间，
//如果这个差值小于中毒时间，则加上这个差值

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length==0){
        return 0;
    }
    var res=0;
    for(var i=0;i<timeSeries.length;i++){
        if(timeSeries[i+1]){
            var diff=timeSeries[i+1]-timeSeries[i];
            res+=(diff>duration?duration:diff);
        }else{
            res+=duration;
        }
    }
    return res;
};
console.log(findPoisonedDuration([1,2],2));