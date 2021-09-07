public class TrieTest {
    public static void main(String[] args) {

    }
}

class TrieNode {
    private final int alphabetSize = 26;
    private boolean isWord;
    private TrieNode[] children;

    public TrieNode() {
        this.children = new TrieNode[alphabetSize];
    }

    public boolean isWord() {
        return isWord;
    }

    public void setWord(boolean word) {
        isWord = word;
    }

    public TrieNode[] getChildren() {
        return children;
    }

    public void setChildren(TrieNode[] children) {
        this.children = children;
    }
}

class Trie {
    private TrieNode root;

    public Trie() {
        this.root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode temp = this.root;
        for (int i = 0; i < word.length(); i++) {
            if (temp.getChildren()[word.charAt(i) - 'a'] == null) {
                temp.getChildren()[word.charAt(i) - 'a'] = new TrieNode();
            }
            temp = temp.getChildren()[word.charAt(i) - 'a'];
        }
        temp.setWord(true);
    }

    public boolean search(String word) {
        TrieNode temp = this.root;
        for (int i = 0; i < word.length(); i++) {
            if (temp.getChildren()[word.charAt(i) - 'a'] == null) {
                return false;
            }
            temp = temp.getChildren()[word.charAt(i) - 'a'];
        }
        return temp.isWord();
    }

    public boolean startsWith(String prefix) {
        TrieNode temp = this.root;
        for (int i = 0; i < prefix.length(); i++) {
            if (temp.getChildren()[prefix.charAt(i) - 'a'] == null) {
                return false;
            }
            temp = temp.getChildren()[prefix.charAt(i) - 'a'];
        }
        return true;
    }

}
