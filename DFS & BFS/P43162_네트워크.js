// P43162. 네트워크
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  // 해당 컴퓨터에 연결된 컴퓨터
  // network[0]이 [1, 3]이면, 컴퓨터 A는 컴퓨터 B, D와 연결됨
  let connected = Array.from(Array(n), () => []);

  // 해당 컴퓨터 방문 여부
  let visited = Array.from(Array(n), () => false);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && computers[i][j] === 1) {
        connected[i].push(j);
      }
    }
  }

  // 깊이 우선 탐색 알고리즘
  function DFS(vertex) {
    // 해당 컴퓨터를 방문 처리
    visited[vertex] = true;

    // 해당 컴퓨터에 연결된 컴퓨터
    const current = connected[vertex];

    // 연결된 컴퓨터에 대해서, 다시 깊이 우선 탐색 알고리즘 호출
    for (let i = 0; i < current.length; i++) {
      if (!visited[current[i]]) {
        DFS(current[i]);
      }
    }
  }

  // 네트워크의 수
  answer = 0;

  for (let i = 0; i < n; i++) {
    // 해당 컴퓨터를 방문하지 않은 경우, 해당 컴퓨터에서 깊이 우선 탐색 알고리즘 수행
    if (!visited[i]) {
      DFS(i);
      answer = answer + 1;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
