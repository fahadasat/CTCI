## StringBuilder/StringBuffer

- **Definition**:

  Creates a resizable array of strings and appends instead of creating a new string.
  ```java
  sentence = sentence + w
  
  sentence.append(word)
  ```
  _String Builder_: Is faster because it is not synchronized.

  _String Buffer_: Is synchronized, meaning it blocks the next thread's call as long as the previous thread's execution
  is not finished.

## Arrays

- **Definition**:

  Stores data elements based on a sequential, most commonly 0 based, index.


- **Need to Know**:

  Optimal for indexing; bad at searching, inserting, and deleting (except at the end).


- **Time Complexity**:

  Indexing: Linear array: O(1), Dynamic array: O(1)

  Search: Linear array: O(n), Dynamic array: O(n)

  Optimized Search: Linear array: O(log n), Dynamic array: O(log n)

  Insertion: Linear array: n/a, Dynamic array: O(n)

## LinkedList

- **Definition**:

  Stores data elements based on an sequential, most commonly 0 based, index


- **Need to Know**:

  Stores data with nodes that point to other nodes.

  A linked list chains nodes together by pointing one node's reference towards another node.


- **How to Implement**:

  Create a Node class that holds data and a Node object called pointer.

  Have the linked list hold a head and tail Node.


- **Time Complexity**:

  Indexing: O(n)

  Search: O(n)

  Append: O(1)

  Prepend: O(1)

## Stack

- **Definition**:

  Last in, first out (LIFO) data structures.


- **Need to Know**:

  Used in DFS to hold the nodes that need to be visited.


- **How to Implement**:

  Made with a linked list by having the head be the only place for insertion and removal.


- **Time Complexity**:

  Push: O(1)

  Pop: O(1)

## Queue

- **Definition**:

  First in, first out (FIFO) data structure.


- **Need to Know**:

  Used in BFS to hold the nodes that need to be visited.


- **How to Implement**:

  Made with a doubly linked list that only removes from head and adds to tail.


- **Time Complexity**:

  Insert: O(1)

  Remove: O(1)

## HashTable/HashMap/HashSet

- **Definition**:

  _Hash Table_: store in key:value pairs

  _Hash Map_: Stores in key:value pairs, non-synchronized, and is not thread-safe. Allows one null key and multiple null
  values.

  _Hash Set_: stores unique objects


- **Need to Know**:

  Designed to optimize searching, insertion, and deletion.


- **How to Implement**:

  Essentially an array of linked lists. Hash the key value and use that value as the index for the data. A linked list
  is used in case of collisions.

  ```java
  Hash = (13 * 17 * Character.codePointAt(key, i)) % arrayLength
  ```

- **Time Complexity**:

  Indexing: Hash Tables: O(1)

  Search: Hash Tables: O(1)

  Insertion: Hash Tables: O(1)

## Binary Tree

- **Definition**:

  _Binary Tree_: Each node has at most two children.

  _Binary Search Tree_: Is a binary tree where all left children are smaller than the parent and all right children are
  greater.

  _Balanced Trees (AVL, Red-Black)_: Left and right sub-tree’s height differ at most by one.

  _Complete Binary Tree_: A binary tree where every level of the tree is fully filled except perhaps the last where it
  is filled from left to right.

  _Full Binary Tree_: A binary tree where every node has either zero (0) or two (2) children

  _Perfect Binary Tree_: Both full and complete binary tree.


- **Need to Know**:

  Designed to optimize searching and sorting.


- **Time Complexity**:

  Indexing: Binary Search Tree: O(log n)

  Search: Binary Search Tree: O(log n)

  Insertion: Binary Search Tree: O(log n)

## Binary Tree Traversal

- **Definition**:

  _In-Order_: Print left branch then the current node then the right branch.

  _Pre-Order_: Visits the current node before its child nodes.

  _Post-Order_: Visits the current node after its child nodes.


- **Need to Know**:

  The most common traversal is in-order.


- **How to Implement**:

  _In-Order_: Recursively loop through with the left node until node is null. Print Node. Recursively loop through with
  the right node until the node is null.

  _Pre-Order_: Print node then recursively go with left then right.

  _Post-Order_: Recursively go with left, then right, then print node.

## Heaps

