{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMachine {
      return new CoffeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 수는 음수가 될 수 없습니다.");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Nou enough coffee beans!");
        this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAM_PER_SHOT;
      }
    }

    private preheat(): void {
      console.log("heating up...🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const coffeeMachine: CoffeMachine = CoffeMachine.makeMachine(32);
  coffeeMachine.fillCoffeeBeans(24);

  const coffeMachine2: CoffeeMaker = CoffeMachine.makeMachine(32);
  coffeMachine2.makeCoffee(2);
}
