{
  /**
   * Let's make a game 🕹
   */

  type CommandType = "up" | "down" | "left" | "right";

  const position: { x: number; y: number } = { x: 0, y: 0 };

  function move(direction: CommandType) {
    switch (direction) {
      case "up":
        position.y++;
        break;
      case "down":
        position.y--;
        break;
      case "left":
        position.x--;
        break;
      case "right":
        position.x++;
        break;
      default:
        const invalid: never = direction;
        throw new Error(`unknown direction: ${invalid}`);
    }
  }

  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
