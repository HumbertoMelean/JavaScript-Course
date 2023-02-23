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
