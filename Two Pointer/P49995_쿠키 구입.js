// P49995. 쿠키 구입
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/49995

function solution(cookies) {
  const n = cookies.length;

  let answer = 0;

  // [Key Point] 처음부터 마지막 쿠키까지, 기준점 왼쪽과 오른쪽의 과자의 합을 비교
  // 2. 기준점 왼쪽의 시작과 오른쪽의 마지막을 조금씩 넗혀가면서 비교
  for (let m = 0; m < n; m++) {
    let l = m; // 기준점 왼쪽의 시작
    let r = m + 1; // 기준점 오른쪽의 마지막

    let lSum = cookies[m]; // 기준점 왼쪽 과자의 합 (처음 ~ m)
    let rSum = cookies[m + 1]; // 기준점 오른쪽 과자의 합 (m + 1 ~ 마지막)

    // 기준점 왼쪽의 시작과 오른쪽의 마지막이 범위 내에 있을 때 까지 반복문 수행
    while (l > -1 && r < n) {
      // 왼쪽과 오른쪽 과자의 합이 일치하는 경우
      if (lSum === rSum) {
        answer = Math.max(answer, lSum);
      }

      // 오른쪽 과자의 합이 더 큰 경우 -> 왼쪽에 과자를 추가
      if (lSum < rSum) {
        l = l - 1;
        lSum = lSum + cookies[l];
      }
      // 왼쪽 과자의 합이 더 큰 경우 -> 오른쪽에 과자를 추가
      else {
        r = r + 1;
        rSum = rSum + cookies[r];
      }
    }
  }

  return answer;
}
