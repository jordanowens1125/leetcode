//https://leetcode.com/problems/majority-element/description/
var majorityElement = function(nums) {
    let max = 0
    let result = 0
    const numObj = {}
    for(let i = 0; i < nums.length; i++){
        if(numObj[nums[i]]){
            numObj[nums[i]] = numObj[nums[i]] +1
        }
        else{
            numObj[nums[i]] = 1
        }
        if([numObj[nums[i]]] > max){
            max = numObj[nums[i]]
            result = nums[i]
        }
    }
    return result
};
