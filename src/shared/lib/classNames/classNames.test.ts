import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    it('should return a string with one class', () => {
        expect(classNames('class')).toBe('class');
    });
    it('should return a string with the class name and additional classes', () => {
        expect(classNames('class', {}, ['test'])).toBe('class test');
    });
    it('should return a string', () => {
        expect(classNames('class', {}, ['class'])).not.toBe('class');
    });
    it('test with additional class', () => {
        const expected = 'class1 class2 class3';
        expect(classNames('class1', {}, ['class2', 'class3'])).toBe(expected);
    });
    it('with mods', () => {
        const expected = 'class1 class2 hovered';
        expect(classNames('class1', { hovered: true }, ['class2'])).toBe(expected);
    });
});
