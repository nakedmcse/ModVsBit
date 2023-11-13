// Test modulus for odd/even vs bit manipulation

// Generate test array
function generateArray(arrSize) {
    let retval = [];
    for (var i=0; i < arrSize; i++) {
        retval.push(Math.floor(Math.random()*100000)+1);
    }
    return retval;
}

// Check even with bitwise and
function EvenBitwise(testVal) {
    return (testVal & 1) == 0 ? "Even" : "Odd";
}

//Check even with modulus 2
function EvenModulus(testVal) {
    return testVal % 2 == 0 ? "Even" : "Odd";
}

//Main
console.log("Building test array");
let testArray = generateArray(100000);
let testArray2 = generateArray(100000);

console.log("Testing Modulus Odd/Even");
let startMod = performance.now();
for (let i = 0; i < testArray2.length; i++) {
    EvenModulus(testArray2[i]);
};
let endMod = performance.now();
let diffMod = endMod - startMod;
console.log("Modulus Odd/Even Complete: " + diffMod);

console.log("Testing Bitwise Odd/Even");
let startBit = performance.now();
for (let i = 0; i < testArray.length; i++) {
    EvenBitwise(testArray[i]);
};
let endBit = performance.now();
let diffBit = endBit - startBit;
console.log("Bitwise Odd/Even Complete: " +  diffBit);