package main

import (
    "fmt"
    "math/rand"
    "time"
)

//mod vs bit GO -- @VictoriqueM

func main() {
    testSliceMod := generateSlice(100000)
    testSliceBitwise := generateSlice(100000)
    results := make([]bool, 200000)
    testBitwise(testSliceBitwise, results)
    testMod(testSliceMod, results)
    println(results)
}

func testBitwise(values []int, results []bool) {
    defer timer("testBitwise")()
    for i, value := range values {
        results[i] = evenBitwise(value)
    }
}

func testMod(values []int, results []bool) {
    defer timer("testMod")()
    for i, value := range values {
        results[i] = evenMod(value)
    }
}

func generateSlice(arrSize int) []int {
    r := rand.New(rand.NewSource(time.Now().Unix()))
    return r.Perm(arrSize)
}

func evenBitwise(testVal int) bool {
    return (testVal & 1) == 0
}

func evenMod(testVal int) bool {
    return testVal%2 == 0
}

func timer(name string) func() {
    start := time.Now()
    return func() {
        fmt.Printf("%s took %v\n", name, time.Since(start).Nanoseconds())
    }
}