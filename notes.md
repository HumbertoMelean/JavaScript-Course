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
