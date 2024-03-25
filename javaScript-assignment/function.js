// const csvString =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
// csvString.split("\n");
// let rows = csvString.split("\n");
// console.log(rows);
// let arrayOfRows = [];
// for (let i = 0; i < rows.length; i++) {
//   let column = rows[i].split(",");
//   arrayOfRows.push(column);
// }
// // arrayOfRows[0].push("Marital Status");
// let row_length = arrayOfRows[0].length;

// for (let i = 0; i < arrayOfRows.length; i++) { // Want the length of all the arrays to = the first array
//   arrayOfRows[i].length = row_length;
// }
// console.log(arrayOfRows);

// //
// let arrayOfObjects = [] // create an empty array to push objects inside it
// for (let i = 1; i < arrayOfRows.length; i++) { // iterate the outer array 
//     let object = {} // create empty object
//     arrayOfRows[i].forEach((value,j) => { // iterate each row within outer array
//         object[arrayOfRows[0][j].toLowerCase()] = value // giving each element inside of the row a key value pair
//     }) 
//     console.log(object)
//     arrayOfObjects.push(object)
// }
// console.log(arrayOfObjects)
// // Remove the last element from the sorted array
// arrayOfObjects.pop();
// // Insert the following object at index 1
// arrayOfObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
// // Add the following object to the end of the array
// arrayOfObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// console.log(arrayOfObjects);
// //to the convert the array into string
// let csvHeaders = Object.keys(arrayOfObjects[0]);
// let csvRows = arrayOfObjects.map(row => Object.values(row));
// const csv = [csvHeaders, ...csvRows].map(row => row.join(',')).join('\n');
// console.log(csv);

// let areaOfcircle = function (radius) {
//   return 3.14 * radius ** 2;
// };
// areaOfcircle(4);

// // plant growth assignmen

// // const PI = 3.1415;
// // const radius = 5;
// // const minSqmeter = 0.8;
// // let plants = 3;
// // let area = PI * radius * radius;
// // console.log(area);
// // for (let week = 1; week <= 3; week++) {
// //   let plantGrowth = 20 * (2 ** week);
// //   let availableSpace = area / (minSqmeter * plantGrowth);
// //   console.log(plantGrowth);
// //   console.log(availableSpace);
// //   if (plantGrowth > 0.8 * area) {
// //     console.log(`Predicted growth after ${week} weeks: Pruned`);
// //   } else if (plantGrowth > 0.5 * area && plantGrowth <= 0.8 * area) {
// //     console.log(`Predicted growth after ${week} weeks: Monitored`);
// //   } else if (plantGrowth <= 0.5 * area) {
// //     console.log(`Predicted growth after ${week} weeks: Planted`);
// //   }
// // }
// //part two what if the number of plants = 100

// // const PI = 3.1415;
// // const radius = 5;
// // const minSqmeter = 0.8;
// // let plants = 100;
// // let area = PI * radius * radius;

// // try {
// //   if (plants * minSqmeter > area) {
// //     throw new Error(
// //       "Not enough space available for provided number of plants!",
// //     );
// //   }

// //   for (let week = 1; week <= 3; week++) {
// //     let plantGrowth = 100 * 2 ** week;
// //     let availableSpace = area / (minSqmeter * plantGrowth);
// //       console.log(plantGrowth)
// //     if (plantGrowth > 0.8 * area) {
// //       console.log(`Predicted growth after ${week} weeks: Pruned`);
// //     } else if (plantGrowth > 0.5 * area && plantGrowth <= 0.8 * area) {
// //       console.log(`Predicted growth after ${week} weeks: Monitored`);
// //     } else if (plantGrowth <= 0.5 * area) {
// //       console.log(`Predicted growth after ${week} weeks: Planted`);
// //     }
// //   }
// // } catch (error) {
// //   console.error(error.message);
// // }


// const PI = 3.1415;
// const radius = 5;
// const areaMin = 0.8; //1 plant sq meter
// const AREA = PI * radius * radius; // total container area in sq meters

// let currentPlants = 100;
// let weeks = 10;

// let plantGrowth = currentPlants * (2 ** weeks) // amount of plants
// console.log("plant growth: " + plantGrowth)

