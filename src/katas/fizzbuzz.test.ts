import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz works as expected', () => {
    it('1 returns 1', () => {
        const result = fizzbuzz(1);
        expect(result).toBe(1);
    });

    it('2 returns 2', () => {
        const result = fizzbuzz(2);
        expect(result).toBe(2);
    });

    it('3 returns fizz', () => {
        const result = fizzbuzz(3);
        expect(result).toBe('fizz');
    });

    it('4 returns 4', () => {
        const result = fizzbuzz(4);
        expect(result).toBe(4);
    });
    it('5 returns buzz', () => {
        const result = fizzbuzz(5);
        expect(result).toBe('buzz');
    });
    it('6 returns fizz', () => {
        const result = fizzbuzz(6);
        expect(result).toBe('fizz');
    });
    it('7 returns 7', () => {
        const result = fizzbuzz(7);
        expect(result).toBe(7);
    });
    it('8 returns 8', () => {
        const result = fizzbuzz(8);
        expect(result).toBe(8);
    });

    it('9 returns fizz', () => {
        const result = fizzbuzz(9);
        expect(result).toBe('fizz');
    });

    it('15 returns fizz', () => {
        const result = fizzbuzz(15);
        expect(result).toBe('fizzbuzz');
    });
});