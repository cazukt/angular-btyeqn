// // 文字列型
// var title: string = 'Angular';
// title = 'Angular!';

// // 数値型
// var n: number = 9;

// // 真偽値型
// var isOpen: boolean = true;

// // 配列型
// var keywords: (string|number)[] = ['name', 'email', 'body', 0];

// // タブル型
// var payment: [number, string, number] = [1, 'apple', 0];

// // オブジェクト型
// var object: { [key: string]: string } = {
//   name: 'Yohei Isokawa',
//   id: 'test'
// };
// var post: object = [{ id: 12, content: 'lorem ipsum' }];

// // 共用型(Union型)
// var sample: string | number | boolean;
// sample = 'Yohei';
// sample = 100;
// sample = true;

// // enum型
// enum KeyCode {
//   Backspace = 8,
//   Tab = 9,
//   Enter = 13,
// }

// console.log(KeyCode.Backspace); // = 8

// enum ErrorCode {
//   OK = 200,
//   BAD_RESPONSE = 400,
//   UNAUTHORIZED = 401,
// }

// console.log(ErrorCode.OK);

// enum Character {
//   Bob, // 0
//   Dad, // 1
//   Mom, // 2
// }

// console.log(Character.Bob);

// // any型
// var something: any = 'foo';
// something = 100;
// something = true;
// something = { id: 1 };

// // null, undefined型
// var el: Element | null = document.querySelector('#app');
// var foo: undefined = undefined;

// // 型推論
// var unknown = 'string';
// unknown = '10';

// let変数
// let foo = 'foo';
// let date = new Date();

// if (true) {
//   var foo = 'foo';
// }
// console.log(foo);

// {
//   let foo1 = 'foo1';
// }

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }
// //console.log(j);

// var hoge = 'hoge';

// function logHoge() {
//   // console.log(hoge); // 
//   let hoge = 'new hoge!';
//   console.log(hoge); // new hoge!
// }

// logHoge();

// // 定数(一度入れたら変更ができないデータの箱のこと)
// const currentYear: number = 2020;
// //currentYear = 2021; // 代入不可

// const PI = Math.PI;
// console.log(PI)

// テンプレート文字列 (Template Literals)
let template1 = `This is Template strings.`;
let name1 = 'Yohei Isokawaaaa';
let template2 = `
  Hello, TypeScript tutorial.
  ${name1}
  Thank you. 
`;
console.log(template2);