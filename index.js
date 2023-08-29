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


function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);