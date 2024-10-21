// P12907. 거스름돈
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12907

function solution(n, money) {
  // dp[i]: i원을 거슬러 줄 방법의 수
  var dp = new Array(n + 1).fill(0);

  // 각 화폐 단위를 사용해서 dp 배열 갱신
  for (const coin of money) {
    for (let i = coin; i < n + 1; i++) {
      if (i === coin) {
        dp[i] = dp[i] + 1;
      } else {
        dp[i] = dp[i] + dp[i - coin];
      }
    }
  }

  return dp[n] % 1000000007;
}
