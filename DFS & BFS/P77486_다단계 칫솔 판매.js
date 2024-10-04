// P77486. 다단계 칫솔 판매
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {
  // 이익금
  let benefits = new Map();

  // 판매원들의 이익금을 모두 0원으로 초기화
  for (let i = 0; i < enroll.length; i++) {
    benefits.set(enroll[i], 0);
  }

  function payToReferral(person, price) {
    const referralIndex = enroll.findIndex((x) => x === person);
    const personsReferral = referral[referralIndex];

    // 추천인에게 지불해야 할 금액
    const costForReferral = Math.floor(price * 0.1);

    // 추천인에게 지불하고 남은 금액은 내가 가질 수 있음
    benefits.set(person, benefits.get(person) + price - costForReferral);
    // [Key Point] DFS를 활용하여 재귀 함수를 호출해야 함
    // [Key Point] costForReferral > 0: 추천인에게 지불해야 할 금액이 없는 경우 재귀 함수를 호출하지 말아야 함
    if (personsReferral !== "-" && costForReferral > 0) {
      payToReferral(personsReferral, costForReferral);
    }
  }

  // [Key Point] 한 명의 판매원은 여러 개의 판매량을 가질 수 있음 (여러 개의 판매량을 합산한 후, 함수를 호출하면 안 됨)
  for (let i = 0; i < seller.length; i++) {
    payToReferral(seller[i], amount[i] * 100);
  }

  return [...benefits.values()];
}
