const BOARD_SIZE = 9;
const EMPTY = -1;
const BLACK = 1;
const WHITE = 0;

let board = new Array(BOARD_SIZE);
for (let i = 0; i < BOARD_SIZE; i++) {
  board[i] = new Array(BOARD_SIZE).fill(EMPTY);
}
// 내거에 적용할땐 지워도 됨, 승리함수는 판돌리고나서 작동하게 할 것.

function checkWin(color, x, y) { // x id의 상위비트, y id의 하위비트
  // 가로 체크
  let count = 0;
  for (let i = Math.max(0, x - 4); i <= Math.min(x + 4, BOARD_SIZE - 1); i++) {
    if (board[i][y] === color) {
      count++;
      if (count === 5) return true;
    } else {
      count = 0;
    }
  }

  // 세로 체크
  count = 0;
  for (let i = Math.max(0, y - 4); i <= Math.min(y + 4, BOARD_SIZE - 1); i++) {
    if (board[x][i] === color) {
      count++;
      if (count === 5) return true;
    } else {
      count = 0;
    }
  }

  // 대각선 체크 (왼쪽 상단 -> 오른쪽 하단)
  count = 0;
  for (let i = -4; i <= 4; i++) {
    let row = x + i;
    let col = y + i;
    if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) continue;
    if (board[row][col] === color) {
      count++;
      if (count === 5) return true;
    } else {
      count = 0;
    }
  }

  // 대각선 체크 (오른쪽 상단 -> 왼쪽 하단)
  count = 0;
  for (let i = -4; i <= 4; i++) {
    let row = x + i;
    let col = y - i;
    if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) continue;
    if (board[row][col] === color) {
      count++;
      if (count === 5) return true;
    } else {
      count = 0;
    }
  }

  return false;
}
