var swapPairs = function(head) {
  //dummy node to save the head with dummy.next return at function end
    const dummy = new ListNode()
    let cur = head
    let prev = dummy
    //make dummy point point to cur
    dummy.next = cur
    while(cur&& cur.next){
        //access the next node since we are using three pointers
        //next node will tell the current node where to point and will be where the prev points after updating before ultimately pointing at the current 
        //node
        const next = cur.next
        //make prev point to next
        prev.next = next
        //make sure we tell cur where to point before making the next node point to the current node
        cur.next = next.next
        //make next node point to the current completing the swap
        next.next = cur
        //set prev to end of 3 pointers
        prev= cur
        //make cur the next after the current or the node that the next node initially pointed to
        cur = prev.next
    }
    return dummy.next
};
