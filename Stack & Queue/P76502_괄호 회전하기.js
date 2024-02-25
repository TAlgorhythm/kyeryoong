// P76502. 괄호 회전하기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/76502

// 문자열 s를 왼쪽으로 회전하는 함수
function rotateString(s) {
  return s.slice(1, s.length) + s[0];
}

// 스택의 마지막 원소를 반환하는 함수
function lastIndex(stack) {
  if (stack.length === 0) {
    return null;
  } else {
    return stack[stack.length - 1];
  }
}

// 올바른 괄호 문자열인지 확인하는 함수
function checkString(s) {
  var stack = [];

  // [Key Point] 닫는 괄호 ), ], } 가 들어올 때, 스택의 마지막 원소는 여는 괄호 (, [, { 이어야 함
  for (let i = 0; i < s.length; i++) {
    var currentIndex = s[i];

    if (stack.length === 0) {
      stack.push(currentIndex);
    } else if (currentIndex === ")" && lastIndex(stack) === "(") {
      stack.pop();
    } else if (currentIndex === "]" && lastIndex(stack) === "[") {
      stack.pop();
    } else if (currentIndex === "}" && lastIndex(stack) === "{") {
      stack.pop();
    } else {
      stack.push(currentIndex);
    }
  }

  return stack.length ? false : true;
}

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (checkString(s)) {
      answer++;
    }

    s = rotateString(s);
  }

  return answer;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
