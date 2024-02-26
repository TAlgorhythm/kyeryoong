// P42586. 기능개발
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  // [Key Point] (100 - 진도) / 속도 공식을 사용
  // [Key Point] 공식을 이용해 2.3일이 남으면 3일이 필요하므로, Math.ceil()을 이용해 올림 처리
  var days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  // 배포일 계산
  for (let i = 1; i < days.length; i++) {
    // 뒤 기능의 배포일이 앞 기능의 배포일보다 작아서 배포할 수 없는지 확인
    if (days[i - 1] > days[i]) {
      // 뒤 기능의 배포일을 앞 기능의 배포일로 수정
      days[i] = days[i - 1];
    }
  }

  // 배포 날짜 계산
  var answer = {};

  for (let i = 0; i < days.length; i++) {
    if (answer[days[i]] === undefined) {
      answer[days[i]] = 1;
    } else {
      answer[days[i]] = answer[days[i]] + 1;
    }
  }

  return Object.values(answer);
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
