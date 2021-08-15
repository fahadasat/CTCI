public class StackTest {
    public static void main(String[] args) {
        Stack stack = new Stack(5);

        stack.push(10);
        stack.push(1);
        System.out.println(stack.toString());

        stack.pop();
        System.out.println(stack.toString());
        stack.pop();
        System.out.println(stack.toString());
        stack.pop();
        System.out.println(stack.toString());
    }
}

class StackNode {
    private StackNode next = null;
    private StackNode head = null;
    private Object data = null;

    public StackNode getHead() {
        return head;
    }

    public void setHead(StackNode head) {
        this.head = head;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public StackNode getNext() {
        return next;
    }

    public void setNext(StackNode next) {
        this.next = next;
    }

    public StackNode() {

    }
}

class Stack {

    private StackNode top;

    public Stack() {
        this.top = null;
    }

    public Stack(Object data) {
        this.top = new StackNode();
        this.top.setData(data);
    }

    public void push(Object data) {
        if (this.top == null) {
            this.top = new StackNode();
            this.top.setData(data);
        } else {
            StackNode newNode = new StackNode();
            newNode.setData(data);
            this.top.setNext(newNode);
            this.top.getNext().setHead(this.top);
            this.top = this.top.getNext();
        }
    }

    public void pop() {
        if (this.top == null) return;

        if (this.top.getHead() == null) {
            this.top = null;
            return;
        }

        this.top = this.top.getHead();
        this.top.setNext(null);
    }

    @Override
    public String toString() {
        StringBuilder list = new StringBuilder();

        if (this.top == null || this.top.getData() == null) return "Empty list.";

        list = new StringBuilder(String.valueOf(this.top.getData()) + " ");
        StackNode current = this.top;
        while (current.getHead() != null) {
            current = current.getHead();
            list.append(String.valueOf(current.getData())).append(" ");
        }

        return list.toString();
    }

}