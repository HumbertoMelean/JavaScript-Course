# 02 JavaScript Fundamentals \_ Part 1

### 008 A Brief Introduction to JavaScript

Javascript is a high-level object-oriented, multi-paradigm programming lang

- JS allows dynamic effects and web apps in the browser
- Learning JS properly is important because it is the building block of other languages such as angular, react, vue
- JS can also be used in backend apps through node.js

### 009 Linking a JavaScript File

- Showed how to console.log
- Showed how to connect a javascript file to the index

### 010 Values and Variables

- Value is the smallest unit of information in JS
  - Can declare a value using a variable

Naming conventions

- camelCase - first word lowercase and following words uppercase
  - ex:
    - firstName
    - secondPersonIsTheBest
  - Variable cannot start with a number
  - Variable can only have letter, numbers, underscore, dollar sign
  - There are also reserved keywords
  - Variables should be descriptive

### 012 Data Types

- Values are either Objects or Primitives
- There are 7 Primitive types
  1. Number
  - Floating point numbers
  - Decimals or integers
  2. String
  - Sequence of characters / text
  3. Boolean
  - True or False
  - Used for making decisions
  4. Undefined
  - Undeclared variable
  5. Null
  - Empty Value
  - Different than undefined
  6. Symbol
  - Values that are unique
  7. BigInt
  - For large numbers

JS has Dynamic typing

- Don't have to manually define the data type
- Type is determined automatically

JS runs top to bottom

### 013 let, const and var

- 'var' is not used anymore. Can be seen in legacy code
  - Has a different scope than let
- 'let' is used to declare variables
  - When the variables is reassigned the variables has been 'mutated'
- 'const' variable cannot be reassigned
  - An 'Immutable variable'
  - Cannot be an empty variable
- Best practice is to used 'const' and only use 'let' when neccessary. This helps prevent bugs from occuring.
- If variable is declared without using 'let', 'const', nor 'var' then it will be assigned to the global object.
  - Should not be done

### 014 Basic Operators

- Can do standard math operation + - / \*
- Can also do exponents \*\*
  - ex: 2 \*\* 3 = 8
- '+' addition operator can also concatenate strings.
- += -= /= \*=
  - x = x '+' value
- ++ --
  - Add 1 or substract 1
- Comparison operators
  - < <= > >=

### 015 Operator Precedence

MDN link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

It works generally like standard math operators

### 016 Coding Challenge #1

### 017 Strings and Template Literals

- Template literal can help avoid single quote or double quote bugs/errors
- Can use template literal for all strings
- Template literals help a lot with multi lines strings

### 018 Taking Decisions* if * else Statements

- This is called a 'Controlled Structure'
  - Allows code to run non-linearly

if(condition/boolean value) {
run code in here
} else/when boolean value is false {
run this code instead
}

### 019 Coding Challenge #2

### 020 Type Conversion and Coercion

Type conversion is automatic but can done manually as well. Sometimes when done automatically, it will output unwanted results. It may end up adding/combining a number and a string.

- ex: '100' + 10 = '10010'

Coercing addition and substraction do the opposite

**should be mindful with type coercion because it may introduce bugs into the program**

### 021 Truthy and Falsy Values

There are 5 falsy values

- 0
- ''
- undefined
- null
- NaN

Javascript does type coercion to booleans?

1. Logical Operators
2. Conditional Statements

### 022 Equality Operators\_ == vs. ===

- triple === is 'strict'
  - Does not perform type coercion
- double == is loose
  - Does perform type coercion
    -Always default to triple ===

### 023 Boolean Logic

Uses true or false operators to solve problems - simple to complex

There are 3 types

1. AND

- A AND B

2. OR

- A OR B

3. NOT

- A NOT B

### 024 Logical Operators

&& or || or !variable

These operators can be used to create logical conditions so that programs can run.

### 025 Coding Challenge #3

### 026 The switch Statement

- switch(variable) {
  - case 'variable1:
    - run this code;
    - break
  - case 'variable2:
    }

### 027 Statements and Expressions

Expression is a piece of code that creates a value

Statement is a larger piece of code that does not necessarily create a value on its own. It declares already created values.

In template literals you can only insert STATEMENTS not EXPRESSIONS

### 028 The Conditional (Ternary) Operator

**Ternary Operators are STATEMENTS**

- can be used inside template literals

The ternary operator has 3 parts

1. The condition
2. The if
3. The else

### 029 Coding Challenge #4

### 030 JavaScript Releases\_ ES5, ES6+ and ESNext

History of JS

### 031 Section Intro

### 032 Activating Strict Mode

'use strict' must be the first thing on the document

- creates visible errors for wrong code that otherwise would be missed
- has a list of reserved words
- Another layer of preventative bug catching

