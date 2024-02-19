// P12913. 땅따먹기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12913

// 배열의 원소 중 최대값을 반환하는 함수
function max(array) {
  array.sort((a, b) => b - a);
  return array[0];
}

function solution(land) {
  // 2행부터 계산 시작
  for (let i = 1; i < land.length; i++) {
    // 바로 위 행에서 같은 열에 있는 수를 제외하고 최대값을 선택

    // 11 12 13 14
    // 21 22 23 24 인 경우, 23 = 23 + max(11, 12, 14)

    for (let j = 0; j < 4; j++) {
      // 열 기준 왼쪽에 있는 숫자들
      const left = land[i - 1].slice(0, j);

      // 열 기준 오른쪽에 있는 숫자들
      const right = land[i - 1].slice(j + 1, 4);

      land[i][j] = land[i][j] + max([...left, ...right]);
    }
  }

  // 마지막 행의 최대값을 반환
  return max(land[land.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
