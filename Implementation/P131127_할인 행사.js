// P131127. 할인 행사
// [프로그래머스] https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  // 회원 등록 가능한 날짜
  var answer = 0;

  // 원하는 제품들과 수량
  const wantItems = new Map();

  want.forEach((item, index) => {
    wantItems.set(item, number[index]);
  });

  for (let i = 0; i < discount.length - 9; i++) {
    // 할인하는 제품들과 수량
    const discountItems = new Map();

    discount.slice(i, i + 10).forEach((item) => {
      if (discountItems.get(item)) {
        discountItems.set(item, discountItems.get(item) + 1);
      } else {
        discountItems.set(item, 1);
      }
    });

    // 원하는 제품들과 할인하는 제품들이 일치하는 경우
    if (
      String([...wantItems.keys()].sort()) ===
      String([...discountItems.keys()].sort())
    ) {
      // 원하는 제품들 모두 구매 가능 여부
      let valid = true;

      discountItems.forEach((count, item) => {
        const wantItemsCount = wantItems.get(item);
        const discountItemsCount = discountItems.get(item);

        // 원하는 제품들의 수량이 할인하는 제품들의 수량보다 작은 경우
        if (wantItemsCount < discountItemsCount) {
          // 원하는 제품들을 모두 구매할 수 없음
          valid = false;
        }
      });

      // 원하는 제품들을 모두 구매 가능하면, 회원 등록 가능한 날짜를 증가
      if (valid) {
        answer = answer + 1;
      }
    }
  }

  return answer;
}
