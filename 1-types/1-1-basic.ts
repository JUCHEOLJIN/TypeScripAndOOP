{
  /**
   * JavaScript
   * Primitive; number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  /**
   * TypeScript
   */

  // number
  const num: number = 1; // 정수, 음수, 소수점 가능

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 이렇게는 사용하지 않는다! undefined만 선언하지 않으니까!
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  let preson: null; // 이렇게 사용하지 않는다.
  let person2: string | null;
  person2 = null;
  person2 = "Peter";

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print() {
    console.log("hello");
    return; // 생략
  }

  // never -> 절대 리턴하지 않는 경우에 사용
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);

    // object 💩 -> 되도록 쓰지 말자!
    let obj: object;
    function acceptSomeObject(obj: object) {}
  }
}
