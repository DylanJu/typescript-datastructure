class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(value) {
    this.data[this.top] = value;
    this.top++;
  }

  pop() {
    this.data = this.data.slice(0, this.data.length - 1);
    this.top--;
  }

  clear() {
    this.top = 0;
    this.data = [];
  }
}

export default Stack;
