//https://leetcode.com/problems/delete-node-in-a-linked-list/description/
var deleteNode = function(node) {
  //question is not so much about deleting as much as it is about overwriting the current node with the next node
    node.val = node.next.val
    node.next = node.next.next
};
