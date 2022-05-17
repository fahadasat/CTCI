class MinHeap {
    constructor(comparator) {
        let minComparator = (a, b) => {
            return a - b;
        };

        // this.size = 0;
        this.values = [];
        // this.comparator = comparator || minComparator;
    }

    add(number) {
        this.values.push(number);
        // this.size
        this._bubbleUp();
    }

    remove() {
        let root = this.values[0];
        let lastValue = this.values.pop();

        if (this.values.length) {
            this.values[0] = lastValue;
            this._bubbleDown();
        }

        return root;
    }

    peak() {
        return this.values[0] || null;
    }

    _bubbleUp() {
        let index = this.values.length - 1;
        let parent = Math.floor((index - 1) / 2);

        while (this.values[index] < this.values[parent]) {
            [this.values[index], this.values[parent]] = [this.values[parent], this.values[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    _bubbleDown() {
        let index = 0;
        let leftChild = index * 2 + 1;
        let rightChild = index * 2 + 2;

        if (this.values[leftChild] == null)
            return;
        let smallest = (this.values[rightChild] < this.values[leftChild]) ? rightChild : leftChild;

        while (this.values[smallest] < this.values[index]) {
            [this.values[smallest], this.values[index]] = [this.values[index], this.values[smallest]];

            index = smallest;
            leftChild = index * 2 + 1;
            rightChild = index * 2 + 2;

            if (this.values[leftChild] == null)
                return;
            smallest = (this.values[rightChild] < this.values[leftChild]) ? rightChild : leftChild;
        }
    }
}

class MaxHeap {
    constructor() {
        this.values = [];
    }

    add(number) {
        this.values.push(number);
        this._bubbleUp();
    }

    remove() {
        let root = this.values[0];
        let lastValue = this.values.pop();

        if (this.values.length) {
            this.values[0] = lastValue;
            this._bubbleDown();
        }

        return root;
    }

    peak() {
        return this.values[0] || null;
    }

    _bubbleUp() {
        let index = this.values.length - 1;
        let parent = Math.floor((index - 1) / 2);

        while (this.values[index] > this.values[parent]) {
            [this.values[index], this.values[parent]] = [this.values[parent], this.values[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    _bubbleDown() {
        let index = 0;
        let leftChild = index * 2 + 1;
        let rightChild = index * 2 + 2;

        if (this.values[leftChild] == null)
            return;
        let largest = (this.values[rightChild] > this.values[leftChild]) ? rightChild : leftChild;

        while (this.values[largest] > this.values[index]) {
            [this.values[largest], this.values[index]] = [this.values[index], this.values[largest]];

            index = largest;
            leftChild = index * 2 + 1;
            rightChild = index * 2 + 2;

            if (this.values[leftChild] == null)
                return;
            largest = (this.values[rightChild] < this.values[leftChild]) ? rightChild : leftChild;
        }
    }
}

let minHeap = new MinHeap();

// minHeap.add(2);
// minHeap.add(1);
// minHeap.add(3);
// minHeap.add(4);
// minHeap.add(5);
// console.log(minHeap.values);
// minHeap.remove();
// console.log(minHeap.values);
// minHeap.add(1);
// console.log(minHeap.values);
// minHeap.add(8);
// console.log(minHeap.values);
// minHeap.add(16);
// console.log(minHeap.values);

let maxHeap = new MaxHeap();

maxHeap.add(2);
maxHeap.add(1);
maxHeap.add(3);
maxHeap.add(4);
maxHeap.add(5);
console.log(maxHeap.values);
maxHeap.remove(5);
console.log(maxHeap.values);