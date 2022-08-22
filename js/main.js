// Q1 -----------------------------------------------------
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/
function nonConsecutive(arr){
  for(let i=0; i<arr.length-1; i++){
    if(arr[i]!=arr[i+1]-1)
        return i+1
  }
  return "all numbers are consecutive in the list"
};

console.log(nonConsecutive([1, 2, 3, 5, 6, 7]))
console.log(nonConsecutive([4, 5, 6, 7, 8, 7]))
console.log(nonConsecutive([4, 5, 6, 7, 8, 9]))

// Q2 ----------------------------------------------------
// Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

function totalOfPositives(arr){
    let total = 0;
    for (let i=0; i<arr.length; i++){
        if(arr[i]>0)
            total+=arr[i];
    }
    return total
};

console.log(totalOfPositives([10, 12, -9, 3, -1, 0, 15]))
console.log(totalOfPositives([3, 5, 7, 9, -10, 2, -22, -1]))



// ------------------- Codewars --------------------------
// 1 ---------------------------------------------------------------------
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(num){
    let total = 0;
    for(let i=1; i<num; i++){
      if(i%3==0 || i%5==0)
        total+=i
    }
    return total
  }

// ---------------------Python---------------------------  
//   def solution(number):
//     sum = 0
//     for i in range(number):
//         if (i % 3) == 0 or (i % 5) == 0:
//             sum += i
//     return sum

// 2---------------------------------------------------------------------
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

function count(arr, num){
  let count=0;
  for(let i=0; i<arr.length; i++)
    count += (arr[i]==num) ? 1:0;
  return count
}

function find_it(seq){
  for(i of seq)
    if(count(seq,i)%2==1)
      return i
}

// def find_it(seq):
//     for i in seq:
//         if seq.count(i)%2!=0:
//             return i

