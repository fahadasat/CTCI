import java.util.Arrays;

public class ArrayListTest {
    public static void main(String[] args) {

        ArrayLists list = new ArrayLists();

        list.push(34);
        list.push(35);
        list.push(36);
        list.push(34);
        System.out.println(list.toArray());

        list.remove(34);
        list.remove(-1);
        list.remove(0);
        list.remove(0);
        list.remove(0);
        list.remove(0);
        list.remove(0);
        list.remove(0);
        list.remove(0);
        System.out.println(list.toArray());

        list.push(34);
        System.out.println(list.toArray());
    }
}

class ArrayLists {

    private int size = -1;
    private int[] array;

    public ArrayLists() {
        this.array = new int[0];
    }

    public ArrayLists(int size) {
        this.array = new int[size];
    }

    public int[] getArray() {
        return array;
    }

    public void setArray(int[] array) {
        this.array = array;
    }

    public void push(int element) {
        this.size++;
        int[] tempArray;
        if (size >= array.length) {
            tempArray = new int[(this.array.length + 1) * 2];

            for (int i = 0; i < this.array.length; i++) tempArray[i] = array[i];

            tempArray[this.array.length] = element;

            this.array = tempArray;
        } else {
            this.array[size] = element;
        }
    }

    public void remove(int index) {
        if (index < 0 || index > this.array.length - 1) return;

        if (this.array.length == 1) {
            this.array = new int[0];
            return;
        }

        int[] tempArray = new int[this.array.length - 1];
        boolean found = false;
        for (int i = 0; i < this.array.length - 1; i++) {
            if (i == index) {
                found = true;
            }
            if (found) tempArray[i] = array[i + 1];
            else tempArray[i] = array[i];
        }
        this.array = tempArray;
    }

    public String toArray() {
        return Arrays.toString(this.array);
    }
}