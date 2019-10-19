import Queue from './queue';

const queue = new Queue();

test('enqueue', () => {
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(2);
  queue.enqueue(5);

  expect(queue.data).toStrictEqual([5, 2, 4, 3]);
});

test('dequeue', () => {
  queue.dequeue();
  expect(queue.data).toStrictEqual([2, 4, 3]);

  queue.dequeue();
  expect(queue.data).toStrictEqual([4, 3]);
});
