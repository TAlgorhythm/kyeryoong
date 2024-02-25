// P12909. 올바른 괄호
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12909

function lastIndex(stack) {
  return stack.slice(-1)[0];
}

function solution(s) {
  var stack = [];

  for (let i = 0; i < s.length; i++) {
    var currentIndex = s[i];

    if (lastIndex(stack) === "(" && currentIndex === ")") {
      stack.pop();
    } else {
      stack.push(currentIndex);
    }
  }

  return stack.length == [];
}
