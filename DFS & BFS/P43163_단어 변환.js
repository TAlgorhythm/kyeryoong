// P43163. 단어 변환
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/43163

// word1이 word2와 한 개의 알파벳만 차이가 나는지 확인하는 함수
function isAdjacent(word1, word2) {
  var diff = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diff = diff + 1;
    }
  }

  return diff === 1;
}

function solution(begin, target, words) {
  // target이 words에 없는 경우 === 변환할 수 없는 경우
  if (!words.includes(target)) {
    return 0;
  }

  // 너비 우선 탐색 알고리즘
  function BFS(begin) {
    // 변환된 적이 있는 단어들
    var visitedWords = [];

    // 큐 사용
    // [Key Point] 큐에 [단어, 단계] 형태로 삽입
    var queue = [[begin, 0]];

    // 큐가 비어잇지 않을 때 까지 계속 실행
    while (queue.length > 0) {
      // [현재 단어, 현재 단계]
      var [currentWord, currentStep] = queue.shift();

      // 바꿀 수 있는 단어(들)을 찾기
      for (let i = 0; i < words.length; i++) {
        if (
          // 현재 단어와 한 개의 알파벳만 차이가 나는지 확인
          isAdjacent(currentWord, words[i]) &&
          // 현재 단어가 변환된 적이 없는지 확인
          !visitedWords.includes(words[i])
        ) {
          // 현재 단어가 target이면 현재 단계에 1을 더한 값을 반환
          if (words[i] === target) {
            return currentStep + 1;
          }

          // 바꿀 수 있는 단어(들)을 변환된 적이 있는 단어에 삽입
          visitedWords.push(words[i]);

          // 바꿀 수 있는 단어(들)을 큐에 [바꿀 수 있는 단어, 현재 단계 + 1]로 삽입
          queue.push([words[i], currentStep + 1]);
        }
      }
    }

    // 너비 우선 탐색 알고리즘을 수행해도 target에 도달하지 못한 경우 0을 반환
    return 0;
  }

  return BFS(begin);
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
