// P92344. 파괴되지 않은 건물
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/92344

function solution(board, skill) {
  const n = board.length;
  const m = board[0].length;

  // [Key Point] 각 스킬의 공격량 또는 회복량의 누적합 배열
  const damageMap = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

  for (const [type, r1, c1, r2, c2, degree] of skill) {
    const damage = (type === 1 ? -1 : 1) * degree;

    damageMap[r1][c1] += damage;
    damageMap[r1][c2 + 1] += -1 * damage;
    damageMap[r2 + 1][c1] += -1 * damage;
    damageMap[r2 + 1][c2 + 1] += damage;
  }

  // 배열의 위에서 아래로 누적합
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      damageMap[i][j] = damageMap[i - 1][j] + damageMap[i][j];
    }
  }

  // 배열의 왼쪽에서 오른쪽으로 누적합
  for (let i = 0; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      damageMap[i][j] = damageMap[i][j - 1] + damageMap[i][j];
    }
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 기존 맵에다 누적합 배열을 합침
      board[i][j] = board[i][j] + damageMap[i][j];

      if (board[i][j] > 0) {
        answer = answer + 1;
      }
    }
  }

  return answer;
}
