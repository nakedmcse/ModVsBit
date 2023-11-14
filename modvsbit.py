# Mod vs Bitwise Python
import time,random

# Generate array
def generate_array(arr_size):
    return [random.randint(1,100000)] * arr_size

# Even bitwise
def even_bitwise(num):
    return (num & 1) == 0

# Even modulus
def even_modulus(num):
    return (num % 2) == 0

for i in range(1,10):
    print("Generating Array")
    testArray = generate_array(100000)

    start_time_bit = time.time()
    for i in testArray:
        even_bitwise(i)
    end_time_bit = time.time()

    start_time_mod = time.time()
    for i in testArray:
        even_modulus(i)
    end_time_mod = time.time()

    print(f"Bitwise took:{(end_time_bit - start_time_bit):f}")
    print(f"Modulus took:{(end_time_mod - start_time_mod):f}")