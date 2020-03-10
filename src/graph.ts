import { Color } from './color';
import { Vertex } from './vertex';
import { Edge } from './edge';
import { Heap } from './heap';

export class Graph {
  V: Array<Vertex>;
  E: Array<Edge>;
  private time: number = 0;

  constructor(n: number) {
    this.V = Array<Vertex>(n);
    this.E = Array<Edge>();
    for (let i = 0; i < n; i++) {
      this.V[i] = new Vertex(i);
    }
  }

  // add edge
  addEdge(src: number, dest: number, weight?: number) {
    this.E.push(new Edge(this.V[src], this.V[dest], weight));
    this.V[src].adj.push(this.V[dest]);
  }

  // breadth-first search
  BFS(s: Vertex) {
    for (const u of this.V) {
      u.color = Color.WHITE;
      u.d = Infinity;
    }
    s.color = Color.GREY;
    s.d = 0;
    const queue: Array<Vertex> = Array();
    queue.push(s);
    while (queue.length !== 0) {
      const u = queue.shift()!;
      for (const v of u.adj) {
        if (v.color === Color.WHITE) {
          v.color = Color.GREY;
          v.d = u.d! + 1;
          v.parent = u;
          queue.push(v);
        }
      }
      u.color = Color.BLACK;
    }
  }

  // depth-first search
  DFS() {
    for (const u of this.V) {
      u.color = Color.WHITE;
    }
    this.time = 0;
    for (const u of this.V) {
      if (u.color === Color.WHITE) {
        this.DFSVisit(u);
      }
    }
  }

  DFSVisit(u: Vertex) {
    this.time = this.time + 1;
    u.d = this.time;
    u.color = Color.GREY;
    for (const v of u.adj) {
      if (v.color === Color.WHITE) {
        v.parent = u;
        this.DFSVisit(v);
      }
    }
    u.color = Color.BLACK;
    this.time = this.time + 1;
    u.f = this.time;
  }

  // topological sort
  topologicalSort() {
    this.DFS();
    this.V.sort((a, b) => b.f! - a.f!);
    return this.V.map(v => v.id);
  }

  // initialize single source
  initializeSingleSource(s: Vertex) {
    for (const v of this.V) {
      v.d = Infinity;
    }
    s.d = 0;
  }

  // get weight of an edge
  getWeight(u: Vertex, v: Vertex) {
    return this.E.find(e => e.first === u && e.second === v)?.weight;
  }

  // relax
  relax(u: Vertex, v: Vertex) {
    const weight = this.getWeight(u, v)!;
    if (v.d! > u.d! + weight) {
      v.d = u.d! + weight;
      v.parent = u;
    }
  }

  // Bellman-Ford algorithm
  BellmanFord(s: Vertex) {
    this.initializeSingleSource(s);
    for (let i = 1; i < this.V.length - 1; i++) {
      for (const e of this.E) {
        this.relax(e.first, e.second);
      }
    }
    for (const e of this.E) {
      if (e.second.d! > e.first.d! + e.weight!) {
        return false;
      }
    }
    return true;
  }

  // DAG shortest paths
  DAGShortestPath(s: Vertex) {
    this.topologicalSort();
    this.initializeSingleSource(s);
    for (const u of this.V) {
      for (const v of u.adj) {
        this.relax(u, v);
      }
    }
  }

  // Dijkstra algorithm
  Dijkstra(s: Vertex) {
    this.initializeSingleSource(s);
    const S = new Set();
    const Q = new Heap(this.V.slice());
    while (Q.size() !== 0) {
      const u = Q.poll()!;
      S.add(u);
      for (const v of u.adj) {
        this.relax(u, v);
      }
    }
  }

  // print path from s to v
  printPath(s: Vertex, v: Vertex) {
    if (v === s) {
      console.log(s.id);
    } else if (v.parent === undefined) {
      console.log(`no path from ${s.id} to ${v.id} exists.`);
    } else {
      this.printPath(s, v.parent);
      console.log(v.id);
    }
  }

  // print distances of all nodes
  printDistance() {
    for (const v of this.V) {
      console.log(`The distance to node ${v.id} is ${v.d}`);
    }
  }

  // print discovery and finish time of all nodes
  printDiscovery() {
    for (const v of this.V) {
      console.log(`The discovery/finish time of node ${v.id} is ${v.d}/${v.f}`);
    }
  }
}