// const maxCapacity = AREA / areaMin; // 98.1 plants
// console.log("max capacity" + maxCapacity) 

// const pruningTime = maxCapacity * 0.80; //amount of plants
// console.log("Pruning time", pruningTime)

// const minCapacity = maxCapacity * 0.50;

// //PRUNED
// if (plantGrowth > pruningTime ) {
//     console.log("Its time to prune")
// } else if (plantGrowth < pruningTime && plantGrowth > minCapacity) { //MONITORED
//     console.log("Growing at an acceptable rate")
// } else { 
// console.log("You can plant some more")
// }

// let biggerArea = plantGrowth * areaMin; //total area in sq meters
// console.log("Bigger area: " + biggerArea) // 81920 sq meters
// let biggerRadius = Math.sqrt(biggerArea / PI) // meters
// console.log("RADIUS OF BIGGER AREA " + biggerRadius) // 161.48 meters

// try {
//     if (plantGrowth > maxCapacity){
//         throw ('Too many plants for this planter!')
//     }else {
//         console.log("WAY TO GO! Keep growing!")
//     }
// }catch(err){
// console.log(err)
// }
// // Prime Time
// let n =5;
// for (n = 10; n < 20; n++){
//   if(n % 2 === 0 && n % 3 ===0){
//     console.log('this is not a prime number: '+ n);
//   }
//   else if(n % 2 !== 0 && n % 3 !==0){
//     console.log('yeay here i found my prime number: '+n);
//     break
//   }
// }
// let csvFile = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
// console.log(csvFile);
// let rowOfcsv = csvFile.split('\n');
// console.log(rowOfcsv)
// let columnOfrow = [];
// for(let i = 0 ; i < rowOfcsv.length; i++){
//   column = rowOfcsv[i].split(',');
//   columnOfrow.push(column);
// }
// let column_length = columnOfrow[0].length
// console.log(columnOfrow);
// let columunLength = columnOfrow[0].length;
// for( let i= 0 ; i < columnOfrow.length; i ++){
//   columnOfrow[i].length = column_length;
// }

// columnOfrow[0].push('year');
// console.log(columnOfrow)



// function planetHasWater(planet){
//   if (planet == 'earth' || planet == 'mars'){
//     return (true)
//   }
// }

// console.log(planetHasWater('earth'));

// function computeArea(width,height){
//   return height * width;
// }
// console.log(computeArea(7,10))
// console.log('the are of a rectangle with a width of '+ 7 + ' a height of '+ 10 + ' is ' + computeArea(7,10) +' squer units')
// // find you made it
// const hardObj = {
//   level1: {
//     level2: [
//       { level3: [] },
//       {
//         level3: {
//           level4: [
//             [],
//             {
//               level5: [
//                 {
//                   level6: {
//                     level7: [
//                       [],
//                       [],
//                       {
//                         level8: [
//                           { level9: [] },
//                           {
//                             level9: [
//                               {},
//                               {
//                                 level10: [
//                                   [],
//                                   {
//                                     level11: {
//                                       level12: [
//                                         { level13: [] },
//                                         { level13: { level14: [[], [], { level15: { level16: [{ level17: { level18: [{ level19: [{ level20: "You made it on hard object!" }] }] } }] } }] }  },
//                                         { level13: [] }]
//                                   }}
//                                       ]
//                                     }
//                          ] },
//                                   []
//                                 ]
//                               },
//                               {}
//                             ]
//                           }
//                           },
//                         ]
//                       }
//                     ]
//                   }
//                 },
//                 { level6: [] }
//               ]
//             },
// };
// console.log(hardObj.level1.level2[1].level3.level4[1].level5[0].level6.level7[2].level8[1].level9[1].level10[1].level11.level12[1].level13.level14[2].level15.level16[0].level17.level18[0].level19[0].level20)

