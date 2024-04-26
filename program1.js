function smallestMissingPositiveInteger(nums) {
  
  let minNumber = 1;
  nums.filter(num => num > 0);
  sortedNums = nums.sort((a, b) => {
      return a - b;
  })
  sortedNums.forEach((num, index) => {
      if ( num === minNumber) {
        minNumber++;
      } 
      else if (num > minNumber){
          minNumber;
      }
  });
  return minNumber;
}







  
  module.exports = smallestMissingPositiveInteger;

