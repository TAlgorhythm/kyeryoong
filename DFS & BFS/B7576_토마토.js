// B7576. 토마토
// [백준] https://www.acmicpc.net/problem/7576

// 큐 자료구조 클래스 구현
class Queue {
  constructor(value) {
    this.queue = value ?? [];
    this.front = 0;
    this.length = value ? value.length : 0;
  }

  // [Key Point] 너비 우선 탐색 알고리즘에서 Array.shift() 사용 시, 시간 초과가 발생
  // Array.shift() 대신, 배열의 맨 앞 요소를 가져오는 함수를 직접 구현
  popleft() {
    const frontValue = this.queue[this.front];
    this.front = this.front + 1;
    this.length = this.length - 1;

    return frontValue;
  }

  push(value) {
    this.queue.push(value);
    this.length = this.queue.length - this.front;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 토마토 상자
const box = [];

// 톻마토 상자의 가로와 세로 길이
const [m, n] = input[0].split(" ");

for (let i = 0; i < n; i++) {
  box.push(input[i + 1].split(" ").map(Number));
}

function solution(box) {
  // 맨 처음 토마토가 있는 지점의 정보
  const tomatoes = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (box[i][j] === 1) {
        tomatoes.push([i, j]);
      }
    }
  }

  // 토마토가 모두 익을 때까지의 최소 날짜
  var answer = 0;

  // 너비 우선 탐색 알고리즘
  function BFS(tomatoes) {
    // 동서남북 이동 거리
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    // 큐 사용
    var queue = new Queue(tomatoes);

    // 큐가 비어잇지 않을 때 까지 계속 실행
    while (queue.length > 0) {
      // 큐의 맨 앞을 pop
      const [x, y] = queue.popleft();

      for (let i = 0; i < 4; i++) {
        var nx = x + dx[i];
        var ny = y + dy[i];

        if (
          // 토마토 상자 내부에 있는 경우
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          // 토마토가 익지 않는 경우
          box[nx][ny] === 0
        ) {
          // 익지 않은 토마토를 익은 것으로 수정
          // [Key Point] 토마토 상자의 값이 1 이상이면 토마토가 익은 것으로 간주함
          queue.push([nx, ny]);
          box[nx][ny] = box[x][y] + 1;

          answer = Math.max(answer, box[nx][ny] - 1);
        }
      }
    }
  }

  // 맨 처음 토마토가 있는 지점의 정보를 가지고 너비 우선 탐색 알고리즘 수행
  BFS(tomatoes);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 토마토가 모두 익지는 못하는 상황이면, -1을 반환
      if (box[i][j] === 0) {
        return -1;
      }
    }
  }

  // 토마토가 모두 익었으면, 모두 익을 때까지의 최소 날짜를 반환
  return answer;
}

console.log(solution(box));
