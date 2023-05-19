var deleteMiddle = function(head) {
    let count = -1
    let cur = head
    while(cur){
        cur = cur.next
        count++
    }
   console.log(count)
    let index = 0
    let indexToDelete = Math.round((count)/2)
    // console.log(indexToDelete)
    const dummy = new ListNode()
    let prev = dummy
    cur = head
    while(index!==indexToDelete+1){
        const next = cur.next
        if(index===indexToDelete){
            prev.next = next
            return dummy.next
        }
        prev.next = cur
        prev = cur
        cur = next
        index++
    }
    return dummy.next
};
