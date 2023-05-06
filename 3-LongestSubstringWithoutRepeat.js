// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let result =0
    let tracker ={}
    start =0
    //i is going to serve as the left side of the window
    for (let i=0;i<s.length;i++){
        //continually move the start 1 if the current item in the right position 
        // is still in the tracker object
        while(tracker[s[i]]){
            //move the left slider over
            //while also deleting it from the object
            delete tracker[s[start]]
            start++
        }
        //plus one is added to also count the initial item
        //ex: 1-4 would result in 3 even though we also want to count the first item
        let comparison = i-start+1
        if(comparison>result){
            result=comparison
        }
        tracker[s[i]]=true
    }
    return result
};
