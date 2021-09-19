import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;
import java.util.*;

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
//        graph.addEdge(5, 4);

        System.out.println(graph.printGraph());

        System.out.println("Nodes/Vertices: " + graph.getVertexCount());
        System.out.println("Edges: " + graph.getEdgeCount());
        System.out.println();

        System.out.println("BFS " + graph.BFS(0, 2));

        System.out.println("DFS " + graph.DFS(0, 2));
    }
}


class Graph {
    private HashMap<Integer, LinkedList<Integer>> Graph = new HashMap<>();

    //assuming directed graph
    public void addEdge(int source, int destination) {
        if (!this.Graph.containsKey(source)) addVertex(source);
        if (!this.Graph.containsKey(destination)) addVertex(destination);

        if (!this.Graph.get(source).contains(destination)) this.Graph.get(source).add(destination);
        //makes undirected graph
//        if (!this.map.get(destination).contains(source)) this.map.get(destination).add(source);
    }

    public void addVertex(int vertex) {
        //check if vertex in graph
        if (!this.Graph.containsKey(vertex)) {
            this.Graph.put(vertex, new LinkedList<>());
        }
    }

    public int getEdgeCount() {
        int edges = 0;
        for (int key : this.Graph.keySet()) {
            edges += this.Graph.get(key).size();
        }
        return edges / 2;
    }

    public int getVertexCount() {
        return this.Graph.size();
    }

    public String printGraph() {
        StringBuilder string = new StringBuilder();

        for (int key : this.Graph.keySet()) {
            string.append(key).append(": ");
            for (int edge : this.Graph.get(key)) {
                string.append(edge).append(" ");
            }
            string.append("\n");
        }
        return string.toString();
    }

    public String BFS(int vertexOne, int vertexTwo) {
        if (!this.Graph.containsKey(vertexOne) || !this.Graph.containsKey(vertexTwo)) return "No Path";
        HashMap<Integer, Integer> parents = new HashMap<>();
        HashSet<Integer> visited = new HashSet<>();
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

            for (int i = 0; i < this.Graph.get(current).size(); i++) {
                if (!toVisit.contains(this.Graph.get(current).get(i)) && !visited.contains(this.Graph.get(current).get(i))) {
                    toVisit.add(this.Graph.get(current).get(i));
                    parents.put(this.Graph.get(current).get(i), current);
                }
            }
            visited.add(current);
        }
        return "No Path";
    }

    public String DFS(int vertexOne, int vertexTwo) {
        if (!this.Graph.containsKey(vertexOne) || !this.Graph.containsKey(vertexTwo)) return "No Path";
        Stack<Integer> toVisit = new Stack<>();
        HashMap<Integer, Integer> parents = new HashMap<>();
        HashSet<Integer> visited = new HashSet<>();

        toVisit.push(vertexOne);

        while (!toVisit.isEmpty()) {
            int current = toVisit.pop();

            if (current == vertexTwo) {
                StringBuilder string = new StringBuilder();
                string.append(vertexTwo).append(" ");
                Integer value = vertexTwo;
                while (value != null && parents.get(value) != null) {
                    string.append(parents.get(value)).append(" ");
                    value = parents.get(value);
                }
                return "Path: " + string.reverse().toString().trim();
            }
            for (int i = 0; i < this.Graph.get(current).size(); i++) {
                if (!toVisit.contains(this.Graph.get(current).get(i)) && !visited.contains(this.Graph.get(current).get(i))) {
                    toVisit.push(this.Graph.get(current).get(i));
                    parents.put(this.Graph.get(current).get(i), current);
                }
            }
            visited.add(current);
        }

        return "No Path";
    }
}