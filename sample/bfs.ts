import { Graph } from '../src/graph';

const G = new Graph(8);

G.addEdge(0, 1);
G.addEdge(1, 0);
G.addEdge(0, 4);
G.addEdge(4, 0);
G.addEdge(1, 5);
G.addEdge(5, 1);
G.addEdge(2, 5);
G.addEdge(5, 2);
G.addEdge(5, 6);
G.addEdge(6, 5);
G.addEdge(2, 6);
G.addEdge(6, 2);
G.addEdge(2, 3);
G.addEdge(3, 2);
G.addEdge(3, 6);
G.addEdge(6, 3);
G.addEdge(6, 7);
G.addEdge(7, 6);
G.addEdge(3, 7);
G.addEdge(7, 3);

G.BFS(G.V[1]);
G.printDistance();
G.printPath(G.V[1], G.V[7]);
