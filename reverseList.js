/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    let prev = null;
    let curr = head;
    let next = head.next;
    while(curr) {
        curr.next = prev;        
        prev = curr;
        if (next == null) return curr;
        curr = next;
        next = next.next;
    }
    //return curr;
};