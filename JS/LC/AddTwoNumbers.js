/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 2
var addTwoNumbers = function(l1, l2) {

    let value = 0;
    let remainer = 0;

    let temp = l1;

    let val = l1.val + l2.val + value;
    value = Math.floor(val / 10);
    remainer = val % 10;
    l1.val = remainer;

    while(l1.next && l2.next) {
        l1 = l1.next;
        l2 = l2.next;

        val = l1.val + l2.val + value;
        value = Math.floor(val / 10);
        remainer = val % 10;

        l1.val = remainer;
    }

    if(l2.next) {
        l1.next = l2.next
    }

    while(l1.next) {
        l1 = l1.next;
        let val = l1.val + value;
        value = Math.floor(val / 10);
        remainer = val % 10;

        l1.val = remainer;
    }

    if (!l1.next && value > 0) {
        l1.next = new ListNode(value);
    }

    return temp;
};