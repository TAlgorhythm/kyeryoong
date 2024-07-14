// P70129. 이진 변환 반복하기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/70129

// 십진수를 이진수로 변환해주는 함수
function toBinary(number) {
  var result = [];

  while (number > 0) {
    const quotient = parseInt(number / 2);
    const remainder = number % 2;

    result.unshift(remainder);
    number = quotient;
  }

  return Number(result.join(""));
}

function solution(s) {
  var count = 0; // 변환의 횟수
  var deleted = 0; // 변환 과정에서 제거된 모든 0의 개수

  // s가 "1"이 될 때까지 계속해서 s에 이진 변환을 수행
  while (s !== 1) {
    // 0이 제거된 s
    const zerosDeleted = String(s).replace(/0/g, "");

    count = count + 1;
    deleted = deleted + String(s).length - zerosDeleted.length;

    // 0 제거 후 길이를 이진 변환 수행
    s = toBinary(zerosDeleted.length);
  }

  return [count, deleted];
}
