var removeElements = function(head, val) {
    let cur = head
    const dummy = new ListNode()
    let prev = dummy
    //make connection between dummy node and the head
    prev.next = cur
    while(cur){
       if(cur.val === val){
           //make prev skip over the cur and point to the next 
           prev.next = cur.next
           //set cur to the node that prev is now pointing to effectively getting dropping cur
           cur = prev.next
       }
       else{
           //valdate link between cur and prev
           prev.next = cur
           //slide prev and cur over by 1 node
           prev = cur
           cur = cur.next
       }
    }
    return dummy.next
};
