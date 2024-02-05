// B1927. 최소 힙
// [백준] https://www.acmicpc.net/problem/1927

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // swap 함수
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 왼쪽 자식의 인덱스
  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  // 오른쪽 자식의 인덱스
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  // 부모의 인덱스
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  // 힙 추가 연산
  heappush(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 힙 삭제 연산
  heappop() {
    // 힙이 비어있는 경우 0을 반환
    if (this.heap.length === 0) {
      return 0;
    }

    // 힙의 최소값
    const rootNode = this.heap[0];

    // 힙에 1개만 있는 경우
    if (this.heap.length === 1) {
      this.heap = [];
    } else {
      // 힙의 끝에 있는 값을 루트 노드로 이동
      this.heap[0] = this.heap.pop();
      // 루트 노드에서 heapifyDown 정렬 수행
      this.heapifyDown();
    }

    // 루트 노드 반환
    return rootNode;
  }

  // 힙에 추가된 노드를 부모 노드와 비교하여, 최소 힙의 조건에 맞을 때 까지 수행
  heapifyUp() {
    let index = this.heap.length - 1;
    // 추가된 노드
    const insertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 추가된 노드가 부모 노드보다 작은 경우 -> 서로 위치 교환
      if (insertedNode < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }

    this.heap[index] = insertedNode;
  }

  // (1) 루트 노드를 삭제
  // (2) 마지막 노드를 루트로 이동
  // (3) 새로운 루트 노드와 자식 노드의 값을 비교하여, 최소 힙의 조건에 맞을 때 까지 수행
  heapifyDown() {
    let index = 0;
    // 루트 노드
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // 두 자식 중 더 작은 노드
      const smallerChildIndex =
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (rootNode > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
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
