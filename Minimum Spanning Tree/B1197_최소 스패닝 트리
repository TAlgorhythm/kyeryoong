// B1197. 최소 스패닝 트리
// [백준] https://www.acmicpc.net/problem/1197

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 노드의 개수와 간선의 개수
const [v, e] = input[0].split(" ").map(Number);

// 간선의 정보
const edges = [];

for (let i = 0; i < e; i++) {
  edges.push(input[i + 1].split(" ").map(Number));
}

function solution(v, e, edges) {
  // 부모 테이블을 자기 자신으로 초기화
  let parent = Array.from({ length: v }, (_, index) => index);

  // 가중치를 기준으로 오름차순 정렬
  edges.sort((a, b) => a[2] - b[2]);

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

    // 더 작은 정점을 부모로 지정
    if (x > y) {
      // x가 더 큰 경우, x의 부모를 y로 지정
      parent[x] = y;
    } else {
      // y가 더 큰 경우, y의 부모를 x로 지정
      parent[y] = x;
    }
  }

  // 두 정점의 부모를 비교
  function isSameParent(x, y) {
    return findParent(x) === findParent(y);
  }

  // 가중치의 합
  let answer = 0;

  for ([a, b, cost] of edges) {
    // 두 정점의 부모가 같지않으면, 부모를 비교하고 가중치를 계산
    if (!isSameParent(a, b)) {
      answer = answer + cost;
      union(a, b);
    }
  }

  return answer;
}

console.log(solution(v, e, edges));
