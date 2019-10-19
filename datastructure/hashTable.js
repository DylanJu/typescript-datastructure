export class HashTable {
  constructor(size = 32) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }

  hash(value) {
    let hash = 0;

    for (let i = 0; i < value.length; i++) {
      hash += value[i].charCodeAt() - 96;
    }

    return hash % this.size;
  }

  set(key, value) {
    const hashKey = this.hash(key);

    // if (this.buckets[hashKey]) {
    //   this.buckets = new Node(value);
    // } else {
      this.buckets[hashKey] = new Node(value);
    // }

  }

  has(key) {
    const hashKey = this.hash(key);

    return this.buckets[hashKey] !== null;

    // for (let i = 0; i < this.size; i++) {
    //   if (this.buckets[i] === value) {
    //     return true;
    //   }
    // }

    // return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
