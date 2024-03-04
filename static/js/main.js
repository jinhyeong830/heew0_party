const header = document.querySelector('header');
const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());

const dday = new Date(2024, 6, 4);
const leftMs = dday - date;
let leftDays;
if (new Date().getMonth === 5) {
  // 0531, 0601 계산 못하는 문제가 있음..
  leftDays = leftMs / (1000 * 60 * 60 * 24);
} else {
  leftDays = 1 + leftMs / (1000 * 60 * 60 * 24);
}
if (leftDays === 0) {
  // 생일 당일
  header.innerHTML = 'D-Day 🔥🐰🐻‍❄️🐸 Happy birthday ~✨🌟🥳🎁';
} else {
  header.innerHTML = `생일까지 D-${leftDays}`;
}
