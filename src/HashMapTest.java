public class HashMapTest {

    public static void main(String[] args) {
        HashMap map = new HashMap();

        map.put("California", "Los Angeles");
        map.put("Colorado", "Denver");
        map.put("Washington", "Seattle");

        System.out.println(map.get("California"));

        map.remove("California");
        System.out.println(map.get("California"));

        map.put("California", "Los Angeles");
        map.put("California", "San Francisco");
        System.out.println(map.get("California"));
        map.put("New York", "New York");
        map.put("Oregon", "Portland");
        map.put("Texas", "Dallas");
    }

}

class HashNode {
    private HashNode next = null;
    private HashNode head = null;
    private Object data = null;
    private String key;

    public HashNode() {

    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public HashNode getHead() {
        return head;
    }

    public void setHead(HashNode head) {
        this.head = head;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public HashNode getNext() {
        return next;
    }

    public void setNext(HashNode next) {
        this.next = next;
    }
}

@SuppressWarnings("DuplicatedCode")
class HashList {

    private HashNode head;
    private HashNode tail;

    public HashNode getHead() {
        return head;
    }

    public void setHead(HashNode head) {
        this.head = head;
    }

    public HashNode getTail() {
        return tail;
    }

    public void setTail(HashNode tail) {
        this.tail = tail;
    }

    public HashList() {
        this.head = null;
        this.tail = null;
    }

    public HashList(Object data, String key) {
        this.head = new HashNode();
        this.tail = this.head;
        this.head.setData(data);
        this.head.setKey(key);
    }

    public void addEnd(Object data, String key) {
        if (this.head == null) {
            this.head = new HashNode();
            this.tail = this.head;
            this.head.setData(data);
            this.head.setKey(key);
        } else {
            HashNode newNode = new HashNode();
            newNode.setData(data);
            newNode.setKey(key);
            this.tail.setNext(newNode);
            this.tail.getNext().setHead(this.tail);
            this.tail = this.tail.getNext();
        }
    }

    public void removeFirstOccurrence(String key) {
        if (this.head == null) return;
        if (this.head.getNext() == null && !this.head.getKey().equals(key)) return;
        if (this.head.getKey().equals(key)) {
            removeHead();
            return;
        }
        HashNode temp = head;
        while (temp.getNext().getNext() != null && !temp.getKey().equals(key))
            temp = temp.getNext();
        if (temp.getKey().equals(key)) {
            temp.getHead().setNext(temp.getNext());
            temp.getNext().setHead(temp.getHead());
            return;
        }
        if (this.tail.getKey().equals(key)) removeTail();
    }

    public Object returnFirstOccurrence(String key) {
        if (this.head == null) return null;
        if (this.head.getNext() == null && !this.head.getKey().equals(key)) return null;
        if (this.head.getKey().equals(key)) {
            return this.head.getData();
        }
        HashNode temp = head;
        while (temp.getNext() != null && !temp.getKey().equals(key))
            temp = temp.getNext();
        if (temp.getKey().equals(key)) {
            return temp.getData();
        }
        if (this.tail.getKey().equals(key)) return this.tail.getData();
        return null;
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
}

class HashMap {
    private int arrayLength = 113;
    private int size = 0;

    private HashList[] hashMap;

    public HashMap() {
        hashMap = new HashList[this.arrayLength];
    }

    private int hash(String data) {
        int hash = 17;

        for (int i = 0; i < data.length(); i++) {
            hash = (13 * hash * Character.codePointAt(data, i)) % this.arrayLength;
        }
        return hash;
    }

    public void put(String key, Object data) {
        //duplicates will be added ¯\_(ツ)_/¯
        if (size > this.hashMap.length / 2) this.resize();
        this.size++;
        int hash = hash(key);

        if (this.hashMap[hash] == null) {
            HashList list = new HashList();
            this.hashMap[hash] = list;
        }

        this.hashMap[hash].addEnd(data, key);
    }

    public Object get(String key) {
        int hash = hash(key);


        return this.hashMap[hash].returnFirstOccurrence(key);

    }

    public void remove(String key) {
        int hash = hash(key);

        this.hashMap[hash].removeFirstOccurrence(key);
    }


    public int size() {
        return this.size;
    }

    public void resize() {
        this.arrayLength *= 2;
        this.size = 0;
        HashList[] oldMap = hashMap;

        hashMap = new HashList[this.arrayLength];

        for (HashList hashList : oldMap) {
            if (hashList == null) continue;
            else if (hashList.getHead() == null) continue;

            this.put(hashList.getHead().getKey(), hashList.getHead().getData());

            HashNode temp = hashList.getHead();
            while (temp.getNext() != null) {
                temp = temp.getNext();
                this.put(temp.getKey(), temp.getData());
            }
        }
    }
}


