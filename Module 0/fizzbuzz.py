"""
Write a fizzbuzz code
print 1-100
if the number is divisible by 3 -> fizz
if the number is divisible by 5 --> buzz
if the number is divisible by both --> fizzbuzz
"""

def fizzbuzz():
    for i in range(1, 101):
        if ( i % 3 == 0 and i % 5 == 0):
            #print(f"{i} --> fizzbuzz")
            print("fizzbuzz")
        elif (i % 3==0):
            #print(f"{i} --> fizz")
            print("fizz")
        elif (i % 5 ==0):
            print("buzz")
        else:
            print(f"{i}")


def fizzbuzz_again(n: int):
    for i in range(1, n+1):
        divisible_by_3 = i % 3
        divisible_by_5 = i % 5

        if ( divisible_by_3 == 0 and divisible_by_5 == 0):
            print("fizzbuzz")
        elif divisible_by_5 == 0:
            print("buzz")
        elif divisible_by_3 == 0:
            print("fizz")
        else:
            print(i)

fizzbuzz_again(100)