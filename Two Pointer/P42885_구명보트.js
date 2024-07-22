// P42885. 구명보트
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  people.sort((a, b) => a - b);

  // [Key Point] 투 포인터를 사용하여 가장 가벼운 사람과 가장 무거운 사람을 묶어서 구명보트에 탑승시켜야 함
  let front = 0;
  let rear = people.length - 1;

  let answer = 0;

  // 투 포인터가 서로 만나기 전까지 실행
  while (front <= rear) {
    // 가벼운 사람의 무게 + 무거운 사람의 몸무게 <= 구명 보트의 무게 제한
    if (people[front] + people[rear] <= limit) {
      // 가벼운 사람과 무거운 사람 둘 다 구명 보트에 탑승
      front = front + 1;
      rear = rear - 1;
    }

    // 가벼운 사람의 무게 + 무거운 사람의 몸무게 > 구명 보트의 무게 제한
    else {
      // 무거운 사람만 구명 보트에 탑승
      rear = rear - 1;
    }

    answer = answer + 1;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
