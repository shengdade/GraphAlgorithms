import { Graph } from '../src/graph';

const G = new Graph(9);

G.addEdge(1, 2);
G.addEdge(1, 8);
G.addEdge(2, 3);
G.addEdge(2, 8);
G.addEdge(3, 6);
G.addEdge(4, 3);
G.addEdge(4, 5);
G.addEdge(5, 6);
G.addEdge(7, 8);

console.log(G.topologicalSort());
G.printDiscovery();
