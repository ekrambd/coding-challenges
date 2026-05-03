//second largest number

var secondLargest = function(nums){
    let largest = nums[0];
    let secondLargest = nums[0];
    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] > largest){
            secondLargest = largest;
            largest = nums[i];
        }else if(nums[i] > secondLargest && nums[i] != secondLargest){
            secondLargest = nums[i];
        }
    }
    return secondLargest;    
};

console.log(secondLargest([1,3,4,7,9,10,5,120]));