//lc 208

class TrieNode {
    constructor() {
        this.isWord = false;
        this.children = [];
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let temp = this.root;

        for (let i = 0; i < word.length; i++) {
            if (temp.children[word.charAt(i)] == null) {
                temp.children[word.charAt(i)] = new TrieNode();
            }
            temp = temp.children[word.charAt(i)];
        }
        temp.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let temp = this.root;

        for (let i = 0; i < word.length; i++) {
            if (temp.children[word.charAt(i)] == null) {
                return false;
            }
            temp = temp.children[word.charAt(i)];
        }
        return temp.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let temp = this.root;

        for (let i = 0; i < prefix.length; i++) {
            if (temp.children[prefix.charAt(i)] == null) {
                return false;
            }
            temp = temp.children[prefix.charAt(i)];
        }
        return true;
    }
}

let test = function () {
    let tri = new Trie();

    console.log(tri.search("a"));
    console.log(tri.insert("apple"));
    console.log(tri.search("apple"));
    console.log(tri.search("app"));
    console.log(tri.startsWith("app"));
    console.log(tri.insert("app"));
    console.log(tri.search("app"));

}

test();