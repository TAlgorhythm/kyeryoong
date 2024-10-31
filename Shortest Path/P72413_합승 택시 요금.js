// P72413. 합승 택시 요금
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/72413

function solution(n, s, a, b, fares) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [from, to, cost] of fares) {
    graph[from].push([to, cost]);
    graph[to].push([from, cost]);
  }

  // 방문하지 않은 지점 중 비용이 가장 적게 든 지점을 찾는 함수
  function findSmallestIndex(distance, visited) {
    let minDist = Infinity;
    let minIndex = 0;

    for (let i = 1; i < distance.length; i++) {
      if (!visited[i] && distance[i] < minDist) {
        minDist = distance[i];
        minIndex = i;
      }
    }

    return minIndex;
  }

  // 다익스트라 알고리즘 실행
  function dijkstra(vertex) {
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(Infinity);

    distance[vertex] = 0;

    for (let i = 1; i < n + 1; i++) {
      const currentIndex = findSmallestIndex(distance, visited);

      if (currentIndex) {
        visited[currentIndex] = true;

        for (const [nextIndex, cost] of graph[currentIndex]) {
          const newDist = distance[currentIndex] + cost;
          if (newDist < distance[nextIndex]) {
            distance[nextIndex] = newDist;
          }
        }
      }
    }

    return distance;
  }

  var answer = Infinity;

  // 출발 지점에서 다익스트라 알고리즘 실행
  const costFromS = dijkstra(s);

  for (let i = 1; i < n + 1; i++) {
    // 경유 지점에서 다익스트라 알고리즘 실행
    const costFromI = dijkstra(i);

    // costFromS[i]: 출발 지점에서 경유 지점까지 비용
    // costFromI[a]: 경유 지점에서 A의 집까지 비용
    // costFromI[b]: 경유 지점에서 B의 집까지 비용
    answer = Math.min(answer, costFromS[i] + costFromI[a] + costFromI[b]);
  }

  return answer;
}
