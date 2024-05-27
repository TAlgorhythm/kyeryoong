function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  // 카메라의 개수
  var answer = 1;

  // 이전 경로의 나간 지점
  var prev_end = routes[0][1];

  for ([start, end] of routes) {
    // [Key Point] 현재 경로의 진입 지점이, 이전 경로의 나간 지점보다 뒤에 있는 경우
    // 즉, 현재 경로와 이전 경로가 곂치지 않는 경우, 카메라를 설치해야 함
    if (start > prev_end) {
      answer = answer + 1;
      prev_end = end;
    }
  }

  return answer;
}