- **Definition**:

  (Min-Heaps) Is a complete binary tree, where each node is smaller than its children. The root is then the minimum
  element.


- **Need to Know**:

  Two main functions to know are insert and extracting min.


- **How to Implement**:

  A heap is created with an array because we can track the next index to insert to keep the tree complete.

  When inserting the data using the next index value and recursively bubble up the value until the parent is smaller.

  To extract, the last element in the heap is swapped with the first. Then iteratively bubble down the parent with the
  smallest child. First check if there are children. Then check if the right child exists. If not, then swap with the
  left child if smaller. If yes, then check which child is smaller and compare if it's smaller than the parent.


- **Time Complexity**:

  Find Min/Find Max: O(1)

  Insert: O(log n)

  Delete Min/Delete Max: O(log n)

  Extract Min/Extract Max: O(log n)

## Trie

- **Definition**:

  A tree where each character is stored at each node. Each path down the tree may represent a word.


- **Need to Know**:

  Two main functions to know are insert and extracting min.


- **How to Implement**:

  Each trie has a node that includes the alphabetSize, boolean to check if it's at the end of a word and an array of
  nodes for its children.

  To insert, create a temp node from the head since you will need to move the temp down each level for each character of
  the input. Iterate for each character and first check if temp’s children if the character at the level is null. If it
  is then create a new node at that index.

  ```java
    temp.getChildren()[word.charAt(i) - 'a'] = new TrieNode();
  ```  

  Then set the temp to the children, so it can go to the next level. At the end of the loop set temp’s boolean to true.

  To search for a string just iterate, moving down each level of the trie until the loop finished or until the index of
  the children array is null.


- **Time Complexity**:

  Check for valid prefix: O (k) - where k is the length of string

## Graph

- **Definition**:

  A graph is simply a collection of nodes with edges between (some of) them.


- **Need to Know**:

  Graphs can either be directed or undirected. Directed being one way streets.

  Adjacency lists are the most common way to represent a graph.

  An adjacency matrix is a NxN matrix where a true value indicates an edge from node i to node j.

  It is easier to iterate through an adjacency list than a matrix.

- **How to Implement**:

  A graph can be created with a HashMap of LinkedLists. The key will be each vertex/node of the graph. The linked list
  values will be the edges from that vertex to another.

  ```java
    private HashMap<Integer, LinkedList<Integer>> Graph = new HashMap<>();
  ```  

  To add an edge, first check if the source and destination vertices are in the hashmap. If not, create a new entry in
  the map with vertex:new list.Then add the destination to the source’s linked list. If the graph is undirected, do the
  same with the destination’s linked list.

## BFS

- **Definition**:

  An algorithm that searches a tree (or graph) by searching levels of the tree first, starting at the root.


- **Need to Know**:

  Optimal for searching a tree that is wider than it is deep.

  Uses a queue to hold the nodes that need to be visited.


- **How to Implement**:

  Use hashmap to store parents , hashset to store visited nodes, and a queue to store nodes to visit.

  Check if the two vertices are contained in the graph then add the first vertex to the queue.

  Create a while loop to run while the queue has items. Check if the current node is the one that's being searched.

  If it isn't, loop through each edge and check if it’s been visited, or it will be visited.

  If not then add the edges to the queue and update the parents' hashmap with children as the key and parent as the
  data.

  At the end add the current node to the visited hashset.

- **Time Complexity**:

  Search: O(V + E) - where V = Vertices, E = Edges

## [DFS](https://xkcd.com/761/)

- **Definition**:

  An algorithm that searches a tree (or graph) by searching depth of the tree first, starting at the root.


- **Need to Know**:

  Optimal for searching a tree that is deeper than it is wide.

  Uses a stack to hold the nodes that need to be visited.

  Less memory intensive than BFS since a stack uses less pointers than a queue.


- **How to Implement**:

  Same as BFS except use a stack to hold the nodes to visit.

- **Time Complexity**:

  Search: O(|E| + |V|) - where V = Vertices, E = Edges

## Quick Sort

- **Definition**:

  A divide and conquer algorithm.

  Partition the entire data set in half by selecting a random pivot element and putting all smaller elements to the left
  of the element and larger ones to the right.

  It repeats this process on the left side until it is comparing only two elements at which point the left side is
  sorted.

  When the left side is finished sorting it performs the same operation on the right side.


