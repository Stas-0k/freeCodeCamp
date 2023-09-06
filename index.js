// function sumAll(arr) {
// let max = Math.max(arr[0], arr[1])
// let min = Math.min(arr[0], arr[1])
// let result =0 
// for (let i=min; i<=max; i+=1) {
//     result+=i;
// }

// return result
// }

// console.log(sumAll([1, 4]));

// let myArray = ["a", "b", "c", "d"];
// // Змініть код лише під цим рядком

// myArray[1]=true;

// // Змініть код лише над цим рядком
// console.log(myArray);


// function mutation(arr) {
//     const test = arr[1].toLowerCase();
//     const target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
//   }
  
//   mutation(["hello", "hey"]);


// function towerBuilder(nFloors) {
//   arr=[]
//   for(let i =0; i<=nFloors; i+=1) {
//     arr.push('*')
//     console.log(arr)
//   }
// }

// towerBuilder(4)urs = 



function stat(strg) {
let arr1=[]
arr1=strg.split(',')
let arrFin =[]

for(let i =0; i<arr1.length; i++) {
  arrNew = arr1[i].split('|')
  let seconds = Number(arrNew[0])*60*60+Number(arrNew[1])*60+Number(arrNew[2])
  arrFin.push(seconds)
}

let minResult = Math.min.apply(null, arrFin)
let maxResult = Math.max.apply(null, arrFin)
let range = maxResult-minResult

// let hours = Math.floor(range%3600)
// hours >=3600 ? console.log('ok') : console.log('notok')
// let minutes = Math.floor(range / 60);
// let seconds = range % 60;
// console.log(range)
// console.log(hours)
// console.log(minutes)
// console.log(seconds)

const date = new Date(null);
date.setSeconds(range); // specify value for SECONDS here
const result = date.toISOString().slice(11, 19);
console.log(result)

}

stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17")