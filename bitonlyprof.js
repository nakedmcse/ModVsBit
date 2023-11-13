//Profiler version of modulus vs bitwise 

function isEvenModulo(num) {
    return num % 2 === 0;
}

function isEvenBit(num) {
    return (num & 1) === 0;
}

function profileFunction(func, range) {
    const start = performance.now();

    for (let i = 0; i<=range; i++) {
        func(i);
    }

    const end = performance.now();
    return end-start;
}

const range = 100000;
let runAvg = 0;
console.log("Profiling for range:", range);

//for (let i = 0; i < 20; i++) {
    const timeBit = profileFunction(isEvenBit,range);
    console.log("Time taken for bitwise:", timeBit);
    runAvg += timeBit;
//}
//console.log("Average for 20 runs:", runAvg/20);