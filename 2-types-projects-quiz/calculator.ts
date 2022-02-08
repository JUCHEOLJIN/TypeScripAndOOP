{
  /**
   * Let's make a calculator 🧮
   */

  type CommandType = "add" | "subtract" | "multiply" | "divide" | "remainder";

  function calculate(command: CommandType, num1: number, num2: number): number {
    switch (command) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      case "remainder":
        return num1 % num2;
      default:
        const _command: never = command;
        throw new Error("unknown command");
    }
  }
  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("subtract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1
}
