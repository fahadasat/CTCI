/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 143
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let nodes = [];
    let temp = head;
    while (temp) {
        nodes[nodes.length] = temp;
        temp = temp.next;
    }

    head = nodes.shift();
    temp = head;
    while (nodes.length > 0) {
        let tmp = nodes.pop();
        tmp.next = null;
        temp.next = tmp;
        temp = temp.next;
        if (nodes.length > 0) {
            tmp = nodes.shift();
            tmp.next = null;
            temp.next = tmp;
            temp = temp.next;
        }
    }
};