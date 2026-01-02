//https://vitest.dev/guide/
//https://www.udemy.com/course/react-cero-experto/learn/lecture/51976707#overview

import { expect, test, describe } from 'vitest';
import { add, subtract, multiply } from './math.helper.ts';

describe('add', () => {
    test('should add two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(a + b);
    });
    test('should add two negatives numbers', () => {
        const a = -1;
        const b = -2;
        
        const result = add(a, b);
        expect(result).toBe(a + b);
    });

});

describe('subtract', () => {
    test('should subtract two positives numbers', () => {
        const a = 5;
        const b = 2;
        const result = subtract(a, b);
        expect(result).toBe(a - b);
        expect(result).greaterThan(0);
    })
});

describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        const a = 5;
        const b = 2;
        const result = multiply(a, b);
        expect(result).toBe(a * b);
        expect(result).greaterThan(0);
    })
});


