// P64064. 불량 사용자
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/64064

// 응모자 아이디가 불량 사용자 아이디인지 확인
function isBannedId(user_id, banned_id) {
  if (user_id.length !== banned_id.length) {
    return false;
  } else {
    for (let i = 0; i < user_id.length; i++) {
      if (banned_id[i] !== "*" && user_id[i] !== banned_id[i]) {
        return false;
      }
    }

    return true;
  }
}

// 응모자 아이디가 불량 사용자 아이디 목록에 있는지 확인
function isBanned(user_ids, banned_ids) {
  for (let i = 0; i < user_ids.length; i++) {
    if (!isBannedId(user_ids[i], banned_ids[i])) {
      return false;
    }
  }

  return true;
}

// 조합을 구하는 함수
function getPermutation(items, length) {
  let results = [];

  if (length === 1) {
    return items.map((x) => [x]);
  }

  items.forEach((item) => {
    const rest_numbers = items.filter((x) => x !== item);
    const permutations = getPermutation(rest_numbers, length - 1);
    const attached = permutations.map((x) => [item, ...x]);

    results.push(...attached);
  });

  return results;
}

function solution(user_ids, banned_ids) {
  const permutations = getPermutation(user_ids, banned_ids.length);

  // 경우의 수
  const banned_permutation = [];

  // [Key Point] 응모자 아이디 목록의 조합과 불량 사용자 아이디 목록이 일치하는지 확인
  for (const permutation of permutations) {
    if (isBanned(permutation, banned_ids)) {
      const sorted_permutation = permutation.sort().join("-");

      // 해당 응모자 아이디 목록의 조합이 경우의 수에 이미 포함되어 있는지 확인
      if (!banned_permutation.includes(sorted_permutation)) {
        banned_permutation.push(sorted_permutation);
      }
    }
  }

  return banned_permutation.length;
}
