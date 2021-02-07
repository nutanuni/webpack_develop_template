import { PrintValue } from './util';

PrintValue('Sample');

///// cssバンドルサンプル
// import './css/style.css';
// document.getElementsByTagName('body')[0].classList.add('yellow');

///// sassバンドルサンプル
// import './scss/style.scss';

///// ES2015(ES6)
const hello = 'Hello';
console.log(`${hello} World!`);

const [shopName, ...fruit] = ['Fruit Store', 'kiwi', 'cherry', 'peach'];
console.log(shopName);
console.log(fruit);