// P12927. 야근 지수
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12927

function solution(n, works) {
  //
  if (works.reduce((acc, cur) => acc + cur) <= n) {
    return 0;
  }

  // 현재 작업량을 내림차순으로 정렬
  works.sort((a, b) => b - a);

  // 시간이 남아있을 때, 계속 반복문 수행
  while (n > 0) {
    // 남아있는 작업량 중 가장 큰 값
    let max = works[0];

    for (let i = 0; i < works.length; i++) {
      // [Key Point] 해당 날짜의 작업량이 남아있는 작업량 중 가장 큰 값과 같거나 큰 경우
      if (works[i] >= max) {
        // 해당 날짜의 작업량을 1 감소
        works[i] = works[i] - 1;

        // 시간을 1 감소
        n = n - 1;
      }

      // 시간이 남아있지 않으면, for문 탈출
      if (n === 0) {
        break;
      }
    }
  }

  // 야근 지수를 계산
  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
