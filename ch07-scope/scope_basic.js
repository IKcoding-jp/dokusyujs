  function fnScopeA() {
    let valA = 100; //関数内で定義した変数
  }

  function fnScopeB() {
    console.log(valA);
  }

  fnScopeB();
