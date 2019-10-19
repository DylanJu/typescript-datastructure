import { LinkedList, Node } from './linkedList';

const linkedList = new LinkedList();

test('initialize', () => {
  expect(linkedList.head).toStrictEqual(new Node('head'));
});

test('insert', () => {
  linkedList.insert('a');
  expect(linkedList.last()).toStrictEqual(new Node('a'));

  linkedList.insert('b');
  expect(linkedList.last()).toStrictEqual(new Node('b'));
});

test('remove', () => {
  linkedList.remove();
  expect(linkedList.last()).toStrictEqual(new Node('a'));

  linkedList.insert('c');
  linkedList.insert('d');
  linkedList.insert('e');
  expect(linkedList.last()).toStrictEqual(new Node('e'));

  linkedList.remove();
  expect(linkedList.last()).toStrictEqual(new Node('d'));
});

test('display', () => {
  expect(linkedList.display()).toStrictEqual(['a', 'c', 'd' ]);
});
