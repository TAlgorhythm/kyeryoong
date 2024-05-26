// P12987. 숫자 게임
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12987

function solution(A, B) {
  // [Key Point] B팀이 최대 점수를 얻으려면, A팀의 높은 숫자를 B팀의 높은 숫자로 대응해야 함.

  // A와 B를 오름차순으로 정렬해서 비교
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  const length = A.length;

  let answer = 0;

  // [Key Point] 투 포인터 사용
  let i = 0;
  let j = 0;

  while (i < length && j < length) {
    // B팀의 숫자가 A팀의 숫자보다 큰 경우
    if (A[i] < B[j]) {
      i = i + 1;
      j = j + 1;

      // 승점 추가
      answer = answer + 1;
    }

    // A팀의 숫자가 B팀의 숫자보다 큰 경우
    else {
      j = j + 1;
    }
  }

  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
