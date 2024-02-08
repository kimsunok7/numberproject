let computerNum = 0; /*랜덤번호지정*/
let chances = 5; /**기회몇번인지 체크 */
let gameOver = false;
let history = []; /*같은 번호를 여러번입력했을때 알려주려고 함*/
let playButton = document.getElementById("play-button");
/*유저가 번호입력한다. 그리고 go라는 버튼을 누름 console.log(playButton)*/
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let resetButton = document.getElementById("reset-button");

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}
pickRandomNum();

playButton.addEventListener("click", play);

function play() {
  // console.log("게임시작");

  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이의 숫자를 이력하세요";
    return;
  }

  /*같은 숫자입력했을때*/

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
    return;
  }

  if (userValue < computerNum) {
    // console.log("Up");
    resultArea.textContent = "UP!";
    document.getElementById("img").src = "up.jpg";
  } else if (userValue > computerNum) {
    // console.log("Down");
    resultArea.textContent = "DOWN!!";
    document.getElementById("img").src = "down.jpg";
  } else {
    // console.log("정답입니다");
    resultArea.textContent = "정답입니다!!";
    document.getElementById("img").src = "bingo.jpg";
    gameOver = true;
  }

  /* 남은 찬스 */
  chances = chances - 1;
  console.log("chance", chances);

  chanceArea.textContent = `남은찬스:${chances}번`;

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }

  /*같은 번호입력했을때 */
  history.push(userValue);
  console.log(history);
}

/*리셋 */

resetButton.addEventListener("click", reset);

function reset() {
  //user input 창 깨끗하게 정리
  userInput.value = "";

  //새로운 랜덤번호 생성
  pickRandomNum();
  resultArea.textContent = "결과값이 여기에 나옵니다";
}

/* 유저가 입력하는 곳에 클릭하면 기존 숫자 지워짐*/
userInput.addEventListener("focus", function () {
  userInput.value = "";
});
