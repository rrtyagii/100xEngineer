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

fizzbuzz()