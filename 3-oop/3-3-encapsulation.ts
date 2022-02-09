{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private -> 외부에서 접근 불가
  // protected -> 상속한 자식 클래스에서는 접근 가능

  class CoffeMachine {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level -> 불필요하게 데이터가 계속 메모리에 생성되지 않도록 클래스에만 존재하먀 공유하는 값을 static으로 지정(불변값!)
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 생성자로 만드는 것을 금지하기 위해서 주로 사용하는 메서드이므로 생성자를 private으로 설정
    static makeMachine(coffeeBeans: number): CoffeMachine {
      return new CoffeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 수는 음수가 될 수 없습니다.");
      }
      this.coffeeBeans += beans;
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

  const coffeeMachine = CoffeMachine.makeMachine(32);
  coffeeMachine.fillCoffeeBeans(24);
  console.log(coffeeMachine);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);

  class User {
    // fullName: string; 멤버 변수로 선언하면 한번 계산 후에 변경되지가 않는다.

    get fullName(): string {
      // 계산이 필요할 때 유용하게 사용할 수 있다. 호출은 동일하게 user.fullName
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return 3;
    }
    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      // this.fullName = `${firstName} ${lastName}`;
    }
  }
}
