{
  /**
   *  Type Aliases
   */
  type Text = string;
  const name: Text = "Eden";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "Eden",
    age: 20,
  };

  /**
   *  String Literal Types
   */

  type Name = "name";
  let edenName: Name;
  edenName = "name";
}
