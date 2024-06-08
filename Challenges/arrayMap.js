function isSubarraySumExists(arr, target){
    for (var start = 0; start < arr.length; start++){
        var currentSum = 0;
        for (var end = start; end < arr.length; end++)
            {
            currentSum += arr[end];
            if (currentSum === target) {
                return true;
            }
        }
    }
    return false;
}
var arr = [4, 2, 7, 1, 9, 5];
var target = 17;
console.log(isSubarraySumExists(arr, target));