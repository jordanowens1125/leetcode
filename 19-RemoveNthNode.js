var removeNthFromEnd = function(head, n) {
    let counts = 0
    let current = head
    //traverse once to get total number of nodes
    while(current){
        counts++
        current = current.next
    }
  //get index of node that you will remove
    let indexToRemove = counts -n
    //set start in wich will increment after we traverse through each node
    let start =0
    let cur = head
    //set dummy so that we can keep track of the head
    const dummy = new ListNode()
    let prev = dummy
    //go until start and the index max up
    while(start!==indexToRemove+1){
      //if indexes equal then point prev node to the node after the node being removed
        if(start===indexToRemove)
        {
            //return dummy.next since it holds onto the new true head
            prev.next = cur.next
            return  dummy.next
        }
      //move each point by one node
        prev.next = cur
        prev =cur
        cur = cur.next
      //increment start to progress through index
        start++
    }
    return head
};
