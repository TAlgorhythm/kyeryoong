// P12914. 멀리 뛰기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  // dp[n]: 멀리뛰기에 사용된 n칸으로 효진이가 끝에 도달하는 방법의 수
  var dp = new Array(n + 1).fill(0);

  // 1칸인 경우 끝에 도달하는 방법의 수는 1가지
  dp[1] = 1;

  // 2칸인 경우 끝에 도달하는 방법의 수는 2가지
  dp[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    // dp[i - 1]: (i - 1)칸에서 1칸 뛰는 경우
    // dp[i - 2]: (i - 2)칸에서 2칸 뛰는 경우

    // [Key Point] dp 계산 시, 1234567로 나눈 값을 할당
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }

  return dp[n];
}