### 033 Functions

- function is a piece of re-usable code
- When using a function, it is called
  - Calling/Running/Invoking
- s

### 034 Function Declarations vs. Expressions

functions are also values

- function declarations can be called on before they are declared.
- function declarations are not assigned to a variable.

### 035 Arrow Functions

- Arrow function is a function expression
- Will implicitly return the result if there is only 1 line of code

### 036 Functions Calling Other Functions

- Having functions call other functions helps keep your code dry.

### 037 Reviewing Functions

1. Function delcaration

- function that can be used before its declared

2. Function expression

- a function value stored in a variable

3. Arrow function

- Optimal for 1 line functions
- no 'this' keyword

### Coding Challenge #1

### 039 Introduction to Arrays

Arrays are a data structure

- Arrays give the ability to store information to be easily accessible later
- Only primative values are immutable
  - Arrays are not immutable
  - Can replace specific values within an array. Cannot change the entire array.
-

### 040 Basic Array Operations (Methods)

- indexof returns index
- includes returns true or false
- retrieve value by knowing the index

### Coding Challenge #2

### 042 Introduction to Objects

object
property: value

- objects used to group together different variable that belong together.
- order does not matter when retrieving value
-

### 043 Dot vs. Bracket Notation

- '.' the dot is called an operator
- Dot notation works on objects not arrays
- Bracket Notation can use an expression

### 044 Object Methods

### 045 Coding Challenge #3

### 046 Iteration\_ The for Loop

- Loops help automate repetitive tasks

Syntax

1. Starting condition
2. Logical condition that is evaluated before each iteration of the loop
3. Increasing/decrease the counter value

### 047 Looping Arrays, Breaking and Continuing

Most for loops conditions looks similar to this
'(let i = 0; i < (xxxx).length; i++)'

- _continue_
  - Filters out unwanted actions from happening by creating conditions to 'continue' the function.
  - Only applies to current interations of the loop
- _break_
  - terminates the entire loop

### 048 Looping Backwards and Loops in Loops

Can create a for loop within another for loop

### 049 The while Loop

- While loop doesn't need a counter
- Only needs a logical condition

### 070 PROJECT #1\_ Guess My Number!

- EX: .textContent
  - These are called 'dot' operators
  - They run left to right
  - Can have multiple

### 071 What's the DOM and DOM Manipulation

- DOM
  - Document Object Model
  - Allows HTML and CSS to be accessed with JS

### 072 Selecting and Manipulating Elements

.textContent is used to assign text value
.value is used to assign number values

### 073 Handling Click Events

### 074 Implementing the Game Logic

### 089 An High-Level Overview of JavaScript

Javascript is:

- High-Level
  - Do not have to worry about every detail of how the programs runs
- Interpreted or just-in-time compiled
  - does not compile prior to running
- Multi-paradigm
  - flexible in the way the code can be written
    - Procedural
    - OOP
    - Functional programming
- Prototype-based object-oriented
  - almost everything is an object
- First-class functions
  - functions are treated as normal variables
  - functions can be passed on to other functions
- Dynamically typed
  - don't have to assign the type for every variable
- Single-threaded
  - Only runs one thing at a time
- Non-blocking event loop
  - Takes long running tasks and executes them in the background.

### 090 The JavaScript Engine and Runtime

Compilation vs Interpretation

- Compilation
  - The entire code is converted into machine code.
- Interpretation
  - Code is converted to machine code when it runs

Javascript used to be fully interpreted. Now its time fully true anymore. Parts use compilation and other parts are interpreted

- This is called Just-In-Time

1. JS first parses the code that it will compile
2. Compilation begins
3. The code then executes

- Happens in the 'Call Stack'

4. Then the compiled code is optimized

### 091 Execution Contexts and The Call Stack

- Global execution context
  - Top level code
    - The function name but not the function instructions
-

### 103 Destructuring Arrays

- destructuring is a breaking a complex data structure down to a simpler one

Left side of the equal sign signifies destructuring

### 104 Destructuring Objects

restaurant.orderDelivery({
time: '22:30',
address: 'Via del Sole, 21',
mainIndex: 2,
starterIndex: 2,
});

In this ^^^^ time, address, etc.. must be identical to the object to be called on.

### 105 The Spread Operator (...)

Spread operators work on itterables

- arrays, strings, maps, sets
- Not Objects

### 106 Rest Pattern and Parameters

- Both look the same but have different functions
- Rest Parameter used where variable names are
- rest Parameter groups up remaining variables into a single array

### 107 Short Circuiting (&& and \_\_)

Works with falsy values

### 108 The Nullish Coalescing Operator (\_\_)

Works with Nullish values
'Null' Or 'Undefined' - 0 and '' (empty string)

### 109 Logical Assignment Operators
