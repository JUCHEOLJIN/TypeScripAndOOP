{
  type Video = {
    title: string;
    author: string;
  };

  // type VideoOptional = { => 나이스한 방법은 없을까?
  //   title?: string;
  //   author?: string;
  // };

  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = { age: 3 };

  animal.name = "eden";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "eden",
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = { title: null, author: null };
}
