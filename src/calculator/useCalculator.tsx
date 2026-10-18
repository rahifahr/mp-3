import { useState } from 'react';

export type Operation = '+' | '-' | '*' | '/' | '**';

export function power(base: number, exponent: number): number | null {
    if (!Number.isInteger(exponent)) {
        return null;
    }
    let result = 1;
    const count = Math.abs(exponent);
    for (let i = 0; i < count; i++) {
        result = result * base;
    }
    return exponent < 0 ? 1 / result : result;
}

const operations: Record<Operation, (a: number, b: number) => number | null> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b === 0 ? null : a / b),
    '**': power,
};

export const operationSymbols = Object.keys(operations) as Operation[];

export function useCalculator() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [output, setOutput] = useState('');
    const [isNegative, setIsNegative] = useState(false);

    const showMessage = (message: string) => {
        setIsNegative(false);
        setOutput(message);
    };

    const calculate = (operation: Operation) => {
        if (first.trim() === '' || second.trim() === '') {
            showMessage('Please enter two numbers');
            return;
        }
        const a = Number(first);
        const b = Number(second);
        const result = operations[operation](a, b);
        if (result === null) {
            showMessage(operation === '/' ? 'Cannot divide by zero' : 'Power needs a whole-number exponent');
            return;
        }
        setIsNegative(result < 0);
        setOutput(String(result));
    };

    const clear = () => {
        setFirst('');
        setSecond('');
        setOutput('');
        setIsNegative(false);
    };

    return { first, setFirst, second, setSecond, output, isNegative, calculate, clear };
}