//関数の実行
countdown();

function countdown() {
  // #countdown要素を取得
  const countdown = document.querySelector("#countdown");

  // 現在のカウントダウン
  let currentCount = Number(countdown.textContent);

  if (!currentCount) {
    countdown.textContent = "countdownパラメーターが不正です。";
    return;
  }

  const intervalID = setInterval(() => {
    currentCount--;

    if (currentCount === 0) {
      clearInterval(intervalID);
      countdown.textContent = "カウントダウン終了!!";
    } else {
      countdown.textContent = currentCount;
    }
  }, 1000);
}
