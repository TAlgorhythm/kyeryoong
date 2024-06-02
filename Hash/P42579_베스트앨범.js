// P42579. 베스트앨범
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  var genre_types = [...new Set(genres)];

  var plays_by_genre = {};

  for (const genre_type of genre_types) {
    plays_by_genre[genre_type] = {
      total: 0, // 장르별 총 재생 횟수
      list: [], // 장르 별로 재생된 노래의 재생 횟수, 예) [{ 고유 번호: 재생 횟수 }, ...]
    };
  }

  // 노래를 장르별로 분류
  for (let i = 0; i < genres.length; i++) {
    plays_by_genre[genres[i]].total += plays[i];
    plays_by_genre[genres[i]].list.push({ [i]: plays[i] });
  }

  // 장르별 총 재생 횟수로 내림차순 정렬
  plays_by_genre = Object.entries(plays_by_genre);
  plays_by_genre.sort((a, b) => b[1].total - a[1].total);
  plays_by_genre = Object.fromEntries(plays_by_genre);

  // 베스트 앨범 배열
  var best_album = [];

  for (const play_by_genre in plays_by_genre) {
    const list_by_genre = plays_by_genre[play_by_genre].list;

    // 장르 별로 재생된 노래를 재생 횟수로 내림차순 정렬
    list_by_genre.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

    // 장르 별로 가장 많이 재생된 노래 두 개의 고유 번호를 베스트 앨범 배열에 삽입
    list_by_genre
      .slice(0, 2)
      .forEach((play) => best_album.push(Number(Object.keys(play)[0])));
  }

  return best_album;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
