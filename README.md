# TypeScript

## What is TypeScript

TypeScript is a programming language that builds on JavaScript by adding static typing. Static typing means you can explicitly specify the types of variables, function arguments, return values, and more. Unlike dynamic typing, where types are determined at runtime, static typing allows TypeScript to catch type-related errors early during development, improving code quality and reducing bugs.

---

## Commonly Used Type Annotations

- string: Represents text values.

- number: Represents numeric values (both integers and floating-point numbers).

- boolean: Represents a value that is either true or false.

- any: A fallback type that allows any value to be assigned to a variable, disabling type checking.

- void: Typically used for functions that do not return a value.

- null and undefined: Used to represent the absence of a value.

---

## Objects in TypeScript

When we want to define the shape of an object explicitly, we can use inline type annotations. This makes it clear what type each property should have. For example:

```
let carOne: { car: string; brand: number } = { car: 'Evil Spirit', brand: 2025, color: 'Black' };
// The code above will show a redline because color is not part of the defined type { car: string; brand: number }
```

## Objects and Arrays

In TypeScript, we often deal with arrays of objects, where each object has a specific structure. TypeScript helps ensure that every object in the array conforms to the expected type.

```
let tomato = { name: 'Tomato', price: 2 };
let potato = { name: 'Potato', price: 1 };
let carrot = { name: 'Carrot' };

let vegetables: { name: string; price: number }[]? = [tomato, potato, carrot]; // ? here is **Optional Modifier**
```

**The readonly Modifier**
In TypeScript, the readonly modifier is a great way to ensure that certain properties or entire objects remain immutable. This is particularly useful when you want to prevent accidental changes to your data.

- readonly on properties ensures individual fields of objects cannot be changed.

- readonly on arrays makes the array itself immutable, preventing operations like push and pop.

- Combining both provides full immutability for objects within an array.

By using readonly, you create safer, more predictable code, reducing bugs caused by unintended mutations.

```
let vegetables: readonly { readonly name: string; readonly price?: number }[] = [
  { name: 'Tomato', price: 2 },
  { name: 'Potato', price: 1 },
  { name: 'Carrot' },
];

// Attempting to modify data
vegetables[0].name = 'Cucumber'; // Error: Cannot assign to 'name' because it is a read-only property.
vegetables.pop(); // Error: Property 'pop' does not exist on type 'readonly { readonly name: string; readonly price?: number; }[]'.

console.log(vegetables);
```

---

## Type Aliases

There are several reasons to use type aliases in your code. First of all, a type alias explicitly defines the structure of an object, so anyone reading the code knows exactly what to expect. Second, you can reuse the User type anywhere in your code without repeating the structure. And finally, TypeScript will check that any object assigned to the User type has the required properties with the correct types.

```
// Using type alias
type UserInfo = { name: string, age: number, address: string };

function getUserInfo(user: UserInfo) {
  console.log(`User Info:
    Name: ${user.name},
    Age: ${user.age},
    Address: ${user.address}`);
}

const user: UserInfo = { name: 'Alice', age: 30, address: '123 Main St' };

getUserInfo(user);
```

1. Intersection Type
   An Intersection Type is a powerful feature in TypeScript that you can combine any number of types, and the resulting type must satisfy every condition of all the original types.

```
type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address; // Intersection of User and Address
```

2. Interfaces
   Interfaces can be used to define custom types for objects, functions, or classes.

```
interface User {
    name: string;
    age: number;
    address: string;
    }

function getUserInfo(user: User): string {
return `${user.name} (${user.age} years old) lives at ${user.address}`;
}

const user: User = {
name: "Alice",
age: 30,
address: "123 Main St",
};

console.log(getUserInfo(user)); // Output: Alice (30 years old) lives at 123 Main St
```

**_Similarities Between Interfaces and Type Aliases_**

- Both interfaces and type aliases can define the structure of objects.

- Both can be extended, though the syntax differs.

- Both improve code readability and reusability.

- In most cases, you can use interfaces or type aliases interchangeably to define object types.

**_Extending with Interfaces and Type Aliases_**

Extending Interfaces:

```
interface Address {
  city: string;
  country: string;
}

interface User extends Address {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
```

Using Type Alias for Intersection:

```
type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  age: number;
} & Address;

const user: User = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
```

---

## Tuples and Enums

### Tuple

A tuple in TypeScript is a special type of array that has a fixed number of elements, where each element can have a different type. Tuples ensure that the order and types of values remain consistent.

```
// A tuple with a string and a number
let user: [string, number] = ["Alice", 25];

console.log(user[0]); // Output: Alice
console.log(user[1]); // Output: 25
```

### Enum

An enum in TypeScript is a way to define a set of named constants. Enums make code more readable and help manage a fixed set of values.

- Numeric Enums (Default):

```
enum Status {
  Pending,   // 0
  InProgress, // 1
  Completed,  // 2
}

console.log(Status.Pending);   // Output: 0
console.log(Status.Completed); // Output: 2
```

- Custom Number Values in Enums:

```
enum OrderStatus {
  Pending = 1,
  Shipped = 5,
  Delivered = 10,
}

console.log(OrderStatus.Shipped); // Output: 5
```

---

## Type Assertion

### method 1:

```
let value: unknown = "Hello, TypeScript!";

// Using type assertion to treat 'value' as a string
let strLength: number = (value as string).length;

console.log(strLength); // Output: 18
```

Here, value is initially unknown, but type assertion (as string) allows treating it as a string.

### method 2:

```
let num = <number>(10);
console.log(num); // Output: 10
```

### method 3:

```
let data: unknown;

data = "Hello";
data = 42;
data = true;

// Type checking before using the value
if (typeof data === "string") {
  console.log(data.toUpperCase()); // Works only if data is a string
}
```

Since data is unknown, TypeScript does not allow direct operations without checking its type first.

## Generics in TypeScript

Generics allow writing flexible, reusable, and type-safe code. Instead of specifying a fixed type, generics let a function, class, or interface work with multiple types while maintaining type safety.

```
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray<number>([1, 2, 3]));  // Output: [3, 2, 1]
console.log(reverseArray<string>(["A", "B", "C"])); // Output: ["C", "B", "A"]
```
