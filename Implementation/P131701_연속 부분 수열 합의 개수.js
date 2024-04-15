// P131701. 연속 부분 수열 합의 개수
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/131701

// 배열의 모든 원소의 합을 반환하는 합수
function getSum(elements) {
  return elements.reduce((sum, value) => {
    return sum + value;
  }, 0);
}

function solution(elements) {
  // [Key Point] 원형 수열의 계산을 쉽게하기 위해, 수열을 두 배로 연장시킴
  var extendedElements = [...elements, ...elements];

  // 연속 부분 수열 합으로 만들 수 있는 수의 개수
  // [Key Point] 중복되는 값을 제외하기 위해 Set 사용
  var answer = new Set();

  // 변수 i는 수열의 길이를 의미: 1부터 수열의 길이
  for (let i = 1; i < elements.length + 1; i++) {
    // 길이가 i인 수열 합의 초기값
    var sum = getSum(extendedElements.slice(0, i));

    for (let j = 0; j < elements.length; j++) {
      // 맨 앞의 값(extendedElements[j])를 빼기
      // 그 다음 값(extendedElements[j + i])를 더하기
      sum = sum - extendedElements[j] + extendedElements[j + i];

      answer.add(sum);
    }
  }

  // 연속 부분 수열 합으로 만들 수 있는 수의 개수
  return [...answer].length;
}

console.log(solution([7, 9, 1, 1, 4]));
