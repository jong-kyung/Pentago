var board = document.querySelector('.container');
var tile = document.querySelectorAll('.container> li');
var controller = document.querySelector('.controller');
var sub = 0; //서브턴
var main = 0; // 메인턴
var a = []; // 상위비트
var b = []; // 하위비트
var BLACK = 1;
var WHITE = 0;
var ROWS = 6; // 행 수
var COLS = 6; // 열 수
var WIN_COUNT = 5; // 승리에 필요한 돌 수
var MainBoard = [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1]
];
var matrix1 = // board1
 [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var rotatedMatrix1 = [];
var matrix2 = // board2
 [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var rotatedMatrix2 = [];
var matrix3 = // board3
 [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var rotatedMatrix3 = [];
var matrix4 = // board4
 [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var rotatedMatrix4 = [];
function change() {
    var board1 = document.querySelectorAll('.board1 li');
    var board2 = document.querySelectorAll('.board2 li');
    var board3 = document.querySelectorAll('.board3 li');
    var board4 = document.querySelectorAll('.board4 li');
    // id가 [j][k]인 li는 class 가 black이 되어라
    for (var i = 0; i < board1.length; i++) {
        for (var k = 0; k < matrix1.length; k++) {
            for (var j = 0; j < matrix1.length; j++) {
                if (board1[i].id == j + String(k)) {
                    if (matrix1[j][k] === 1) {
                        board1[i].className = 'black';
                    }
                    else if (matrix1[j][k] === 0) {
                        board1[i].className = 'white';
                    }
                    else {
                        board1[i].className = '';
                    }
                }
            }
        }
    }
    for (var i = 0; i < board2.length; i++) {
        for (var k = 3; k < matrix2.length + 3; k++) {
            for (var j = 0; j < matrix2.length; j++) {
                if (board2[i].id == j + String(k)) {
                    if (matrix2[j][k - 3] === 1) {
                        board2[i].className = 'black';
                    }
                    else if (matrix2[j][k - 3] === 0) {
                        board2[i].className = 'white';
                    }
                    else {
                        board2[i].className = '';
                    }
                }
            }
        }
    }
    for (var i = 0; i < board3.length; i++) {
        for (var k = 0; k < matrix3.length; k++) {
            for (var j = 3; j < matrix3.length + 3; j++) {
                if (board3[i].id == j + String(k)) {
                    if (matrix3[j - 3][k] === 1) {
                        board3[i].className = 'black';
                    }
                    else if (matrix3[j - 3][k] === 0) {
                        board3[i].className = 'white';
                    }
                    else {
                        board3[i].className = '';
                    }
                }
            }
        }
    }
    for (var i = 0; i < board4.length; i++) {
        for (var k = 3; k < matrix4.length + 3; k++) {
            for (var j = 3; j < matrix4.length + 3; j++) {
                if (board4[i].id == j + String(k)) {
                    if (matrix4[j - 3][k - 3] === 1) {
                        board4[i].className = 'black';
                    }
                    else if (matrix4[j - 3][k - 3] === 0) {
                        board4[i].className = 'white';
                    }
                    else {
                        board4[i].className = '';
                    }
                }
            }
        }
    }
}
/**
 * 주어진 보드에서 player가 승리했는지 확인하는 함수
 * @param {number} player - 현재 플레이어 ("1" 또는 "0")
 * @return {boolean} - 승리 여부
 */
function checkWin(player) {
    // 가로로 승리 확인
    for (var i = 0; i < ROWS; i++) {
        for (var j = 0; j <= COLS - WIN_COUNT; j++) {
            var count = 0;
            for (var k = 0; k < WIN_COUNT; k++) {
                if (MainBoard[i][j + k] === player) {
                    count++;
                }
            }
            if (count === 5) {
                return true;
            }
        }
    }
    // 세로로 승리 확인
    for (var i = 0; i <= ROWS - WIN_COUNT; i++) {
        for (var j = 0; j < COLS; j++) {
            var count = 0;
            for (var k = 0; k < WIN_COUNT; k++) {
                if (MainBoard[i + k][j] === player) {
                    count++;
                }
            }
            if (count === 5) {
                return true;
            }
        }
    }
    // 대각선 (왼쪽 위에서 오른쪽 아래로) 승리 확인
    for (var i = 0; i <= ROWS - WIN_COUNT; i++) {
        for (var j = 0; j <= COLS - WIN_COUNT; j++) {
            var count = 0;
            for (var k = 0; k < WIN_COUNT; k++) {
                if (MainBoard[i + k][j + k] === player) {
                    count++;
                }
            }
            if (count === WIN_COUNT) {
                return true;
            }
        }
    }
    // 대각선 (오른쪽 위에서 왼쪽 아래로) 승리 확인
    for (var i = 0; i <= ROWS - WIN_COUNT; i++) {
        for (var j = WIN_COUNT - 1; j < COLS; j++) {
            var count = 0;
            for (var k = 0; k < WIN_COUNT; k++) {
                if (MainBoard[i + k][j - k] === player) {
                    count++;
                }
            }
            if (count === WIN_COUNT) {
                return true;
            }
        }
    }
}
board.addEventListener('click', function (e) {
    var target = e.target;
    e.preventDefault();
    if (target.classList.length === 0 && sub === 0) { // 돌두는 방식, 돌 없음: -1, 흰돌: 0, 검은돌:1 / 메인판에 데이터 삽입
        if (main % 2 === 0) {
            MainBoard[target.id[0]][target.id[1]] = 1;
        }
        else {
            MainBoard[target.id[0]][target.id[1]] = 0;
        }
        for (var i = 0; i < MainBoard.length; i++) { // 서브판에 메인판 데이터 삽입
            for (var j = 0; j < MainBoard.length; j++) {
                if (i < 3 && j < 3) {
                    matrix1[i][j] = MainBoard[i][j];
                }
                else if (i < 3 && j >= 3) {
                    matrix2[i][j - 3] = MainBoard[i][j];
                }
                else if (i >= 3 && j < 3) {
                    matrix3[i - 3][j] = MainBoard[i][j];
                }
                else {
                    matrix4[i - 3][j - 3] = MainBoard[i][j];
                }
            }
        }
        change();
        sub++;
    }
});
controller.addEventListener('click', function (e) {
    var target = e.target;
    var parent = target.parentElement;
    e.preventDefault();
    // 각 판 회전 시키기
    if (tile[0] instanceof HTMLElement) { // 첫번째 판
        if (parent.dataset.num === tile[0].dataset.num && sub === 1) {
            if (target.className == 'right') {
                for (var i = 0; i < matrix1.length; i++) {
                    rotatedMatrix1[i] = [];
                    for (var j = 0; j < matrix1.length; j++) {
                        rotatedMatrix1[i][j] = matrix1[matrix1.length - j - 1][i];
                    }
                }
            }
            else {
                for (var i = 0; i < matrix1.length; i++) {
                    rotatedMatrix1[i] = [];
                    for (var j = 0; j < matrix1.length; j++) {
                        rotatedMatrix1[i][j] = matrix1[j][matrix1.length - i - 1];
                    }
                }
            }
            for (var i = 0; i < matrix1.length; i++) {
                for (var j = 0; j < matrix1.length; j++) {
                    MainBoard[i][j] = rotatedMatrix1[i][j];
                } // 메인보드에 돌아간판 데이터 삽입
            }
            for (var i = 0; i < MainBoard.length; i++) { // 서브판에 메인판 데이터 삽입
                for (var j = 0; j < MainBoard.length; j++) {
                    if (i < 3 && j < 3) {
                        matrix1[i][j] = MainBoard[i][j];
                    }
                    else if (i < 3 && j >= 3) {
                        matrix2[i][j - 3] = MainBoard[i][j];
                    }
                    else if (i >= 3 && j < 3) {
                        matrix3[i - 3][j] = MainBoard[i][j];
                    }
                    else {
                        matrix4[i - 3][j - 3] = MainBoard[i][j];
                    }
                }
            }
            change();
            sub++;
        }
    }
    else {
        return;
    }
    if (tile[1] instanceof HTMLElement) { // 두번째 판
        if (parent.dataset.num === tile[1].dataset.num && sub === 1) {
            if (target.className == 'right') {
                for (var i = 0; i < matrix2.length; i++) {
                    rotatedMatrix2[i] = [];
                    for (var j = 0; j < matrix2.length; j++) {
                        rotatedMatrix2[i][j] = matrix2[matrix2.length - j - 1][i];
                    }
                }
            }
            else {
                for (var i = 0; i < matrix2.length; i++) {
                    rotatedMatrix2[i] = [];
                    for (var j = 0; j < matrix2.length; j++) {
                        rotatedMatrix2[i][j] = matrix2[j][matrix2.length - i - 1];
                    }
                }
            }
            for (var i = 0; i < matrix2.length; i++) {
                for (var j = 0; j < matrix2.length; j++) {
                    MainBoard[i][j + 3] = rotatedMatrix2[i][j];
                } // 메인보드에 돌아간판 데이터 삽입
            }
            for (var i = 0; i < MainBoard.length; i++) { // 서브판에 메인판 데이터 삽입
                for (var j = 0; j < MainBoard.length; j++) {
                    if (i < 3 && j < 3) {
                        matrix2[i][j] = MainBoard[i][j];
                    }
                    else if (i < 3 && j >= 3) {
                        matrix2[i][j - 3] = MainBoard[i][j];
                    }
                    else if (i >= 3 && j < 3) {
                        matrix3[i - 3][j] = MainBoard[i][j];
                    }
                    else {
                        matrix4[i - 3][j - 3] = MainBoard[i][j];
                    }
                }
            }
            change();
            sub++;
        }
    }
    else {
        return;
    }
    if (tile[2] instanceof HTMLElement) { // 세번째 판
        if (parent.dataset.num === tile[2].dataset.num && sub === 1) {
            if (target.className == 'right') {
                for (var i = 0; i < matrix3.length; i++) {
                    rotatedMatrix3[i] = [];
                    for (var j = 0; j < matrix3.length; j++) {
                        rotatedMatrix3[i][j] = matrix3[matrix3.length - j - 1][i];
                    }
                }
            }
            else {
                for (var i = 0; i < matrix3.length; i++) {
                    rotatedMatrix3[i] = [];
                    for (var j = 0; j < matrix3.length; j++) {
                        rotatedMatrix3[i][j] = matrix3[j][matrix3.length - i - 1];
                    }
                }
            }
            for (var i = 0; i < matrix3.length; i++) {
                for (var j = 0; j < matrix3.length; j++) {
                    MainBoard[i + 3][j] = rotatedMatrix3[i][j];
                } // 메인보드에 돌아간판 데이터 삽입
            }
            for (var i = 0; i < MainBoard.length; i++) { // 서브판에 메인판 데이터 삽입
                for (var j = 0; j < MainBoard.length; j++) {
                    if (i < 3 && j < 3) {
                        matrix2[i][j] = MainBoard[i][j];
                    }
                    else if (i < 3 && j >= 3) {
                        matrix2[i][j - 3] = MainBoard[i][j];
                    }
                    else if (i >= 3 && j < 3) {
                        matrix3[i - 3][j] = MainBoard[i][j];
                    }
                    else {
                        matrix4[i - 3][j - 3] = MainBoard[i][j];
                    }
                }
            }
            change();
            sub++;
        }
    }
    else {
        return;
    }
    if (tile[3] instanceof HTMLElement) { // 네번째 판
        if (parent.dataset.num === tile[3].dataset.num && sub === 1) {
            if (target.className == 'right') {
                for (var i = 0; i < matrix4.length; i++) {
                    rotatedMatrix4[i] = [];
                    for (var j = 0; j < matrix4.length; j++) {
                        rotatedMatrix4[i][j] = matrix4[matrix4.length - j - 1][i];
                    }
                }
            }
            else {
                for (var i = 0; i < matrix4.length; i++) {
                    rotatedMatrix4[i] = [];
                    for (var j = 0; j < matrix4.length; j++) {
                        rotatedMatrix4[i][j] = matrix4[j][matrix4.length - i - 1];
                    }
                }
            }
            for (var i = 0; i < matrix4.length; i++) {
                for (var j = 0; j < matrix4.length; j++) {
                    MainBoard[i + 3][j + 3] = rotatedMatrix4[i][j];
                } // 메인보드에 돌아간판 데이터 삽입
            }
            for (var i = 0; i < MainBoard.length; i++) { // 서브판에 메인판 데이터 삽입
                for (var j = 0; j < MainBoard.length; j++) {
                    if (i < 3 && j < 3) {
                        matrix2[i][j] = MainBoard[i][j];
                    }
                    else if (i < 3 && j >= 3) {
                        matrix2[i][j - 3] = MainBoard[i][j];
                    }
                    else if (i >= 3 && j < 3) {
                        matrix3[i - 3][j] = MainBoard[i][j];
                    }
                    else {
                        matrix4[i - 3][j - 3] = MainBoard[i][j];
                    }
                }
            }
            change();
            sub++;
        }
    }
    else {
        return;
    }
    if (sub === 2) {
        checkWin(BLACK) == true ? alert('검은돌 승') : false;
        checkWin(WHITE) == true ? alert('흰돌 승') : false;
        main++;
        sub = 0;
    }
});
