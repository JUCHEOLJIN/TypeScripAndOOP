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
