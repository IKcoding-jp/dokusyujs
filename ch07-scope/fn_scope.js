  function fnA() {
    /* fnAスコープ開始 */
    let valA = "fnA内の値";
    const subA = function () {
      console.log("fnA内の関数");
    };

    console.log(valA);
    subA();
    /* fnAスコープ終了 */
  }
  fnA();

  function fnB() {
    console.log(valA); //fnAのスコープ外のためエラーが発生する
  }
  fnB(); //fnAのスコープ外のためエラーが発生する

  console.log(valA); //fnAのスコープ外のためエラーが発生する
  subA(); //fnAのスコープ外のためエラーが発生する
