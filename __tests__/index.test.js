import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

// # Jest поддерживает ECMAScript модули в экспериментальном режиме
// # Чтобы активировать поддержку модулей в тестах,
// # нужно запускать тесты с переменной окружения NODE_OPTIONS
// NODE_OPTIONS=--experimental-vm-modules npx jest
//  PASS  __tests__/index.test.js
//   ✓ reverse (11ms)