import { delay } from './ValidateValue';

describe('test', () => {
    test('Проба 1', async () => {
        const sum = await delay(() => 5 + 5, 1000);
        expect(sum).toBe(10);
    });
});
