// P132266. 부대복귀
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/132266

function solution(n, roads, sources, destination) {
  // graph[i][j]: i 지역에서 j 지역으로 왕복할 수 있음
  var graph = Array.from({ length: n + 1 }, () => []);

  for (const [from, to] of roads) {
    graph[from].push(to);
    graph[to].push(from);
  }

  function BFS(vertex) {
    const visited = Array(n + 1).fill(-1);

    // 현재 지점은 최단시간이 0
    visited[vertex] = 0;

    const queue = [vertex];

    while (queue.length > 0) {
      const current = queue.shift();

      // current 지역에서 이동할 수 있는 지역을 찾음
      for (const next of graph[current]) {
        // 해당 지역을 방문한 적이 없는 경우
        if (visited[next] === -1) {
          visited[next] = visited[current] + 1;
          queue.push(next);
        }
      }
    }

    return visited;
  }

  // 강철부대의 지역에서 너비 우선 탐색
  const distance = BFS(destination);

  // 강철부대의 지역 -> 각 부대원이 위치한 지역까지의 최단시간
  return sources.map((source) => distance[source]);
}
