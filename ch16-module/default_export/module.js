// 無名関数をデフォルトエクスポート
export default function () {
  console.log("看板商品が呼ばれた");
}

// // アロー関数をデフォルトエクスポート
// export default () => {  }

// // 名前をつけてもimportの差異には任意の名前で使うことが可能
// export default function exportedFunction() {}

// //クラスのエクスポート
// export default class {}

// //名前をつけてもimportの際には任意の名前で使うことが可能
// export default class ExportedClass {}

// //defaultという名前をつけるとデフォルトエクスポートとしてエクスポートされる
// function normalFunction() {}
// export { normalFunction as default};
