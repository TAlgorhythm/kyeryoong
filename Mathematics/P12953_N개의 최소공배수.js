// P12953. N개의 최소공배수
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/12953

// 최대공약수를 구하는 함수
function gcd(a, b) {
  // 유클리드 호제법 사용
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b % a, a);
  }
}

// 최소공배수를 구하는 함수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  while (arr.length > 1) {
    x = arr.pop();
    y = arr.pop();

    // [Key Point] 구한 최소공배수를 다시 배열에 삽입한 후, 다음 숫자와 비교하여 최소공배수를 구함
    const gcd = lcm(x, y);
    arr.push(gcd);
  }

  return arr[0];
}
