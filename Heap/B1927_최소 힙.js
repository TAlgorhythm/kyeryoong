// B1927. 최소 힙
// [백준] https://www.acmicpc.net/problem/1927

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  heappush(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heappop() {
    if (this.size() === 0) {
      return 0;
    } else if (this.size() === 1) {
      const rootNode = this.heap[0];
      this.heap = [];
      return rootNode;
    } else {
      const rootNode = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return rootNode;
    }
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const insertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] > insertedNode) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else {
        break;
      }
    }

    this.heap[index] = insertedNode;
  }

  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex] < rootNode) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else {
        break;
      }
    }

    this.heap[index] = rootNode;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
const array = [];

for (let i = 0; i < n; i++) {
  array.push(Number(input[i + 1]));
}

function solution(array) {
  const heap = new MinHeap();
  const results = [];

  for (let i = 0; i < array.length; i++) {
    const req = Number(input[i + 1]);

    if (req === 0) {
      results.push(heap.heappop());
    } else {
      heap.heappush(req);
    }
  }

  console.log(results.join("\n"));
}

solution(array);
