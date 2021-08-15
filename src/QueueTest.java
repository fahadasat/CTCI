public class QueueTest {
    public static void main(String[] args) {
        Queue queue = new Queue(5);
        System.out.println(queue.toString());

        queue.add(15);
        queue.add(57);
        System.out.println(queue.toString());

        queue.remove();
        System.out.println(queue.toString());

        queue.remove();
        System.out.println(queue.toString());

        queue.add(22);
        System.out.println(queue.toString());
    }
}

class QueueNode {
    private QueueNode next = null;
    private QueueNode head = null;
    private Object data = null;

    public QueueNode getHead() {
        return head;
    }

    public void setHead(QueueNode head) {
        this.head = head;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public QueueNode getNext() {
        return next;
    }

    public void setNext(QueueNode next) {
        this.next = next;
    }

    public QueueNode() {

    }
}

@SuppressWarnings("DuplicatedCode")
class Queue {

    private Node head;
    private Node tail;

    public Queue() {
        this.head = null;
        this.tail = null;
    }

    public Queue(Object data) {
        this.head = new Node();
        this.tail = this.head;
        this.head.setData(data);
    }

    public void add(Object data) {
        if (this.head == null) {
            this.head = new Node();
            this.tail = this.head;
            this.head.setData(data);
        } else {
            Node newNode = new Node();
            newNode.setData(data);
            this.tail.setNext(newNode);
            this.tail.getNext().setHead(this.tail);
            this.tail = this.tail.getNext();
        }
    }

    public void remove() {
        if (this.head == null) return;

        if (this.head.getNext() == null) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.getNext();
        this.head.setHead(null);
    }

    @Override
    public String toString() {
        if (this.head == null || this.head.getData() == null) return "Empty list.";

        StringBuilder list = new StringBuilder(this.head.getData() + " ");
        Node current = this.head;
        while (current.getNext() != null) {
            current = current.getNext();
            list.append(current.getData()).append(" ");
        }

        return list.toString();
    }

}