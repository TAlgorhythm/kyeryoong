// P49189. 가장 먼 노드
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, vertex) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [from, to] of vertex) {
    graph[from].push(to);
    graph[to].push(from);
  }

  // start번 노드에서 너비 우선 탐색
  function BFS(start) {
    // visited[i]: i번 노드까지의 거리, 방문하지 않았을 경우 null
    const visited = new Array(n + 1).fill(null);
    visited[start] = 0;

    const queue = [start];

    while (queue.length > 0) {
      const current = queue.shift();

      for (const node of graph[current]) {
        if (visited[node] === null) {
          queue.push(node);
          visited[node] = visited[current] + 1;
        }
      }
    }

    return visited;
  }

  // 1번 노드에서 너비 우선 탐색
  const distance = BFS(1);

  // 1번 노드에서 가장 멀리 떨어진 노드까지의 거리
  const mostFar = Math.max(...distance);

  // 1번 노드에서 가장 멀리 떨어진 노드의 갯수
  const answer = distance.filter((dist) => dist === mostFar).length;

  return answer;
}
