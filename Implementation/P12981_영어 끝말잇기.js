// P12981. 영어 끝말잇기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12981

// 단어의 첫 문자를 반환하는 함수
function getFirstLetter(word) {
  return word[0];
}

// 단어의 마지막 문자를 반환하는 함수
function getLastLetter(word) {
  return word.slice(-1);
}

// 단어들의 마지막 단어를 반환하는 함수
function getLastWord(words) {
  return words.slice(-1)[0];
}

function solution(n, words) {
  // 이전에 등장했던 단어들
  var usedWords = [];

  // 틀린 단어의 위치
  var wrongIndex = -1;

  // 현재 단어의 위치
  var currentIndex = 0;

  while (words.length > 0) {
    // 현재 단어
    var currentWord = words.shift();

    // 앞사람이 말한 단어의 마지막 문자
    var lastWord = getLastWord(usedWords);

    // 이전에 등장했던 단어들이 없는 경우, 현재 단어를 이전에 등장했던 단어들에 삽입
    if (usedWords.length === 0) {
      usedWords.push(currentWord);
    } else if (
      // 현재 단어가 앞사람이 말한 단어들에 있는 경우
      usedWords.includes(currentWord) ||
      // 앞사람이 말한 단어의 마지막 문자와 현재 단어의 첫 문자가 일치하지 않는 경우
      getLastLetter(lastWord) !== getFirstLetter(currentWord)
    ) {
      wrongIndex = currentIndex;
      break;
    } else {
      usedWords.push(currentWord);
    }

    currentIndex = currentIndex + 1;
  }

  // 탈락자가 없는 경우
  if (wrongIndex === -1) {
    return [0, 0];
  }
  // 탈락자가 있는 경우
  else {
    // 틀린 사람 확인
    const wrongPerson = ((wrongIndex + n) % n) + 1;
    const wrongPersonIndex = Math.ceil((wrongIndex + 1) / n);
    // 몇 번째 차례에 틀렸는지 확인
    return [wrongPerson, wrongPersonIndex];
  }
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
