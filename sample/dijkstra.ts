import { Graph } from '../src/graph';

const G = new Graph(5);

G.addEdge(0, 1, 10);
G.addEdge(1, 2, 1);
G.addEdge(0, 3, 5);
G.addEdge(1, 3, 2);
G.addEdge(3, 1, 3);
G.addEdge(3, 4, 2);
G.addEdge(2, 4, 4);
G.addEdge(4, 2, 6);
G.addEdge(3, 2, 9);
G.addEdge(4, 0, 7);

G.Dijkstra(G.V[0]);
G.printDistance();
