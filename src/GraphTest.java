import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

public class GraphTest {
    public static void main(String[] args) {
        Graph graph = new Graph();

        graph.addEdge(0, 1);
        graph.addEdge(0, 4);
        graph.addEdge(0, 5);
        graph.addEdge(1, 4);
        graph.addEdge(1, 3);
        graph.addEdge(2, 1);
        graph.addEdge(3, 2);
        graph.addEdge(3, 4);

        System.out.println(graph.printGraph());

        System.out.println("Nodes/Vertices: " + graph.getVertexCount());
        System.out.println("Edges: " + graph.getEdgeCount());
        System.out.println();

        System.out.println(graph.BFS(2, 5));
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

    public String BFS(int vertexOne, int vertexTwo) {
        if (!this.map.containsKey(vertexOne) || !this.map.containsKey(vertexTwo)) return "No Path";
        HashMap<Integer, Integer> parents = new HashMap<>();
        HashSet<Integer> visited = new HashSet();
        Queue<Integer> toVisit = new LinkedList<>();


        toVisit.add(vertexOne);

        while (!toVisit.isEmpty()) {
            int current = toVisit.remove();

            if (current == vertexTwo) {
                StringBuilder string = new StringBuilder();
                string.append(vertexTwo).append(" ");
                Integer value = vertexTwo;
                while (value != null && parents.get(value) != null) {
                    string.append(parents.get(value)).append(" ");
                    value = parents.get(value);
                }
                return "Shortest Path: " + string.reverse().toString().trim();
            }

            for (int i = 0; i < this.map.get(current).size(); i++) {
                if (!toVisit.contains(this.map.get(current).get(i)) && !visited.contains(this.map.get(current).get(i))) {
                    toVisit.add(this.map.get(current).get(i));
                    parents.put(this.map.get(current).get(i), current);
                }
            }
            visited.add(current);
        }
        return "No Path";
    }

    public boolean DFS() {
        return false;
    }
}