alert('hello');
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'hello';

console.log(greeting);
//prints an array, individual index and value
console.log([1,2,3,4]); 
//object litteral, prints the object
console.log({a:1, b:2});

//prints a table
console.table({a:1, b:2});

//red error
console.log('This is some error');

console.clear();

//yellow error
console.log('This is a warning!');

//to know how long something takes in your script
console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');

