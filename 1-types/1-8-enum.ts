{
  /**
   *  Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNSDAY: 2 });

  // TypeScript
  // enum은 자동으로 0부터 시작하고 임의로 1이나 다른 숫자부터 시작하게 할 수 있다. 문자열도 할당 가능하다.
  // 타입스크립트에서는 enum으로 지정된 변수에 어떤 것도 할당이 가능하고 타입이 보장되지 않는다.
  // 유니온 타입을 이용하는 것이 타입 보장에 좋다.

  enum Days {
    Monday,
    Tuesday,
    wednesday,
    Thursday,
    Friday,
    Satarday,
    sunday,
  }

  console.log(Days.Monday);
  console.log(Days.Tuesday);
}
