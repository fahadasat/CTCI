import java.util.HashMap;
import java.util.LinkedList;

public class GraphTest {
    public static void main(String[] args) {
        Graph graph = new Graph();

        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 0);
        graph.addEdge(2, 3);
        graph.addEdge(3, 2);

        System.out.println(graph.printGraph());

        System.out.println("Nodes/Vertices: " + graph.getVertexCount());
        System.out.println("Edges: " + graph.getEdgeCount());
    }
}

class Graph {
    private HashMap<Integer, LinkedList<Integer>> map = new HashMap<>();

    //assuming undirected graph
    public void addEdge(int source, int destination) {
        if (!this.map.containsKey(source)) addVertex(source);
        if (!this.map.containsKey(destination)) addVertex(destination);

        if (!this.map.get(source).contains(destination)) this.map.get(source).add(destination);
        if (!this.map.get(destination).contains(source)) this.map.get(destination).add(source);
    }

    public void addVertex(int vertex) {
        //check if vertex in graph
        if (!this.map.containsKey(vertex)) {
            this.map.put(vertex, new LinkedList<>());
        }
    }

    public int getEdgeCount() {
        int edges = 0;
        for (int key : this.map.keySet()) {
            edges += this.map.get(key).size();
        }
        return edges / 2;
    }

    public int getVertexCount() {
        return this.map.size();
    }

    public String printGraph() {
        StringBuilder string = new StringBuilder();

        for (int key : this.map.keySet()) {
            string.append(key).append(": ");
            for (int edge : this.map.get(key)) {
                string.append(edge).append(" ");
            }
            string.append("\n");
        }
        return string.toString();
    }
}