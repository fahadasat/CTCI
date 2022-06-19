//211

class TrieNode {
    constructor() {
        this.children = [];
        this.isWord = false;
    }
}


class WordDictionary {
    constructor() {
        this.head = new TrieNode();
    }

    addWord(word) {
        let node = this.head;
        for (let i = 0; i < word.length; i++) {
            let character = node.children[word.charAt(i)] || new TrieNode();
            node.children[word.charAt(i)] = character;
            node = character;
        }
        node.isWord = true;
    }

    search(word) {
        // let node = this.head;
        return this.checkWord(this.head, word, 0);
    }

    checkWord(node, word, index) {
        if (index === word.length) return node.isWord;
        if (!node.children) return false;

        if (word.charAt(index) === ".") {
            for (let children in node.children) {
                if (this.checkWord(node.children[children], word, index + 1)) return true;
            }
        } else if (node.children[word.charAt(index)] != null) {
            return this.checkWord(node.children[word.charAt(index)], word, index + 1)
        }

        return false;
    }

};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */