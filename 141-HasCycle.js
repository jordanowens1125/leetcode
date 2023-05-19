var hasCycle = function(head) {
    let current = head
    while(current){
        if(current.visited){
            return true
        }
        current.visited=true
        current = current.next
    }
    return false
};
