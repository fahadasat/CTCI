## StringBuilder/StringBuffer

- Definition:

  Creates a resizable array of strings and appends instead of creating a new string.
  ```java
  sentence = sentence + w
  
  sentence.append(word)
  ```
  String Builder: Is faster because it is not synchronized.

  String Buffer: Is synchronized, meaning it blocks the next thread's call as long as the previous thread's execution is
  not finished.


