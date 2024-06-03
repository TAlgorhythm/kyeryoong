// P161988. 연속 펄스 부분 수열의 합
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/161988

function solution(sequence) {
  // [Key Point] 수열을 [1, -1, 1, -1, ...]을 곱한 것과 [-1, 1, -1, 1, ...]을 곱한 것 두 가지로 계산

  // 수열에 [1, -1, 1, -1, ...]을 곱한 펄스 수열 => 펄스 수열 A
  var sequence_a = sequence.map((item, index) => item * (-1) ** (index + 1));

  // 수열에 [-1, 1, -1, 1, ...]을 곱한 펄스 수열 => 펄스 수열 B
  var sequence_b = sequence.map((item, index) => item * (-1) ** index);

  // dp_a/b[i]: 펄스 수열 A/B의 i번째 원소까지 탐색했을 때 연속 펄스 부분 수열의 합의 최댓값
  var dp_a = new Array(sequence.length).fill(0);
  var dp_b = new Array(sequence.length).fill(0);

  dp_a[0] = sequence_a[0];
  dp_b[0] = sequence_b[0];

  // 펄스 수열 A의 연속 펄스 부분 수열의 합의 최댓값
  var max_a = dp_a[0];

  // 펄스 수열 B의 연속 펄스 부분 수열의 합의 최댓값
  var max_b = dp_b[0];

  for (let i = 1; i < sequence.length; i++) {
    // 첫 번째 경우: 기존의 연속 수열의 합을 버리고, 새로운 원소 한 개의 값
    const case_a_1 = sequence_a[i];
    const case_b_1 = sequence_b[i];

    // 두 번쩨 경우: 기존의 연속 수열의 합에 새로운 원소를 더한 값
    const case_a_2 = dp_a[i - 1] + sequence_a[i];
    const case_b_2 = dp_b[i - 1] + sequence_b[i];

    dp_a[i] = Math.max(case_a_1, case_a_2);
    dp_b[i] = Math.max(case_b_1, case_b_2);

    max_a = Math.max(max_a, dp_a[i]);
    max_b = Math.max(max_b, dp_b[i]);
  }

  return Math.max(max_a, max_b);
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
