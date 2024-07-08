// P12971. 땅따먹기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12971

function max(a, b) {
  return Math.max(a, b);
}

function solution(sticker) {
  // 스티커가 한 장인 경우
  if (sticker.length === 1) {
    return sticker[0];
  }

  // 스티거가 두 장인 경우: 두 개의 스티커 중 더 큰 숫자가 적힌 것을 뜯어냄
  if (sticker.length === 2) {
    return max(sticker[0], sticker[1]);
  }

  // 첫 번째 스티커를 뜯어낸 경우
  var dp1 = new Array(sticker.length).fill(0);
  var max1 = 0;

  dp1[0] = sticker[0];
  dp1[1] = sticker[0];

  // 첫 번째 스티커를 뜯어낸 경우, 마지막 스티커는 뜯어낼 수 없기 때문에 마지막 이전 스티커까지만 계산
  for (let i = 2; i < sticker.length - 1; i++) {
    dp1[i] = max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    max1 = max(max1, dp1[i]);
  }

  // 첫 번째 스티커를 뜯어내지 않은 경우
  var dp2 = new Array(sticker.length).fill(0);
  var max2 = 0;

  dp2[0] = 0;
  dp2[1] = sticker[1];

  // 첫 번째 스티커를 뜯어내지 않은 경우, 마지막 스티커까지 계산
  for (let i = 2; i < sticker.length; i++) {
    dp2[i] = max(dp2[i - 1], dp2[i - 2] + sticker[i]);
    max2 = max(max2, dp2[i]);
  }

  // 첫 번째 스티커를 뜯어낸 경우와 첫 번째 스티커를 뜯어내지 않은 경우 중 최댓값을 반환
  return max(max1, max2);
}
