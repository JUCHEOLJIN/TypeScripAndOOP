{
  /**
   *  Type Assertions π©
   */
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length); // 100% μ₯λ΄νλ κ²½μ°μλ§ μ¬μ©!

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(3)); // μ΄λ κ² μλμΉ μμ μλ¬λ₯Ό λ§λ€ μ μλ€! π₯²

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers(); // findNumbers()! λ κ°λ₯
  numbers!.push(2); // λ¬΄μ‘°κ±΄ κ°μ΄ μλ€!

  const button = document.querySelector("class")!; // 100% νμ ν  λλ§ μ¬μ©νμ!
}
