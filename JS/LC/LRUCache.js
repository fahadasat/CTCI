/**
 * @param {number} capacity
 679
 */
class LRUCache {
    constructor(capacity) {
        this.maxSize = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key))
            return -1;

        const value = this.cache.get(key);

        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key))
            this.cache.delete(key);

        this.cache.set(key, value);

        if (this.cache.size > this.maxSize) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */