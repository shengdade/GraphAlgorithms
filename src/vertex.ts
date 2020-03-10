import { Color } from './color';

export class Vertex {
  id: number;
  adj: Array<Vertex>;
  color?: Color;
  parent?: Vertex;
  d?: number;
  f?: number;

  constructor(id: number) {
    this.id = id;
    this.adj = Array();
  }
}
