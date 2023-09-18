/*
		Name : Seri Nakamura
    Assignment :
    Date : 09.17
    Time : Start: 19:00 End: 19:10
*/

// Problem 1
function sumFor(nums){
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
}

function sumWhile(nums){
  let sum = 0, i = 0;
  while (i < nums.length){
    sum += nums[i];
    i++;
  }
  return sum;
}

function sumRecursion(nums){
  if (nums.length === 0){
    return 0;
  } else {
    return nums[0] + sumRecursion(nums.slice(1));
  }
}

function sumTheSimpleWay(nums){
  return _.reduce(nums, function(memo, num){ return memo + num }, 0);
}

const nums = [1,2,3,4,5];
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));