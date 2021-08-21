public class BSTTest {
    public static void main(String[] args) {
        BST tree = new BST(10, "data 10");
        tree.insert(5, "data 5");
        tree.insert(20, "data 20");
        tree.insert(3, "data 3");
        tree.insert(7, "data 7 ");
        tree.insert(30, "data 30");

        System.out.println(tree.search(6));
        System.out.println(tree.search(7));
        System.out.println();

        tree.inOrder();
        System.out.println();

        tree.preOrder();
        System.out.println();

        tree.postOrder();
        System.out.println();
    }
}

class BSTNode {
    private Object data;
    private int key;
    private BSTNode right, left;

    public BSTNode(int key, Object data) {
        this.key = key;
        this.data = data;
        this.right = this.left = null;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }

    public BSTNode getRight() {
        return right;
    }

    public void setRight(BSTNode right) {
        this.right = right;
    }

    public BSTNode getLeft() {
        return left;
    }

    public void setLeft(BSTNode left) {
        this.left = left;
    }
}

class BST {
    private BSTNode head;

    public BST() {
        this.head = null;
    }

    public BST(int key, Object data) {
        this.head = new BSTNode(key, data);
    }

    public void insert(int key, Object data) {
        this.head = insertRec(this.head, key, data);
    }

    private BSTNode insertRec(BSTNode head, int key, Object data) {
        if (head == null) {
            head = new BSTNode(key, data);
            return head;
        }
        if (head.getKey() > key) {
            head.setLeft(insertRec(head.getLeft(), key, data));
        } else if (head.getKey() < key) {
            head.setRight(insertRec(head.getRight(), key, data));
        } else if (head.getKey() == key) {
            head.setData(data);
        }
        return head;
    }

    public Object search(int key) {
        return searchRec(this.head, key);
    }

    private Object searchRec(BSTNode head, int key) {
        if (head == null) return null;

        if (head.getKey() > key) {
            return searchRec(head.getLeft(), key);
        } else if (head.getKey() < key) {
            return searchRec(head.getRight(), key);
        } else {
            return head.getData();
        }
    }

    public void inOrder() {
        inOrderRec(this.head);
    }

    private void inOrderRec(BSTNode head) {
        if (head != null) {
            inOrderRec(head.getLeft());
            System.out.println("Key: " + head.getKey() + " Data: " + head.getData());
            inOrderRec(head.getRight());
        }
    }

    public void preOrder() {
        preOrderRec(this.head);
    }

    private void preOrderRec(BSTNode head) {
        if (head != null) {
            System.out.println("Key: " + head.getKey() + " Data: " + head.getData());
            preOrderRec(head.getLeft());
            preOrderRec(head.getRight());
        }
    }

    public void postOrder() {
        postOrderRec(this.head);
    }

    private void postOrderRec(BSTNode head) {
        if (head != null) {
            postOrderRec(head.getLeft());
            postOrderRec(head.getRight());
            System.out.println("Key: " + head.getKey() + " Data: " + head.getData());
        }
    }
}