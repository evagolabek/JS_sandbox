//// TIP CALCULATOR ////

// function calculateTip(amount, tip){

//   let percent = (tip/100); //0.05

//   let tipAmount = amount * percent;
//   let totalAmount = amount + tipAmount;
// if(tip<=5){
//   console.log('you could better than' + tipAmount); 
// } else if(tip>=20){
//   console.log('oh that tip is very generous');
// } else{
//   console.log('that tip is alright I assume'); 
//   }
// }

// calculateTip(100,15);


//// TODO LIST ////

// let toDOList = [];

// function addItem(arr, item){
//   arr.push(item);
// }

// addItem(toDOList,"walk the dog");
// addItem(toDOList,"make coffee");

// console.log(toDOList);

// //taking the user input and putting it into lowercase and trim from empty space etc
// function addItem(arr){
//   let answer = prompt("what would you like to add to your todo list?");
//   let correct = answer.toLowerCase().trim();
//   if(checkDuplicate(arr, correct)){
//     arr.push(answer); 
//     showItems(toDOList);
//   }
//   else {
//     alert('item already exists')
//   }
  
// }

////checking if it is unique ////
// function checkDuplicate(arr,item){
//   let isUnique = false;
//   let index = arr.indexOf(item);//this returns -1 if it doesn't exists 
//   if(index!=-1){
//     isUnique = false;
//   }
//   else {
//     isUnique = true;
//   }
//   return isUnique;
// }

//// ANOTHER OPTION ////

// function addItem(arr){
//   let answer = prompt("what would you like to add to your todo list?");
//   let correct = answer.toLowerCase().trim();

//   let index = arr.indexOf(correct);

//   if(index === -1){
//     arr.push(answer); 
//   }
//   else {
//     alert('item already exists')
//   }
// }


//// REMOVE ITEMS, simple version ////

// function removeItem(list){
//   if(list.length>0){
//     console.log(`You deleted "${list[list.lenght-1]}" from the list `);
//     list.pop()
//   }
//   else {
//     console.log('list does not have any more items to delete')
//   }
// }

//// PROPER REMOVE ITEM FUNCTION ////

// function removeItem(list){
//   let answer = prompt('Which item would you like to remove from your todo list?')
//   let correct = answer.trim().toLowerCase();

//   let index = list.indexOf(correct);
//   if(!checkDuplicate(list, correct)){
//      let removedItem = list.splice(index,1);
//      console.log(removedItem);
//      alert(`You removed "${removedItem}"`);
//   }
//   else{
//     console.log('no such value exists');
//   }
// }

//// FUNCTION SHOWITEMS ////

// function showItems(list){
//   let listValues = 'Your list items are: ';
//   for(let i=0;i<list.length;i++){
//     listValues += `" List item nr${i+1} : ${list[i]}"`
//   }
//   alert(listValues);
// }


// addItem(toDOList);
// addItem(toDOList);
// addItem(toDOList);

// removeItem(toDOList);
// removeItem(toDOList);
// removeItem(toDOList);

// console.log(toDOList);



//// CONVERTING STRINGS TO ARRAYS //// 

// let text = 'some short text';
// let arrText = text.split('');
// let secondText = arrText.join('')//here you can put how you want to join them

// console.log(arrText);
// console.log(secondText);

// function reversString(text){
//   let result = text.split('').reverse().join();
//   console.log(result);
// }

// reverseString("hello world")

//// FIND THE LONGEST WORD ////

// function findTheLongestword(pants){
//   let result = pants.split('');
//   console.log(result);

//   let longestWord = '';
//   for(let i = 0; i<result.length;i++){
//     if(result[i].length>longestWord.length){
//       longestWord = result[i];
//     }
//   }

//   console.log(`The longest word is: ${longestWord}`);
//   console.log(longestWord.length);
// }

// findTheLongestword("thkjhskdnhis ifs ffl l something randomjjkdhfdjfhd");


//// QUIZ EXERCISE //// 

const quiz = [
  ['best city to live in?', 'amsterdam'],
  ['capital of Poland?', 'warsaw'],
  ['the most beautiful city in Europe?', 'rome']
]

let score = 0;

for(let i =0; i<quiz.length; i++){
  let answer = prompt(quiz[i][0]);
  let answerCorrect = answer.toLowerCase().trim();

  if(answerCorrect===quiz[i][1]){
    score++;
  }
  else{
    alert(`Wrong answer.The correct answer is ${quiz[i][1]}`)
  }
}

let corrrectPercent = ((score/quiz.length)*100).toFixed(2);//2 decimels limit

alert(`Your answer ${score} question correctly and your correct percent is ${corrrectPercent}%`)