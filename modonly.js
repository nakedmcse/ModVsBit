// Generate test array
function generateArray(arrSize) {
    let retval = [];
    for (var i=0; i < arrSize; i++) {
        retval.push(Math.floor(Math.random()*100000)+1);
    }
    return retval;
}

//Check even with modulus 2
function EvenModulus(testVal) {
    return testVal % 2 == 0 ? "Even" : "Odd";
}

//Main
console.log("Building test array");
let testArray = generateArray(100000);

console.log("Testing Modulus Odd/Even");
let startMod = performance.now();
for (let i = 0; i < testArray.length; i++) {
    EvenModulus(testArray[i]);
};
let endMod = performance.now();
let diffMod = endMod - startMod;
console.log("Modulus Odd/Even Complete: ",diffMod);
