// P12904. 가장 긴 팰린드롬
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12904

// 문자열이 팰린드롬인지 확인하는 함수
function isPalindrome(letters) {
  var half = Math.floor(letters.length / 2);

  for (let i = 0; i < half; i++) {
    if (letters[i] !== letters[letters.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function solution(s) {
  // [Key Point] 문자열의 길이가 가장 긴 것부터 비교 (문자열 길이 ~ 2)

  // length: 확인할 문자열의 길이
  for (let length = s.length; length > 1; length--) {
    // first: 확인할 문자열의 첫 인덱스
    for (let first = 0; first < s.length - length + 1; first++) {
      // last: 확인할 문자열의 마지막 인덱스 = 첫 인덱스 + 문자열의 길이
      const last = first + length;

      if (isPalindrome(s.slice(first, last))) {
        // 확인한 문자열이 팰린드롬이면 더 이상 비교하지 않고 함수 종료
        return length;
      }
    }
  }

  // 길이가 2인 문자열까지 비교했는데도 팰린드롬이 없으면, 가장 긴 팰린드롬의 길이는 1
  return 1;
}
