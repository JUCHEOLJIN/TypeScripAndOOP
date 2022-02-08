{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMachine {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level -> 불필요하게 데이터가 계속 메모리에 생성되지 않도록 클래스에만 존재하먀 공유하는 값을 static으로 지정(불변값!)
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMachine {
      return new CoffeMachine(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Nou enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMachine = new CoffeMachine(32);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);
}
