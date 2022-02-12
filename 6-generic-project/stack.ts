{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    head?: StackNode<T>;

    constructor(private capaccity: number) {} // 보통 자료구조를 만들 때 용량을 정해준다.

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capaccity) {
        throw new Error("Stack is full");
      }

      this._size++;
      const node = {
        value,
        next: this.head,
      };
      this.head = node;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      this._size--;
      const node = this.head;
      this.head = node.next;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(5);
  stack.push("ss");
  stack.push("dd");
  stack.push("ee");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(5);
  stack2.push(123);
  stack2.push(27);
  stack2.push(33);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
