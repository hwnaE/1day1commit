let maxNumber = parseInt(prompt("반가워! 설정할 범위의 최댓값을 입력해줘!"));

while (!maxNumber) {
  maxNumber = parseInt(prompt("유효한 숫자를 입력해줘!"));
}
console.log(`최대로 설정한 값 : ${maxNumber}`);

const correctNumber = Math.ceil(Math.random() * maxNumber);
console.log(`정답 : ${correctNumber}`);
let guessNumber = parseInt(prompt("추측할 값을 입력해줘!"));

let numChallenge = 1;

while (parseInt(guessNumber) !== correctNumber) {
  if (guessNumber > correctNumber) {
    guessNumber = prompt("땡 틀렸어! 입력한 값보다 낮아.");
  } else if (guessNumber < correctNumber) {
    guessNumber = prompt("땡 틀렸어! 입력한 것보다 높아.");
  } else if (guessNumber == "q" || guessNumber == "Q") {
    console.log(`게임이 강제 종료 되었습니다. 도전횟수 : ${numChallenge}`);
    break;
  }

  numChallenge++;
}

if (guessNumber === correctNumber) {
  console.log("딩동댕 ~ 정답이야");
  console.log(`도전횟수 : ${numChallenge}`);
}
