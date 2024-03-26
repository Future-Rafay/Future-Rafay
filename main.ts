//   25/3/24
//My first simple calculator based on CLI.
console.log('25/March/2024');

console.log("THIS IS MY FIRST CALCULATOR BASED ON CLI");

import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    { message: 'Enter the first number', type: 'number', name: 'firstNumber' },
    { message: 'Enter the second number', type: 'number', name: 'secondNumber'},
    {
        message: 'Select one of the operator to perform action',
        type: 'list',
        name: 'operator',
        choices: ['Add','Sub','Multiply','Divide'],
    },
]);

if  (answer.operator === 'Add') {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === 'Sub') {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === 'Multiply') {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === 'Divide') {
    console.log(answer.firstNumber / answer.scondNumber);
} else {
    console.log('Please select a valid operator');
}