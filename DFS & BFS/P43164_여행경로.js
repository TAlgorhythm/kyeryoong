// P43164. 여행경로
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  // 방문 가능한 경로
  var answer = [];

  // 큐 사용
  // [현재 도시, 방문한 도시 경로, 사용한 항공권]
  var queue = [["ICN", ["ICN"], []]];

  // 너비 우선 탐색 알고리즘
  while (queue.length > 0) {
    var [current, path, used_tickets] = queue.shift();

    // 사용한 항공권의 수가 모든 항공권의 개수와 동일한 경우: 모든 경로를 방문했다는 의미
    if (used_tickets.length === tickets.length) {
      answer.push(path);
    }

    // 현재 도시에서 모든 항공권을 확인
    tickets.forEach((ticket) => {
      // 해당 항공권의 [출발점, 도착점]
      const [origin, dest] = ticket;

      // [Key Point] 현재 공항 위치에서 사용 가능한 항공권을 확인
      if (
        // 항공권의 출발점과 현재 공항 위치가 동일해야 함
        origin === current &&
        // 해당 항공권이 사용한 항공권에 없어야 함 === 해당 항공권을 사용했던 적이 없어야 함
        !used_tickets.includes(ticket)
      ) {
        // 새로운 현재 도시: 항공권의 도착점으로 지정
        const new_current = dest;
        // 새로운 방문한 도시 경로: 기존의 방문한 도시 경로에 항공권의 도착점을 추가
        const new_path = [...path, dest];
        // 새로운 사용한 항공권: 기존의 사용한 항공권에 해당 항공권을 추가
        const new_used_tickets = [...used_tickets, ticket];

        queue.push([new_current, new_path, new_used_tickets]);
      }
    });
  }

  // 방문 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 반환
  return answer.sort()[0];
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
