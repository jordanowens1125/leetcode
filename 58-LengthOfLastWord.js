//https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function(s) {
    s = s.split(' ')
    //remove empty spaces
    s= s.filter(notEmpty)
    return s[s.length-1].length
};

const notEmpty = function(item){
    return (item!='')
}
