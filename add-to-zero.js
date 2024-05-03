function addToZero(nums) {
    if (nums.length < 2) {
            
        console.log("Array should have at least 2 numbers");
        return false
        } 
    for (i = 0; i < nums.length; i++) {
        console.log("Cycle number =",i)
        
        for (j = i; j < nums.length; j++) {
            console.log("j=",nums[j])
            if (nums[i] + nums[j+1] === 0) {
                console.log("true")
                return true
            }
        }
    } 
    return false
};

addToZero([1, 2, 0, 2]);
// console.log(addToZero([1]));
// console.log(addToZero([1, 2, 3]));
// console.log(addToZero([1, 2, 3, -2]));

    
   
