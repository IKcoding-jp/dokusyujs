if (true) {
  /* ブロックスコープ開始 */
  let letval = "letで宣言";
  const constFn = function () {
    console.log("constで宣言");
  };
  var varVal = "varで宣言";
  function fnStmt() {
    console.log("関数宣言");
  }
  /* ブロックスコープ終了 */
}

//　以下、別のブロックスコープが生成される
if (true) {
  console.log(letval);
  constFn();
  console.log(varVal);
  fnStmt();
}
