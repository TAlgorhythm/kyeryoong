// P152995. 인사고과
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/152995

function solution(scores) {
  var myScore = scores[0];

  // 완호가 인센티브 지급 대상인지 확인
  for (const score of scores) {
    if (myScore[0] < score[0] && myScore[1] < score[1]) {
      return -1;
    }
  }

  // 완호보다 두 점수의 합이 높은 사원들
  var higherThanMe = scores.filter(
    (score) => score[0] + score[1] > myScore[0] + myScore[1]
  );

  // 완호보다 두 점수의 합이 높은 사원들을 두 점수의 합으로 내림차순 정렬
  higherThanMe.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 완호보다 두 점수의 합이 높지만, 인센티브 지급 대상이 아닌 사원들의 수
  let noIncentive = 0;

  for (let i = 0; i < higherThanMe.length; i++) {
    const a = higherThanMe[i];

    // 해당 사원이 인센티브 지급 대상인지 확인
    for (let j = 1; j < higherThanMe.length; j++) {
      const b = higherThanMe[j];

      // 해당 사원이 인센티브 지급 대상이 아닌 경우
      if (a[0] < b[0] && a[1] < b[1]) {
        noIncentive++;
        break;
      }
    }
  }

  // 완호의 석차 = 완호보다 두 점수의 합이 높은 사원의 수 - 이 중에서 인센티브 지급 대상이 아닌 사원의 수 + 1
  return higherThanMe.length - noIncentive + 1;
}
