// P42842. 카펫
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/42842.

function solution(brown, yellow) {
  // 총 면적 = 갈색 격자의 수 + 노란색 격자의 수 (= 총 격자의 수)
  const area = brown + yellow;

  for (let width = area; width > 0; width--) {
    // 너비(가로 길이)가 정수인 경우에만 계산
    if (area % width === 0) {
      // 높이(세로 길이) = 총 면적 / 너비(가로 길이)
      const height = area / width;

      // [Key Point] 노란색 격자의 수 = (가로 길이 - 2) * (세로 길이 - 2)
      const yellowTiles = (width - 2) * (height - 2);

      // [Key Point] 갈색 격자의 수 = (총 격자의 수) - (노란색 격자의 수)
      const brownTiles = area - yellowTiles;

      // 계산한 격자의 수가 기억한 격자의 수와 일치하면, 해당 [너비, 높이]를 반환
      if (brownTiles == brown && yellowTiles == yellow) {
        return [width, height];
      }
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
