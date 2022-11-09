//https://leetcode.com/problems/roman-to-integer/submissions/840368555/
//dictionary served as table for value reference
//I went backwards and compared the current value to the one before it
//The first item was compared to 0
//if the number was greater than the item before it then add else subtract
/return the sum

var romanToInt = function(s) {
    if(s.length==0){
        return 0
    }
    let sum = 0
    let comparison = 0
    let romanMap ={
        'I':1,
        "V":5,
        'X':10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    for(let i=s.length-1;i>-1;i--){
        if(romanMap[s[i]]>=comparison){
            sum+=romanMap[s[i]]
        }else{
            sum-=romanMap[s[i]]
        }
        comparison=romanMap[s[i]]
    }
    return sum
};
