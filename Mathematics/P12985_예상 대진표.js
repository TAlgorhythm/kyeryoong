// P12985. 예상 대진표
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  var answer = 0;

  // A번 참가자와 B번 참가자가서로붙게 되기 전까지 반복문 실행
  while (a !== b) {
    // [Key Point] n번 참가자의 다음 라운드 번호는 n / 2의 몫과 나머지를 합한 것
    a = parseInt(a / 2) + (a % 2);
    b = parseInt(b / 2) + (b % 2);

    answer = answer + 1;
  }

  return answer;
}
