// P1844. 게임 맵 최단거리
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  const rows = maps.length; // 세로 길이
  const columns = maps[0].length; // 가로 길이

  // 너비 우선 탐색 알고리즘
  function BFS(x, y) {
    // 동서남북 이동 거리
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    // 큐 사용
    var queue = [[x, y]];

    // 큐가 비어잇지 않을 때 까지 계속 실행
    while (queue.length > 0) {
      // 큐의 맨 앞을 pop
      var [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        var nx = x + dx[i];
        var ny = y + dy[i];

        if (
          // 맵 내부에 있는 경우
          0 <= nx &&
          nx < rows &&
          0 <= ny &&
          ny < columns &&
          // 길이 있는 경우, 그리고 해당 위치에 처음 이동하려는 경우
          maps[nx][ny] === 1
        ) {
          // 해당 위치를 현재 이동 거리로 수정
          maps[nx][ny] = maps[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  // 시작점에서 너비 우선 탐색 알고리즘 수행
  BFS(0, 0);

  // 도착점에 도달한 경우, 최단거리를 출력
  if (maps[rows - 1][columns - 1] !== 1) {
    return maps[rows - 1][columns - 1];
  } else {
    // 도착점에 도달하지 못한 경우, -1을 출력
    return -1;
  }
}

// 테스트케이스 1
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
// 정답: 11

// 테스트케이스 2
console.log([
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ]),
]);
// 정답: -1
