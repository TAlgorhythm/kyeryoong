// P42861. 섬 연결하기
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/42861

function solution(n, costs) {
  // 부모 테이블을 자기 자신으로 초기화
  let parent = Array.from({ length: n }, (_, index) => index);

  // 건설 비용을 기준으로 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 부모를 확인하는 함수
  function findParent(x) {
    // 자신이 부모인 경우
    if (parent[x] === x) {
      return x;
    }
    // 자신이 부모가 아닌 경우, 재귀 함수로 부모를 확인
    else {
      return findParent(parent[x]);
    }
  }

  // 두 정점이 모두 부모인 경우, 결합하는 함수
  function union(x, y) {
    x = findParent(x);
    y = findParent(y);

    // 더 작은 섬을 부모로 지정
    if (x > y) {
      // x가 더 큰 경우, x의 부모를 y로 지정
      parent[x] = y;
    } else {
      // y가 더 큰 경우, y의 부모를 x로 지정
      parent[y] = x;
    }
  }

  // 두 섬의 부모를 비교
  function isSameParent(x, y) {
    return findParent(x) === findParent(y);
  }

  // 최소 비용의 합
  let answer = 0;

  for ([a, b, cost] of costs) {
    // 두 섬의 부모가 같지않으면, 부모를 비교하고 건설 비용을 계산
    if (!isSameParent(a, b)) {
      answer = answer + cost;
      union(a, b);
    }
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
