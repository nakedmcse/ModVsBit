using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
class ProgramClass {
static volatile HashSet<int> numbers = new HashSet<int>();
static List<bool> resultTracker = new List<bool>();

static void Main(string[] args)
    {
        var timer = Stopwatch.StartNew();
        for (int j = 0; j < 10; j++)
        {
            bool[] results = new bool[100000 * 2];
            Console.WriteLine("Building test array");
            var testArray = GenerateArray(100000);

            Console.WriteLine("Testing Modulus Odd/Even");
            timer.Restart();
            for (int k = 0; k < testArray.Length; k++)
            {
                int i = testArray[k];
                results[k] = EvenMod(i);
            }
            timer.Stop();
            Console.WriteLine("Modulus took: " + timer.Elapsed);

            timer.Reset();

            testArray = GenerateArray(100000);
            Console.WriteLine("Testing Bitwise Odd/Even");
            timer.Start();
            for (var k = 0; k < testArray.Length; k++)
            {
                int l = testArray[k];
                results[k] = EvenBitwise(l);
            }
            timer.Stop();
            Console.WriteLine("Bitwise took: " + timer.Elapsed);
            timer.Reset();
            resultTracker = results.ToList();
        }
    }

    static int[] GenerateArray(int arrSize)
    {
        var retAr = new int[arrSize];
        var seed = DateTime.Now.Ticks;
        var random = new Random((int)(seed & 0x0000FFFF));
        for (var i = 0; i < arrSize; i++)
        {
            var randomInt = random.Next();
            if (numbers.Contains(randomInt))
            {
                i--;
                continue;
            }
            numbers.Add(randomInt);
            retAr[i] = random.Next();
        }
        return retAr;
    }

    static bool EvenBitwise(int testVal)
    {
        return (testVal & 1) == 0;
    }

    static bool EvenMod(int testVal)
    {
        return testVal % 2 == 0;
    }
}
