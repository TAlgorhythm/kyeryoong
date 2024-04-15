// P12938. 최고의 집합
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12938

function solution(n, s) {
  // [Key Point] 원소둘의 곱이 최대가 되기 위해서는, 모든 원소들의 차이를 최소로 만들어야 함
  // 모든 원소들의 차이를 최소로 만들기 위해서, 기본값을 합을 개수로 나눈 몫으로 지정
  var base = Math.floor(s / n);

  // 기본값이 개수만큼 있는 배열 선언
  var numbers = Array.from({ length: n }, () => base);

  // 원소들의 합
  var sum = base * n;

  var index = 0;

  // 원소들의 합이 s가 될 때까지 반복문 수행
  while (sum !== s) {
    numbers[index] = numbers[index] + 1;
    sum = sum + 1;

    index = (index + 1) % n;
  }

  // 개수 > 합: 개수가 합보다 큰 경우, 집합을 만들 수 없기 때문에 [-1]을 반환
  if (n > s) {
    return [-1];
  } else {
    return numbers.sort();
  }
}

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));
