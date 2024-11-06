// P64062. 징검다리 건너기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/64062

function solution(stones, k) {
  // 징검다리를 건널 수 있는지 확인하는 함수
  function checkStones(mid) {
    // 숫자가 0인 디딤돌이 연속으로 몇 개 있는지 확인
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
      // mid명이 건너는 경우 디딤돌의 숫자가 0 미만으로 되는지 확인
      if (stones[i] - mid <= 0) {
        count = count + 1;
      } else {
        count = 0;
      }

      // 숫자가 0인 디딤돌이 연속으로 k개 이상 존재하는 경우, 징검다리를 건널 수 없음
      if (count === k) {
        return false;
      }
    }

    // 숫자가 0인 디딤돌이 연속으로 k개 미만 존재하는 경우, 징검다리를 건널 수 있음
    return true;
  }

  // [Key Point] 이분 탐색 사용
  // 징검다리를 건너야 하는 친구들의 수 최소값과 최대값
  let min = 1;
  let max = 200000000;

  while (min <= max) {
    const mid = parseInt((min + max) / 2);

    if (!checkStones(mid)) {
      // mid명이 징검다리를 건널 수 없는 경우, 최대값을 감소
      max = mid - 1;
    }

    // mid명이 징검다리를 건널 수 있는 경우, 최소값을 증가
    else {
      min = mid + 1;
    }
  }

  return min;
}