- **Need to Know**:

  While it has the same Big O as (or worse in some cases) many other sorting algorithms it is often faster in practice
  than many other sorting algorithms, such as merge sort.


- **How to Implement**:

  You will need two main functions. One called quickSort that will handle the recursion and the second partition
  function that will get an index and make sure everything on the left is smaller and everything on the right is greater
  than that index.

  The quicksort function will take in an array, left, and right parameters. It will get the partition index from the
  partition function and then apply quicksort to the left and right side of the array. The left section will be from the
  left parameter until the partition index. The right will be from partition index + 1 until the right parameter.

  The partition function will first get a random pivot value from the array (choose the middle value). There will be an
  outer loop and 2 inner loops. The outer loop runs until the left pointer is greater than the right pointer. The first
  inner loop will increase the left pointer while the value of the left pointer is less than pivot.

  The second inner loop will increase the right pointer while the value of the right pointer is greater than the pivot.

  At the end of the outer loop check if the left pointer is less than the right, if it is then swap the values from the
  left and right indices.

  At the end of the function don’t forget to do a swap between the left and right.


- **Time Complexity**:

  Worst Case: O(n^2)

  Average Case: O(n log n)

  Best Case: O(n log n)


- **Space Complexity**:

  Worst Case: O(log n)

## Merge Sort

- **Definition**:

  A divide and conquer algorithm.

  Recursively divide the entire array by half into subsets until the subset is one, the base case.

  Once the base case is reached results are returned and sorted ascending left to right.

  Recursive calls are returned and the arrays double until the entire array is sorted.


- **Need to Know**:

  Know that it divides all the data into as small possible sets then compares them.


- **How to Implement**:

  Two functions will need to be created, a mergeSort function for recursion and a merge function to merge the left and
  right arrays.

  The mergeSort function will first check if the array length is 1. If it isn’t then we need to break the array in half
  into left and right pieces.

  To do this copy the current array into another one from the start to mid-index.

  Then call mergeSort for that array and save the result into an array called left.

  Afterwards, do the same for the right array, but this time copy over the array from midIndex to the end. Then merge
  the two arrays using the merge function.

  The merge function will have a left and right pointer, compare the initial values and store the smallest into a
  mergedArray. Then increment the counter of the array you got the smaller number from. Repeat this process until one of
  the counters reaches the end of an array and append the rest of the second array to the merged array.


- **Time Complexity**:

  Worst Case: O(n log n)

  Average Case: O(n log n)

  Best Case: O(n)


- **Space Complexity**:

  Worst Case: O(1)

## Bubble Sort

- **Definition**:

  Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in
  the wrong order.


- **How to Implement**:

  Have a high variable that will start from the highest index of the array. Have a boolean that will check if any values
  have swapped. If swapped is false then the pass through the array doesn't need any swaps and we can stop looping
  early.

  Create a do while loop that will run while swapped is true. Inside this loop create another loop.

  Inside this for loop iterate from index 0 until the high variable. If the value of the loop interaction is greater
  than the value of the loop interaction + 1 then swap the values and set swapped to high.

  After the for loop and at the end of the while loop, decrement the high variable because the value at that index is
  correct.


- **Time Complexity**:

  Best Case Sort: O(n^2)

  Average Case Sort: O(n^2)

  Worst Case Sort: O(n^2)


- **Space Complexity**:

  Worst Case: O(1)

## Selection Sort

- **Definition**:

  A comparison based sorting algorithm.


- **Need to Know**:

  Simple, but inefficient.


- **How to Implement**:

  Have a current index counter.

  Have a while loop that will run from the current index counter until the end of the array. Inside the while loop has a
  smallest index counter.

  Create a for loop to iterate over the array from the current index counter until the end. If the current value is
  smaller than the smallest value counter then update the smallest index to the current loop iteration.

  After the for loop and at the end of the while loop, swap the values of the current index and smallest index. Don’t
  forget to increment the current index.

- **Time Complexity**:

  Best Case Sort: O(n^2)

  Average Case Sort: O(n^2)

  Worst Case Sort: O(n^2)


- **Space Complexity**:

  Worst Case: O(1)