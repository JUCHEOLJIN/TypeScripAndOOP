{
  /**
   *  Type Assertions 💩
   */
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length); // 100% 장담하는 경우에만 사용!

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(3)); // 이렇게 의도치 않은 에러를 만들 수 있다! 🥲

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers(); // findNumbers()! 도 가능
  numbers!.push(2); // 무조건 값이 있다!

  const button = document.querySelector("class")!; // 100% 확신할 때만 사용하자!
}
