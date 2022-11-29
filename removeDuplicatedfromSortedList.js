//https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

var deleteDuplicates = function(head) {
    if(!head){
        return head
    }
    let l = head
    let comparison = l
    let r = head.next
    
    while(r){
        if(comparison.val==r.val){
            comparison.next=r.next
            r=r.next
        } 
        else{
            comparison=comparison.next
            r=r.next
        }
    }
    return l
};