// console.log(hardObj.level1.level2[1].level3.level4[1].level5[0].level6.level7[2].level8[1].level9[1].level10[1].level11.level12[1].level13.level14[2].level15.level16[0].level17.level18[0].level19[0].level20);
// //medium object
// const mediumObject = {
//   level1: {
//     level2: {
//       level3: {
//         level4: {
//           level5: {
//             level6: {
//               level7: {
//                 level8: [
//                   {
//                     level9: {
//                       level10: [
//                         {
//                           level11: {
//                             level12: [
//                               [],
//                               {
//                                 level13: [
//                                   {
//                                     level14: {
//                                       level15: [
//                                         [],
//                                         [],
//                                         {
//                                           level16: {
//                                             level17: [
//                                               {
//                                                 level18: {
//                                                   level19: {
//                                                     level20: "You made it!"
//                                                   }
//                                                 }
//                                               }
//                                             ]
//                                           }
//                                         }
//                                       ]
//                                     }
//                                   }
//                                 ]
//                               }
//                             ]
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 ]
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// };
// console.log(mediumObject.level1.level2.level3.level4.level5.level6.level7.level8[0].level9.level10[0].level11.level12[1].level13[0].level14.level15[2].level16.level17[0].level18.level19.level20)
// //easy object
// let easyObj= {
//   level1: {
//       prop1: "value1",
//       level2: {
//           prop2: "value2",
//           level3: {
//               prop3: "value3",
//               level4: {
//                   prop4: "value4",
//                   level5: {
//                       prop5: "value5"
//                   }
//               }
//           }
//       }
//   }
// };
// //exercise nested if ...else statement
// console.log(easyObj.level1.level2.level3.level4.level5.prop5)
// let num = 50;
// if (num > 0 && num > 100){
//   console.log('yes the condition is true')
// }
// else if ( num > 0 && num < 100){
//   console.log ('oops the number is less than 100!')
// }
// else if (num < 0){
//   console.log('this number is negative')
// }
// //exercise 2
// let grade = 82;
//  if (grade > 90 ){
//   console.log ('A')
// }
//  else if (grade > 80 && grade < 90){
//   console.log ('B')
// }
//  else if (grade > 70 && grade < 80){
//   console.log ('C')
// }
//  else if (grade > 55 && grade < 70){
//   console.log ('D')
// }
//  else if (grade < 55){
//   console.log ('F')
// }
// //array method
// let cities =[
//   { name: 'New York', temp: -19, population: 1975740, houses: 77537 },
//   { name: 'Los Angeles', temp: 11, population: 5890352, houses: 77930 },
//   { name: 'Chicago', temp: 6, population: 2088254, houses: 62881 },
//   { name: 'Houston', temp: 36, population: 4016344, houses: 88428 },
//   { name: 'Phoenix', temp: -3, population: 9981533, houses: 17343 },
//   { name: 'Philadelphia', temp: 13, population: 5741623, houses: 31004 },
//   { name: 'San Antonio', temp: -19, population: 4553717, houses: 61805 },
//   { name: 'San Diego', temp: 19, population: 9336694, houses: 60143 },
//   { name: 'Dallas', temp: -10, population: 3776686, houses: 86034 },
//   { name: 'San Jose', temp: -9, population: 9752106, houses: 42577 }
// ]
// let newArray = cities.filter((item) =>{
//   if ( item.temp > 10 && item.population > 20000){
//     return item;
//   }
// })
// console.log(newArray)
// //  for loop exercise
// for( let x = 10; x <= 90; x+=20)
//    console.log(x);
// }
// //  for loop exercise 2
// for( let x = 20; x <= 100; x+=20){
//   console.log(x);
// }
// // check number is postive or negative
// let number = 45;
// if (number > 0){
//   console.log('postive number')
// }
// else{
//   console.log('negative number')
// }
// // age above 18
// let age = 14;
// if ( age > 18){
//   console.log(' you can create youe acct here: ')
// }
// else{
//   console.log('you cant creat acct because you are under age' )
// }
//to modify the Csv file given in comma separation only
let dataOfcsv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let rowOfarr = dataOfcsv.split('\n');
console.log(rowOfarr);
let columnOfarr = rowOfarr.map((item) =>{
   return item.split(',');
})
console.log(columnOfarr)
let columnSize = columnOfarr.forEach((item,indx) =>{
  return item = item[0].length;
})
columnOfarr[0].push('gender');


// here is the second file which is given as a bones
let newData = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';
rowOfdata2 = newData.split('\n');
console.log(rowOfdata2);

 let columnOfarr2 = rowOfdata2.map((data) =>{
  return data.split(',');
})
console.log(columnOfarr2);
