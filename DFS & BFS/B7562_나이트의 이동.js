// B7562. 나이트의 이동
// [백준] https://www.acmicpc.net/problem/7562

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const test_cases = [];
const test_case_length = input[0];

for (let i = 0; i < test_case_length; i++) {
  const map_size = Number(input[i * 3 + 1]);
  const [start_x, start_y] = input[i * 3 + 2].split(" ").map(Number);
  const [target_x, target_y] = input[i * 3 + 3].split(" ").map(Number);

  test_cases.push({ map_size, start_x, start_y, target_x, target_y });
}

function solution(test_case) {
  const { map_size, start_x, start_y, target_x, target_y } = test_case;

  const maps = Array.from(Array(map_size), () => new Array(map_size).fill(0));

  const dx = [2, 2, -2, -2, 1, 1, -1, -1];
  const dy = [1, -1, 1, -1, 2, -2, 2, -2];

  if (start_x === target_x && start_y === target_y) {
    console.log(0);
    return;
  }

  function BFS(x, y) {
    var queue = [];
    queue.push([x, y]);

    while (queue.length > 0) {
      var [x, y] = queue.shift();

      for (let i = 0; i < 8; i++) {
        var nx = x + dx[i];
        var ny = y + dy[i];

        if (
          0 <= nx &&
          nx < map_size &&
          0 <= ny &&
          ny < map_size &&
          maps[nx][ny] === 0
        ) {
          maps[nx][ny] = maps[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  BFS(start_x, start_y);

  console.log(maps[target_x][target_y]);
}

for (let i = 0; i < test_case_length; i++) {
  solution(test_cases[i]);
}
