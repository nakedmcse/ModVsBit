import com.google.common.base.Stopwatch;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

public class Main {
    //Mod vs Bit Java -- @victoriquem
    private static volatile Set<Long> numbers = new HashSet<>();
    private static List<Boolean> resultTracker = new ArrayList<>();
  
    public static void main(String[] args) {
      final var timer = Stopwatch.createUnstarted();
      for (int j = 0; j < 10; j++) {
        Boolean[] results = new Boolean[100000 * 2];
        System.out.println("Building test array");
        var testArray = generateArray(100000);
  
        System.out.println("Testing Modulus Odd/Even");
        timer.start();
        for (int k = 0; k < testArray.length; k++) {
          long i = testArray[k];
          results[k] = evenMod(i);
        }
        timer.stop();
        System.out.println("Modulus took: " + timer);
  
        timer.reset();
  
        testArray = generateArray(100000);
        System.out.println("Testing Bitwise Odd/Even");
        timer.start();
        for (var k = 0; k < testArray.length; k++) {
          long l = testArray[k];
          results[k] = evenBitwise(l);
        }
        timer.stop();
        System.out.println("Bitwise took: " + timer);
        timer.reset();
        resultTracker = Arrays.asList(results);
      }
      System.out.println(resultTracker);
    }
  
    private static long[] generateArray(final int arrSize) {
      final var retAr = new long[arrSize];
      final var seed = System.currentTimeMillis();
      final var random = new Random(seed);
      for (var i = 0; i < arrSize; i++) {
        final var randomLong = random.nextLong();
        if (numbers.contains(randomLong)) {
          i--;
          continue;
        }
        numbers.add(randomLong);
        retAr[i] = random.nextLong();
  
      }
      return retAr;
    }
  
    private static boolean evenBitwise(final long testVal) {
      return (testVal & 1) == 0;
    }
  
    private static boolean evenMod(final long testVal) {
      return testVal % 2 == 0;
    }
  }