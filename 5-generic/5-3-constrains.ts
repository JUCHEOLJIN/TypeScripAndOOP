{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!");
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time");
    }

    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다.
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const eden = new FullTimeEmployee();
  const bb = new PartTimeEmployee();
  eden.workFullTime();
  bb.workPartTime();

  const edenAfterPay = pay(eden);
  const bbAfterPay = pay(bb);

  const obj = {
    name: "eden",
    age: 20,
  };

  const obj2 = {
    animal: "monkey",
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "name")); // eden
  console.log(getValue(obj, "age")); // 20
  console.log(getValue(obj2, "animal")); // "monkey"
}
