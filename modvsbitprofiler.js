//Profiler version of modulus vs bitwise -- @pb_steele

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
console.log("Profiling for range:", range);

const timeBit = profileFunction(isEvenBit,range);
console.log("Time taken for bitwise:", timeBit);

const timeMod = profileFunction(isEvenModulo,range);
console.log("Time taken for modulo:", timeMod);

