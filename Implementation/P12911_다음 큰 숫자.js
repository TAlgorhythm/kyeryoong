// P12911. 다음 큰 숫자
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12911

// 1의 갯수를 확인하는 함수
function countOnes(n) {
  return n
    .toString(2)
    .split("")
    .filter((x) => x === "1").length;
}

function solution(n) {
  // n을 2진수로 변환했을 때 1의 갯수
  let onesLength = countOnes(n);

  while (true) {
    // (n + 1)을 2진수로 변환했을 때 1의 갯수
    let newOnesLength = countOnes(n + 1);

    // 1의 갯수가 같은 지 확인
    if (onesLength === newOnesLength) {
      return n + 1;
    } else {
      n = n + 1;
    }
  }
}
