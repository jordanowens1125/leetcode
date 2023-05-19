var addTwoNumbers = function(l1, l2) {
    const result = new ListNode()
    let carried = 0
    let current = result
    while(l1||l2){
        let value = carried
        if(l1){
            value +=l1.val
          //move head of l2
            l1=l1.next
        }
        if(l2){
            value +=l2.val
          //move head of l2
            l2=l2.next
        }
        if(value >=10){
            value = value - 10
            carried = 1
        }
        else{
            carried = 0
        }
        current.val = value
        if(l1 !== null || l2 !== null){
            current.next = new ListNode()
            current = current.next 
        }
    }
  //make sure there is nothing remaining after final sum
    if(carried> 0){
        current.next = new ListNode(1)
    }
    return(result)
};
