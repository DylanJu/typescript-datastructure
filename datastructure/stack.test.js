import Stack from './stack';

const stack = new Stack();

test('push', () => {
  stack.push(3);
  stack.push(4);
  stack.push(2);

  expect(stack.data).toStrictEqual([3, 4, 2]);
});

test('pop', () => {
  stack.pop();

  expect(stack.data).toStrictEqual([3, 4]);
});

test('push and pop again', () => {
  stack.push(5);
  stack.push(6);
  stack.pop();
  
  expect(stack.data).toStrictEqual([3, 4, 5]);
});

test('clear', () => {
  stack.clear();

  expect(stack.data).toStrictEqual([]);
});

test('push and pop again', () => {
  stack.push(3);
  stack.push(4);
  stack.pop();
  stack.push(2);

  expect(stack.data).toStrictEqual([3, 2]);
});
