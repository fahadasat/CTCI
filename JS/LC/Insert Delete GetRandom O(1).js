
var RandomizedSet = function() {
    this.nums = [];
    this.indices = new Map ();


};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.indices.has(val)) return false;

    this.indices.set(val, this.nums.length);
    this.nums.push(val);

    // console.log("----insert----")
    // console.log(this.nums);
    // console.log(this.indices);

    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
// lc 380
RandomizedSet.prototype.remove = function(val) {
    if(!this.indices.has(val)) return false;

    let indexToRemove = this.indices.get(val);
    this.indices.delete(val);

    [this.nums[indexToRemove], this.nums[this.nums.length - 1]] = [this.nums[this.nums.length - 1], this.nums[indexToRemove]];

    this.nums.pop();
    this.indices.set(this.nums[indexToRemove], indexToRemove);

    // console.log("----remove----")
    // console.log(this.nums);
    // console.log(this.indices);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */