const { log: print } = console;

const arr = [
  ['john', 'Doe', 1],
  ['Arran', 'jabbar', 2],
  ['Ali', 'Ahemd', 3],
];

const [element1, element2, element3] = arr;
// console.log(element1);
// console.log(element1[0]);

const persons = new Object();
// persons.firstName = element1[0];
// persons.lastName = arr[0][1];
// persons.id = arr[2][2];

// console.log(person);
//Dynamic

console.log('Dynamic');
let result=[]
for (let i = 0; i < arr.length; i++) {
  let arr2 = arr[i];
//   console.log(arr2); 
  persons.firstName=arr2[0]
  persons.lastName=arr2[1]
  persons.id=arr2[2]
  console.log(persons)
  
}

console.log(result)






