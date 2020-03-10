import { Graph } from '../src/graph';

const G = new Graph(5);

G.addEdge(0, 1, 6);
G.addEdge(1, 2, 5);
G.addEdge(2, 1, -2);
G.addEdge(0, 3, 7);
G.addEdge(3, 4, 9);
G.addEdge(4, 0, 2);
G.addEdge(1, 3, 8);
G.addEdge(1, 4, -4);
G.addEdge(4, 2, 7);
G.addEdge(3, 2, -3);

G.BellmanFord(G.V[0]);
G.printDistance();
