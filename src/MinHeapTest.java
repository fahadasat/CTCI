public class MinHeapTest {
    public static void main(String[] args) {
        MinHeap minHeap = new MinHeap(100);

        minHeap.insert(4);
        minHeap.insert(50);
        minHeap.insert(23);
        minHeap.insert(88);
        minHeap.insert(90);
        minHeap.insert(32);
        minHeap.insert(74);
        minHeap.insert(96);
        System.out.println(minHeap.extractMin());
        minHeap.insert(1000);

    }
}

class MinHeap {

    private int[] heap;
    private final int maxSize;
    private int nextInsert = 0;

    public MinHeap(int arraySize) {
        this.maxSize = arraySize;
        this.heap = new int[arraySize];
    }

    public void insert(int data) {
        if (this.nextInsert > this.maxSize - 1) {
            return;
        }
        this.heap[this.nextInsert] = data;
        bubbleUp(this.nextInsert);
        this.nextInsert++;
    }

    //recursive
    private void bubbleUp(int index) {
        if (index != 0 && this.heap[index] < this.heap[(index - 1) / 2]) {
            int temp = this.heap[index];
            this.heap[index] = this.heap[(index - 1) / 2];
            this.heap[(index - 1) / 2] = temp;
            bubbleUp((index - 1) / 2);
        }
    }

    public Object extractMin() {
        int min = this.heap[0];
        this.heap[0] = this.heap[this.nextInsert - 1];
        this.nextInsert--;
        bubbleDown();
        return min;
    }

    //iterative
    private void bubbleDown() {
        for (int i = 0; i < this.nextInsert; i++) {
            //left child doesnt exist => no child exists
            if ((i * 2 + 1) > this.nextInsert) return;
                //left child exists
            else {
                //right child exists
                if ((i * 2 + 2) < this.nextInsert) {
                    //left child is smaller than right
                    if (this.heap[i * 2 + 1] < this.heap[i * 2 + 2]) {
                        //left child is smaller than parent => swap
                        if (this.heap[i * 2 + 1] < this.heap[i]) {
                            swap(i * 2 + 1, i);
                        }
                    }
                    //right child is smaller than left
                    else if (this.heap[i * 2 + 1] > this.heap[i * 2 + 2]) {
                        //right child is smaller than parent => swap
                        if (this.heap[i * 2 + 2] < this.heap[i]) {
                            swap(i * 2 + 2, i);
                        }
                    }
                }
                //right child doesnt exist
                else {
                    //left child is smaller than parent => swap
                    if (this.heap[i * 2 + 1] < this.heap[i]) {
                        swap(i * 2 + 1, i);
                    }
                }
            }
        }
    }

    private void swap(int indexOne, int indexTwo) {
        int temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

}