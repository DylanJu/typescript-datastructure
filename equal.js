const obj1 = {
  key1: 'key1',
  key2: {
    keykey: 'valuevalue',
  },
}

obj2 = obj1;

console.log(obj2 === obj1)

obj2.key1 = 'another key';

console.log(obj2 === obj1);

