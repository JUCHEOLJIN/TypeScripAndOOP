{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    head?: StackNode;

    constructor(private capaccity: number) {} // 보통 자료구조를 만들 때 용량을 정해준다.

    get size() {
      return this._size;
    }

    push(value: string) {
      if (this.size === this.capaccity) {
        throw new Error("Stack is full");
      }

      this._size++;
      const node: StackNode = {
        value,
        next: this.head,
      };
      this.head = node;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      this._size--;
      const node = this.head;
      this.head = node.next;
      return node.value;
    }
  }

  const stack = new StackImpl(5);
  stack.push("ss");
  stack.push("dd");
  stack.push("ee");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
