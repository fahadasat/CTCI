public class LinkedListTest {
    public static void main(String[] args) {

        LinkedList list = new LinkedList(5);

        list.addEnd(15);
        System.out.println(list);
        list.addEnd(11);
        System.out.println(list);

        list.addStart(10);
        System.out.println(list);
        list.addStart(7);
        System.out.println(list);

//        list.removeHead();
//        System.out.println(list);
//        list.removeHead();
//        System.out.println(list);
//        list.removeHead();
//        System.out.println(list);
//        list.removeHead();
//        System.out.println(list);
//        list.removeHead();
//        System.out.println(list);
//        list.removeHead();
//        System.out.println(list);

//        list.removeTail();
//        System.out.println(list);
//        list.removeTail();
//        System.out.println(list);

        list.removeFirstOccurrence(7);
        System.out.println(list);

        list.removeFirstOccurrence(11);
        System.out.println(list);

        list.addStart(5);
        System.out.println(list);
        list.addStart(7);
        System.out.println(list);
        list.addEnd(7);
        System.out.println(list);

        list.removeFirstOccurrence(5);
        System.out.println(list);

//        list.removeTail();
//        System.out.println(list);
//        list.removeTail();
//        System.out.println(list);
//        list.removeTail();
//        System.out.println(list);


    }
}

class Node {
    private Node next = null;
    private Node head = null;
    private Object data = null;

    public Node getHead() {
        return head;
    }

    public void setHead(Node head) {
        this.head = head;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    public Node() {

    }
}

class LinkedList {

    private Node head;
    private Node tail;

    public LinkedList() {
        this.head = null;
        this.tail = null;
    }

    public LinkedList(Object data) {
        this.head = new Node();
        this.tail = this.head;
        this.head.setData(data);
    }

    public void addEnd(Object data) {
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

    public void addStart(Object data) {
        if (this.head == null) {
            this.head = new Node();
            this.tail = this.head;
            this.head.setData(data);
        } else {
            Node newNode = new Node();
            newNode.setData(data);
            newNode.setNext(this.head);
            this.head.setHead(newNode);
            this.head = newNode;
        }
    }

    public void removeFirstOccurrence(Object data) {
        if (this.head == null) return;
        if (this.head.getNext() == null && this.head.getData() != data) return;
        if (this.head.getData() == data) {
            removeHead();
            return;
        }
        Node temp = head;
        while (temp.getNext().getNext() != null && temp.getData() != data)
            temp = temp.getNext();
        if (temp.getData() == data) {
            temp.getHead().setNext(temp.getNext());
            temp.getNext().setHead(temp.getHead());
            return;
        }
        if (this.tail.getData() == data) removeTail();
    }

    public void removeHead() {
        if (this.head == null) return;

        if (this.head.getNext() == null) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.getNext();
        this.head.setHead(null);
    }

    public void removeTail() {
        if (this.head == null) return;

        if (this.tail.getHead() == null) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.tail = this.tail.getHead();
        this.tail.setNext(null);
    }

    @Override
    public String toString() {
        StringBuilder list;

        if (this.head == null || this.head.getData() == null) return "Empty list.";

        list = new StringBuilder(this.head.getData() + " ");
        Node current = this.head;
        while (current.getNext() != null) {
            current = current.getNext();
            list.append(current.getData()).append(" ");
        }

        return list.toString();
    }

}


