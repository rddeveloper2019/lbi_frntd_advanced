import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('Test classNames single arg', () => {
    expect(classNames('single')).toBe('single');
  });

  test('Test classNames double arg', () => {
    expect(classNames('test', 'test-2')).toBe('test test-2');
  });

  test('Test classNames with conditional arg', () => {
    expect(classNames({ display: true, hide: false })).toBe('display');
  });

  test('Test classNames with undefined arg', () => {
    expect(classNames()).toBe('');
  });
});
