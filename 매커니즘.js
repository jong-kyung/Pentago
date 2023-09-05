const BOARD_SIZE = 9;
const EMPTY = -1;
const BLACK = 1;
const WHITE = 0;

let board = new Array(BOARD_SIZE);
for (let i = 0; i < BOARD_SIZE; i++) {
  board[i] = new Array(BOARD_SIZE).fill(EMPTY);
}

const ROWS = 6; // 행 수
const COLS = 6; // 열 수
const WIN_COUNT = 5; // 승리에 필요한 돌 수

/**
 * 주어진 보드에서 player가 승리했는지 확인하는 함수
 * @param {number} player - 현재 플레이어 ("1" 또는 "0")
 * @return {boolean} - 승리 여부
 */
function checkWin(player) {
    // 가로로 승리 확인
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j <= COLS - WIN_COUNT; j++) {
            let count = 0;
            for (let k = 0; k < WIN_COUNT; k++) {
                if (board[i][j + k] === player) {
                    count++;
                }
            }
            if (count === WIN_COUNT) {
                return true;
            }
        }
    }

    // 세로로 승리 확인
    for (let i = 0; i <= ROWS - WIN_COUNT; i++) {
        for (let j = 0; j < COLS; j++) {
            let count = 0;
            for (let k = 0; k < WIN_COUNT; k++) {
                if (board[i + k][j] === player) {
                    count++;
                }
            }
            if (count === WIN_COUNT) {
                return true;
            }
        }
    }

    // 대각선 (왼쪽 위에서 오른쪽 아래로) 승리 확인
    for (let i = 0; i <= ROWS - WIN_COUNT; i++) {
        for (let j = 0; j <= COLS - WIN_COUNT; j++) {
            let count = 0;
            for (let k = 0; k < WIN_COUNT; k++) {
                if (board[i + k][j + k] === player) {
                    count++;
                }
            }
            if (count === WIN_COUNT) {
                return true;
            }
        }
    }

    // 대각선 (오른쪽 위에서 왼쪽 아래로) 승리 확인
    for (let i = 0; i <= ROWS - WIN_COUNT; i++) {
        for (let j = WIN_COUNT - 1; j < COLS; j++) {
            let count = 0;
            for (let k = 0; k < WIN_COUNT; k++) {
                if (board[i + k][j - k] === player) {
                    count++;
                }
            }
            if (count === WIN_COUNT) {
                return true;
            }
        }
    }
}

checkWin(BLACK)