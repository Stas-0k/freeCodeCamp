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

// towerBuilder(4)



function stat(strg) {
let arr1=[]
arr1=strg.split(',')

for(let i =0; i<arr1.length; i++) {
  arrNew = arr1[i].split('|')
  let seconds = Number(arrNew[0])*60*60+Number(arrNew[1])*60+Number(arrNew[2])
  console.log(seconds)
}

console.log(arr1)

// arr1.map(date=>{
//  let newDate = date.replace('|', ':').replace('|', ':')
//   console.log(newDate)
  

// })



}

stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17")