const removeFromArray = function(arr, ...args) {
   const res = arr.filter((num) => !args.includes(num))
   return res; 
};

// Do not edit below this line
module.exports = removeFromArray;
