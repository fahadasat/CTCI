/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 23
 */
var mergeKLists = function (lists) {
    let merged = [];
    for (let i = 0; i < lists.length; i++) {
        let list = lists[i];

        while (list) {
            merged.push(list.val);
            list = list.next;
        }
    }

    merged.sort((a, b) => {
        return a - b
    });

    if (merged.length < 1) return null;
    let head = new ListNode();

    let temp = head;
    for (let i = 0; i < merged.length; i++) {
        temp.val = merged[i];
        if (i + 1 < merged.length)
            temp.next = new ListNode();
        temp = temp.next;
    }

    return head;
};