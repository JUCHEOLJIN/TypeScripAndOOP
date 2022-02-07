{
  // Array
  const fruits: string[] = ["사과", "바나나"];
  const scroes: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {
    // fruits 는 읽기만 가능하다
  }

  // Tuple -> 사용을 권장하지는 않는다. 객체를 사용함을 권장. / interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
