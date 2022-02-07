{
  /**
   *  Intersection Types: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.timeLog(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "eden",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
