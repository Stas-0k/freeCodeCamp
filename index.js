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
//     arr.push('*')"02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"ios
//     console.log(arr)
//   }
// }

// towerBuilder(4)urs =

// function stat(strg) {

//   let arr1 = [];
//   arr1 = strg.split(",");
//   let arrFin = [];

//   for (let i = 0; i < arr1.length; i++) {
//     arrNew = arr1[i].split("|");
//     let seconds =
//       Number(arrNew[0]) * 60 * 60 + Number(arrNew[1]) * 60 + Number(arrNew[2]);
//     arrFin.push(seconds);
//   }

//   arrFin.sort(function(a,b){return a-b});

//   let sum = 0;

//   for (let i = 0; i < arrFin.length; i++) {
//     sum += arrFin[i];
//   }

//   let minResult = Math.min.apply(null, arrFin);
//   let maxResult = Math.max.apply(null, arrFin);
//   let range = maxResult - minResult;
//   let avg = sum / arrFin.length;

//   let med=0;

//   if(arrFin.length%2===0) {
//     med = (arrFin[arrFin.length/2]+arrFin[arrFin.length/2-1])/2
//   } else {
//     med = arrFin[Math.ceil(arrFin.length/2-1)]
//   }

//   // console.log(arrFin);
//   // console.log(secToDate(range));
//   // console.log(secToDate(avg));
//   // console.log(med)

//   return `Range: ${secToDate(range)} Average: ${secToDate(avg)} Median: ${secToDate(med)}`
// }

// const secToDate = (seconds) => {
//   if(seconds==='') {return ''} else {
//   const date = new Date(null);

//   date.setSeconds(seconds);
//   const result = date.toISOString().slice(11, 19).replace(':', '|').replace(':', '|');
//   return result;
//   }
// };

// console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))

// const tikTak = (arr) => {
//   const arrNew = arr.reduce(function (a, b) {
//     return a.concat(b);
//   })

//   console.log(arrNew)

// }

// tikTak([[0, 0, 1],
//   [0, 1, 2],
//   [2, 1, 0]])

function nextBigger(num) {
  let arr = [];

  arr = Array.from(String(num), Number);

  console.log(arr);

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[arr.length - 1] > arr[arr.length - (i + 1)]) {
      arr.splice(arr.length - (i + 1), 0, arr[arr.length - 1]);
      arr.splice(arr.length - 1, 1);

      let arrSort1 = [];
      arrSort1 = arr.slice(0, arr.length - i);

      let arrSort2 = [];
      arrSort2 = arr.slice(arr.length - i, arr.length).sort(function (a, b) {
        return a - b;
      });

      let finArr = [];
      finArr = arrSort1.concat(arrSort2);

      console.log(arr);
      console.log(arrSort1);
      console.log(arrSort2);
      console.log(finArr);

      let bigger = Number(finArr.join(""));
      console.log(bigger);
      return bigger;
    } else if (arr[arr.length - i] > arr[arr.length - (i + 1)]
    & arr[arr.length - i] > arr[arr.length - (i - 1)]) {
      console.log("v2");
      arr.splice(arr.length - (i + 1), 0, arr[arr.length - i]);
      arr.splice(arr.length - i, 1);

      let arrSort1 = [];
      arrSort1 = arr.slice(0, arr.length - i);

      let arrSort2 = [];
      arrSort2 = arr.slice(arr.length - i, arr.length).sort(function (a, b) {
        return a - b;
      });

      let finArr = [];
      finArr = arrSort1.concat(arrSort2);

      console.log(arr);
      console.log(arrSort1);
      console.log(arrSort2);
      console.log(finArr);

      let bigger = Number(finArr.join(""));
      console.log(bigger);
      return bigger;
    } else if (arr[arr.length - i] > arr[arr.length - (i + 1)]
    & arr[arr.length - i] < arr[arr.length - (i - 1)]) {
      console.log("v3");
      console.log(i);
      console.log(arr[i])
      arr.splice(arr.length - (i +1), 0, arr[arr.length - i+1]);
       arr.splice(arr.length - i+1, 1);

      let arrSort1 = [];
      arrSort1 = arr.slice(0, arr.length - i);

      let arrSort2 = [];
      arrSort2 = arr.slice(arr.length - i, arr.length).sort(function (a, b) {
        return a - b;
      });

      let finArr = [];
      finArr = arrSort1.concat(arrSort2);

      console.log(arr);
      console.log(arrSort1);
      console.log(arrSort2);
      console.log(finArr);

      let bigger = Number(finArr.join(""));
      console.log(bigger);
      return bigger;
    } else if (arr[arr.length - i] <arr[arr.length - (i + 1)]
    & arr[arr.length - i] > arr[arr.length - (i - 1)]) {
      console.log("v4");
      console.log(i);
      console.log(arr[arr.length - i])
      arr.splice(arr.length - (i +2), 0, arr[arr.length - i]);
       arr.splice(arr.length - i, 1);

      let arrSort1 = [];
      arrSort1 = arr.slice(0, arr.length - i-1);

      let arrSort2 = [];
      arrSort2 = arr.slice(arr.length - i-1, arr.length).sort(function (a, b) {
        return a - b;
      });

      let finArr = [];
      finArr = arrSort1.concat(arrSort2);

      console.log(arr);
      console.log(arrSort1);
      console.log(arrSort2);
      console.log(finArr);

      let bigger = Number(finArr.join(""));
      console.log(bigger);
      return bigger;
    }
  }
  console.log("-1");
  return -1;
}

nextBigger(826391340329620);
