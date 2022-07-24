/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 141
 */
var hasCycle = function (walker) {

    let sprinter = walker;

    while (sprinter && sprinter.next) {
        sprinter = sprinter.next.next;
        walker = walker.next;
        if (sprinter === walker) return true;
    }

//     let set = new Set();

//     while(head) {
//         if (set.has(head)) return true;
//         set.add(head);
//         head = head.next;
//     }

    return false;
};