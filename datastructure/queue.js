class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    // const reverseData = this.data.reverse();
    // reverseData[this.index] = value;
    // this.index++;
    // this.data = reverseData.reverse();

    const originalData = [...this.data];
    this.data = [value];

    for (let i = 0; i < originalData.length; i++) {
      this.data[i + 1] = originalData[i];
    }
  }

  dequeue() {
    this.data = this.data.slice(1, this.data.length);
  }

  front() {

  }

  back() {

  }
}

export default Queue;
