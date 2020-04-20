// function hello(name) {
//     console.log('hello' + name);
// }

// const hello = name => console.log('hello' + name)

// 関数、引数が２つ以上の場合()が必要
// const hello = (name, age) => console.log('hello' + name + age);

// アロー以下の文が２行以上{}が必要
// const hello = (name, age) => {
//     console.log('hello' + name + age);
//     console.log('hello' + name + age);
// }

// 戻り値の場合
const hello = (name, age) => 40;
// console.log(hello());

// hello('Code Mafia', 10);
// hello('Code Mafia2', 20);
// hello();

// アロー関数でfor文
const arry = [1,2,3,4,5,6];

arry.forEach(value => console.log(value));