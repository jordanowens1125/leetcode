var mergeTwoLists = function(list1, list2) {
   //set this dummy var to hold on to the head which will be returned by dummy.next
   const dummy = new ListNode()
   //make current node which will adjust the pointers
   let curr = dummy
   //run this while list1 and list2 have nodes
   while(list1&&list2){
       //compare values
       if(list1.val<=list2.val){
           //if list1 val is smaller/equal than make current point to 
           //list 1 head
           curr.next = list1
           //update list1 to move on
           list1 = list1.next
       }
       else{
           //if list2 val is smaller than make current point to list2 
           //head node
           curr.next = list2
           //update list2 to move on
           list2 = list2.next
       }
       //move curr after each iteration
       curr = curr.next
   }
   if(list1){
       //if list2 is empty than just add the rest of list1
       curr.next = list1
   }
   else{
       //if list1 is empty than just add the rest of list2
       curr.next = list2
   }
   //return dummy next which is the new head
   return dummy.next
};
