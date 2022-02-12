{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 수는 음수가 될 수 없습니다.");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Nou enough coffee beans!");
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      }
    }

    private preheat(): void {
      console.log("heating up...🔥");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log("Steaming some milk...");
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  class SweetCoffeMaker extends CoffeeMachine {
    private addSugar(): void {
      console.log("Add Sugar...");
    }

    protected extract(shots: number): CoffeeCup {
      this.addSugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines = [new CaffeLatteMachine(16, "sss"), new SweetCoffeMaker(16)];

  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1);
  });
}
