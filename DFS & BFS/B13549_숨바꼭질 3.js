// B13549. 숨바꼭질 3
// [백준] https://www.acmicpc.net/problem/13549

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 수빈이의 위치(시작점), 동생의 위치(목표점)
const [n, k] = input[0].split(" ").map(Number);

function solution(start, target) {
  // 해당 위치 방문 여부
  var visited = new Array(100001).fill(false);

  // 시작점을 방문 처리
  visited[start] = true;

  // 큐 사용
  var queue = [[start, 0]];

  while (queue.length > 0) {
    // 현재 위치, 현재 시간
    let [currentPosition, currentTime] = queue.shift();

    // 현재 위치가 목표점이면 현재 시간을 반환
    if (currentPosition === target) {
      return currentTime;
    }

    // 순간이동을 하는 경우
    let x = currentPosition * 2;
    // 위치 - 1로 이동하는 경우
    let y = currentPosition - 1;
    // 위치 + 1로 이동하는 경우
    let z = currentPosition + 1;

    if (x >= 0 && x <= 100000 && !visited[x]) {
      // 순간이동 지점을 방문 처리
      visited[x] = true;

      // 순간이동을 하는 경우 시간이 증가되지 않음
      // [Key Point] 순간이동을 하는 경우가 가장 빠르기 때문에, Array.unshift()를 이용하여 큐의 맨 앞에 삽입
      queue.unshift([x, currentTime]);
    }

    if (y >= 0 && y <= 100000 && !visited[y]) {
      // 위치 - 1 지점을 방문 처리
      visited[y] = true;

      // 위치 - 1 지점으로 이동하는 경우 시간을 1초 증가
      queue.push([y, currentTime + 1]);
    }

    if (z >= 0 && z <= 100000 && !visited[z]) {
      // 위치 + 1 지점을 방문 처리
      visited[z] = true;

      // 위치 + 1 지점으로 이동하는 경우 시간을 1초 증가
      queue.push([z, currentTime + 1]);
    }
  }
}

console.log(solution(n, k));
