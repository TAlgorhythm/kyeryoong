// P12979. 기지국 설치
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12979

function solution(n, stations, w) {
  // 설치한 기지국 개수
  var answer = 0;

  // 한 기지국의 전달할 수 있는 전파의 범위
  const coverage = 2 * w + 1;

  for (let i = -1; i < stations.length; i++) {
    // 앞에 있는 기지국의 오른쪽 전파의 도달 위치
    let front;

    // 뒤에 있는 기지국의 왼쪽 전파의 도달 위치
    let back;

    if (i === -1) {
      // 앞에 있는 기지국이 첫 번째 기지국인 경우
      front = 0;
    } else {
      front = stations[i] + w;
    }

    if (i == stations.length - 1) {
      // 뒤에 있는 기지국이 마지막 기지국인 경우
      back = n + 1;
    } else {
      back = stations[i + 1] - w;
    }

    // 양 기지국 사이에서 전파가 도달하지 않는 범위
    gap = back - front - 1;

    answer = answer + Math.ceil(gap / coverage);
  }

  return answer;
}

console.log(solution(11, [4, 11]));
console.log(solution(16, [9]));
