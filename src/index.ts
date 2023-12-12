// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr:any[] = [1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][];

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];

// Union
let pid: string | number = 22;

// Enum - enumerated type
enum Direction1 {
    Up,
    Down,
    Left,
    Right
};

console.log(Direction1.Up); // prints 0
// if you put Up = 1, it will print 1 
// for the rest it will increment the number by one from the first number you specify

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
};

console.log(Direction2.Left); // prints "Left"

// Objects
type User = {
    id: number,
    name: string
};

const userJohn: User = {
    id: 1,
    name: 'John'
};

// Type Assertion
let cid: any = '1';
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
// x and y as well as the return value is a number
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    // cannot change id, because it is read only
    readonly id: number,
    name: string,
    // adding age is optional
    age?: number,
};

const user1: UserInterface = {
    id: 1,
    name: 'John'
};

// can't use interface Point = number | string
type Point = number | string;
const p1: Point = 1;

interface mathFunc {
    (x: number, y: number): number
}

const add: mathFunc = (x: number, y: number): number => x + y;
const sub: mathFunc = (x: number, y: number): number => x - y;

interface PersonInterface{
    id: number,
    name: string
    register(): string
};

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');

/* console.log(brad);
console.log(mike);
console.log(brad.register()); */

// Subclasses
class Employee extends Person {
    position: string
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'developer');

console.log(emp.name);
console.log(emp.register());