// P43238. 입국심사
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  var left = 1;
  var right = times.sort()[0] * n;

  var answer = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    var completed = 0;

    times.forEach((time) => (completed = completed + Math.floor(mid / time)));

    if (completed < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
      answer = mid;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10]));
