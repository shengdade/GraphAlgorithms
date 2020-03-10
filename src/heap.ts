import { Vertex } from './vertex';

export class Heap {
  data: Array<Vertex>;
  comparator: (u: Vertex, v: Vertex) => number;

  constructor(data: Array<Vertex> = []) {
    this.data = data;
    this.comparator = (u, v) => u.d! - v.d!;
    this.heapify();
  }

  // O(n)
  heapify(): void {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek(): Vertex | undefined {
    if (this.size() === 0) return undefined;
    return this.data[0];
  }

  // O(log(n))
  offer(value: Vertex): void {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll(): Vertex | undefined {
    if (this.size() === 0) return undefined;
    const result = this.data[0];
    const last = this.data.pop()!;
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  // O(log(n))
  bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index: number): void {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(index1: number, index2: number): void {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1]
    ];
  }

  // O(1)
  size(): number {
    return this.data.length;
  }
}
