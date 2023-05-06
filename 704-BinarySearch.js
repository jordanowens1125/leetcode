// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function(nums, target) {
    let mid = 0;
    let l = 0;
    let r = nums.length;
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
        return mid;
        } else if (nums[mid] < target) {
        l = mid + 1;
        } else {
        r = mid - 1;
        }
    }
    return -1;
};
