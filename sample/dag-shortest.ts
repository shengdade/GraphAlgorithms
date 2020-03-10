import { Graph } from '../src/graph';

const G = new Graph(6);

G.addEdge(0, 1, 5);
G.addEdge(1, 2, 2);
G.addEdge(2, 3, 7);
G.addEdge(3, 4, -1);
G.addEdge(4, 5, -2);
G.addEdge(0, 2, 3);
G.addEdge(1, 3, 6);
G.addEdge(3, 5, 1);
G.addEdge(2, 4, 4);
G.addEdge(2, 5, 5);

G.DAGShortestPath(G.V[1]);
G.printDistance();
