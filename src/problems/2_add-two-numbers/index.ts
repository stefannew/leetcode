import { Problem } from '../../Problem';

type Input = {
    listOne: ListNode;
    listTwo: ListNode;
};

type Output = ListNode;

export default class AddTwoNumbers extends Problem<Input, Output> {
    constructor() {
        super(2, 'Add Two Numbers', 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.');
    }

    solve({ listOne, listTwo }: Input): Output {
        return this.bruteforceSolution({ listOne, listTwo });
    }

    private bruteforceSolution({ listOne, listTwo }: Input): Output {
        const numOne = this.listToNumber(listOne);
        const numTwo = this.listToNumber(listTwo);
        const sum = numOne + numTwo;
        const reversed = sum.toString().split('').reverse().map(x => parseInt(x));

        return this.fromArray(reversed);
    }

    getTestCases(): { input: Input; expected: Output; }[] {
        return [
            {
                input: {
                    listOne: this.fromArray([2, 4, 3]),
                    listTwo: this.fromArray([5, 6, 4])
                },
                expected: this.fromArray([7, 0, 8])
            },
            {
                input: {
                    listOne: this.fromArray([0]),
                    listTwo: this.fromArray([0])
                },
                expected: this.fromArray([0])
            },
            {
                input: {
                    listOne: this.fromArray([9,9,9,9,9,9,9]),
                    listTwo: this.fromArray([9,9,9,9])
                },
                expected: this.fromArray([8,9,9,9,0,0,0,1])
            },
            {
                input: {
                    listOne: this.fromArray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),
                    listTwo: this.fromArray([5,6,4])
                },
                expected: this.fromArray([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
            }
        ]
    }

    private listToNumber(list: ListNode): bigint {
        const head = list;
        const value = [];
        let current: ListNode | null = head;

        while (current != null) {
            value.unshift(current.value);
            current = current.next;
        }

        return BigInt(value.join(''));
    }

    private fromArray(array: number[]) {
        const head = new ListNode(array.shift());
        let current = head;

        for (let i = 0; i < array.length; i++) {
            current.next = new ListNode(array[i]);
            current = current.next;
        }

        return head;
    }
}


class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value?: number, next?: ListNode | null) {
        this.value = value ?? 0;
        this.next = next ?? null;
    }
}
