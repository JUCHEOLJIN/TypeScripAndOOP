console.log(this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
  // increase = () => {
  // console.log(this);
  //} -> 화살표 함수를 이용하면 따로 바인딩을 하지 않아도 상위 객체의 정보를 가지고 있다.
}

const counter = new Counter();
counter.increase(); // this가 Counter을 가리킨다.
const func = counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter); -> 바인딩 해야 한다.
caller(); // this가 undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this가 Bob을 가리킨다 -> 바인딩을 하지 않으면 초기의 this를 잃어버린다. (부른 객체를 나타내기 때문)
