// P12980. 점프와 순간 이동
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  var battery = 0;

  while (n > 0) {
    // [Key Point] 건전지 사용량을 최소화하기 위해서는 순간이동을 최대한 많이 해야 함
    if (n % 2 === 0) {
      n = n / 2;
    }
    // 순간 이동을 할 수 없는 경우에는 한 칸 점프 (= 남은 거리가 홀수인 경우)
    else {
      // 한 칸 점프
      n = n - 1;

      // 배터리 사용
      battery = battery + 1;
    }
  }

  return battery;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
