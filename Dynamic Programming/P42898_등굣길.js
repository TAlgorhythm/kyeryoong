// P42898. 땅따먹기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/42898

function solution(m, n, puddles) {
  // [Key Point] 좌표의 가로/세로 길이보다 1만큼 크게 road를 초기화
  let road = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  // 물에 잠긴 지역들은 좌표에 -1로 초기화
  for ([x, y] of puddles) {
    road[y][x] = -1;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      // 집을 1로 초기화
      if (i === 1 && j === 1) {
        road[i][j] = 1;
      } else {
        // [Key Point] 물에 잠긴 지역은 해당 위치로 갈 수 없기 때문에 0으로 수정
        if (road[i][j] === -1) {
          road[i][j] = 0;
        }
        // road[i][j]: 해당 좌표까지 갈 수 있는 최단경로의 개수
        // [i, j]까지 갈 수 있는 최단경로의 개수 = [i, j]의 위쪽까지 갈 수 있는 최단경로의 개수 + [i, j]의 왼쪽까지 갈 수 있는 최단경로의 개수
        else {
          road[i][j] = (road[i - 1][j] + road[i][j - 1]) % 1000000007;
        }
      }
    }
  }

  return road[n][m];
}
