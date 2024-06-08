// P12924. 숫자의 표현
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  // 자연수들로 표현 하는 방법의 수
  var answer = 0;

  // 숫자 i + (i + 1) + (i + 2) + ... 의 합을 확인
  for (let i = 1; i < n + 1; i++) {
    // 숫자의 합
    var sum = i;

    // 다음 숫자
    var number = i + 1;

    // 숫자의 합이 n보다 작은 경우에만 반복문 실행
    while (sum <= n) {
      // 숫자의 합이 n과 일치하는 경우
      if (sum === n) {
        answer = answer + 1;
      }

      // 현재 숫자의 합에 다음 숫자를 더함
      sum = sum + number;
      number = number + 1;
    }
  }

  return answer;
}

console.log(solution(15));
