// P12909. 올바른 괄호
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12909

// 스택의 마지막 원소를 반환하는 함수
function lastIndex(stack) {
  return stack.slice(-1)[0];
}

function solution(strs) {
  strs = strs.split("");

  var stack = [];

  strs.forEach((str) => {
    if (lastIndex(stack) === "(" && str === ")") {
      stack.pop();
    } else {
      stack.push(str);
    }
  });

  return stack.length == [];
}
