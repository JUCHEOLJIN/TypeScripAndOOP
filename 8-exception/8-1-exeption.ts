// Java : Exception
// JavaScript: Error

// const array = new Array(10000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents🗒";
}

function closeFile(fileName: string) {}

function run() {
  const fileName = "not exist!💩";

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
  } finally {
    // 꼭 마무리해야하는 것은 finally에서 하는 것이 좋다! 무조건 실행 된다.
    closeFile(fileName);
    console.log(`closed!`);
  }
}

run();
