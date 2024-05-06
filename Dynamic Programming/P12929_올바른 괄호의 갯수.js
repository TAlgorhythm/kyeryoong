// P12929. 올바른 괄호의 갯수
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12929

function solution(n) {
  // dp[n]: n개의 괄호 쌍으로 만들 수 있는 문자열의 갯수
  var dp = new Array(n).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  // [Key Point] 카탈란 수
  // 4개의 괄호 쌍 조합
  // = (맨 왼쪽에 괄호 추가) & (3개의 괄호 쌍 조합) -> dp[3] -> 1 * dp[3] -> dp[0] * dp[3]
  //   + (1개의 괄호 쌍 조합) & (2개의 괄호 쌍 조합) -> dp[1] * dp[2]
  //   + (2개의 괄호 쌍 조합) & (1개의 괄호 쌍 조합) -> dp[2] * dp[1]
  //   + (3개의 괄호 쌍 조합) & (맨 오른쪽에 괄호 추가)  -> dp[3] -> dp[3] * 1 -> dp[3] * dp[0]

  // 점화식: dp[n] = dp[0] * dp[n - 1] + dp[1] * dp[n - 2] + ... + dp[n - 2] * dp[1] + dp[n - 1] * dp[0]
  for (let i = 2; i < n + 1; i++) {
    var sum = 0;

    for (let j = 0; j < i; j++) {
      sum = sum + dp[j] * dp[i - j - 1];
    }

    dp[i] = sum;
  }

  return dp[n];
}

console.log(solution(2));
console.log(solution(3));
