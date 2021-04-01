# Bank
This project will be modelling this withdraw and deposit of money into a bank account using Object-Oriented design principles and test driven development.

# Problem Approach

## Functional Representation Domain Model

|Objects| Properties | Messages | Context | Output
|-------|-------------|---------|---------|---------
|Bank   |statement@str|print(statement@str)  |         |statements@str
|-------|------------ |---------|----------|---------- 
|Deposit  | balance@int   | credit()  |              | cash@float
|-------|------------ |---------|----------|---------- 
|Withdrawal |balance@int  | debit()  |              | cash@float
|-------|------------ |---------|----------|---------- 
| Date |date@str  | getDate() |             |date@str 

# Setup

## Requirements
To run program
*node.js
*npm (normally comes with Node.js)

## Quickstart
 1. fork this repo 

 2. clone and open folder in code editor
 ```
 $ git clone <https://github.com/ndowkunda/bank-challenge.git> && cd bank-challenge

 ```
 3. Install project dependencies
 ```
 $ npm install
 ```
 4. Run program
```
node bank.js
```

## Running Tests
This project uses the [jasmine](https://jasmine.github.io/) framework. 
```
$ npm test
# or
$ npx jasmine path/to/spec
```

## Linting code
```
npx eslint --fix
```
# Usage


# inspiration