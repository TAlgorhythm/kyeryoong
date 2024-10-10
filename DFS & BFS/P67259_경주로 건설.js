// P67259. 경주로 건설
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/67259

function solution(board) {
  const N = board.length;

  const cost = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => ({
      up: Infinity,
      down: Infinity,
      left: Infinity,
      right: Infinity,
    }))
  );

  const directions = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  function BFS(x, y) {
    var queue = [
      [x, y, "down", 0],
      [x, y, "right", 0],
    ];
    cost[0][0] = 0;

    while (queue.length > 0) {
      var [x, y, currentDir, currentCost] = queue.shift();

      for (const d in directions) {
        const nx = x + directions[d][0];
        const ny = y + directions[d][1];

        if (0 <= nx && nx < N && 0 <= ny && ny < N && board[nx][ny] !== 1) {
          let newCost = currentCost + (currentDir === d ? 100 : 600);

          if (newCost < cost[nx][ny][d]) {
            cost[nx][ny][d] = newCost;
            queue.push([nx, ny, d, newCost]);
          }
        }
      }
    }
  }

  BFS(0, 0);

  return Math.min(...Object.values(cost[N - 1][N - 1]));
}
