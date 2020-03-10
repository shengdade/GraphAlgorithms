import { Vertex } from './vertex';

export class Edge {
  first: Vertex;
  second: Vertex;
  weight?: number;

  constructor(u: Vertex, v: Vertex, weight?: number) {
    this.first = u;
    this.second = v;
    this.weight = weight;
  }
}
