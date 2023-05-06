// https://leetcode.com/problems/longest-common-prefix/submissions/850996810/
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    //set first item as base
    let prefix=strs[0]
    for(let i=1;i<strs.length;i++){
        //check if saved prefix shares the same prefix as the new word
        //and shorten it until it matches this word if possible
        //also use substring in while loop to ensure the lengths match
        while(prefix!==strs[i].substring(0,prefix.length)){
            //shorten the saved prefix
            prefix = prefix.substring(0,prefix.length-1)
        }
    }
    return prefix
};
