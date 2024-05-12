// P42897. 도둑질
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/42897

function max(a, b) {
  return Math.max(a, b);
}

function solution(money) {
  // 첫 번째 집을 터는 경우
  var dp1 = new Array(money.length).fill(0);

  dp1[0] = money[0];
  dp1[1] = money[0];

  answer1 = max(dp1[0], dp1[1]);

  // 첫 번째 집을 터는 경우, 마지막 집을 털수 없기 때문에 마지막 이전 집까지만 계산
  for (let i = 2; i < money.length - 1; i++) {
    dp1[i] = max(dp1[i - 2] + money[i], dp1[i - 1]);
    answer1 = max(answer1, dp1[i]);
  }

  // 첫 번째 집을 털지 않는 경우
  var dp2 = new Array(money.length).fill(0);

  dp2[0] = 0;
  dp2[1] = money[1];

  answer2 = money[1];

  // 첫 번째 집을 털지 않는 경우, 마지막 집까지 계산
  for (let i = 2; i < money.length; i++) {
    dp2[i] = max(dp2[i - 2] + money[i], dp2[i - 1]);
    answer2 = max(answer2, dp2[i]);
  }

  // 첫 번째 집을 터는 경우와 털지 않는 경우 중 최댓값을 반환
  return max(answer1, answer2);
}

console.log(solution([1, 2, 3, 1]));
