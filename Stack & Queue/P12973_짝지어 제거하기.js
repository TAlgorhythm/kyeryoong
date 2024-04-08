// P12973. 짝지어 제거하기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12973

function lastIndex(stack) {
  return stack.slice(-1)[0];
}

function solution(strs) {
  strs = strs.split("");

  var stack = [];

  strs.forEach((str) => {
    if (stack.length === 0) {
      stack.push(str);
    } else if (lastIndex(stack) === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  });

  return Number(stack.length === 0);
}
