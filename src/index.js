import { PrintValue } from './util';

PrintValue('Sample');

///// cssバンドルサンプル
// import './css/style.css';
// document.getElementsByTagName('body')[0].classList.add('yellow');

///// sassバンドルサンプル
// import './scss/style.scss';

///// ES2015以降のコード
const hello = 'Hello';
console.log(`${hello} World!`);

const [shopName, ...fruit] = ['Fruit Store', 'kiwi', 'cherry', 'peach'];
console.log(shopName);
console.log(fruit);

// async - await
(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Hello');
})();