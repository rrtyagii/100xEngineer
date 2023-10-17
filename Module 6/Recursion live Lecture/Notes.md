# Live Lecture: Recursion (Module 6; JavaScript)

recursion: program that calls itself to solve a problem or system that calls itself to break the overall problem in smaller chunks. 


The model about recursion is system that describes itself using the same system. Function that call itself is a programming detail. 

## STACKS: 
Ultimately all program compiles down to machine code. 
Compiler is used to do this. Compiler compiles the code (of a specific language) to machine code i.e machine readable assembly code. That code is very heavily procedural. 

Stack has a predictable nature win a way that we know where the current pointer in a block of memory. 
Read from the pointer’s position
Write to the next position from the pointer and then increment the pointer. 
CPU register or architecture knows where the pointer is. 
Stack becomes reliable and predictable. All programs know the current starting address. 

Stack is not used for value lookup. We use stack to store values that we may need to control the state of the program or control flow or immediate use. 

Stack is the conceptual implementation and block of memory is the practical implementation. 

CPU architecture today is not heap friendly. Heap is good for storing values and looking them up later. Stack can be used for control. Because of the repeatable, reliable and predictable nature of stacks, it can be used for control flow. That is where recursion comes into the picture. 

It is possible to predict program flow, if you understand the stack flow. 
For eg: Browsers seems continuous flow of instruction. But at memory level it is one CPU instruction and one memory stack at a time. 

## RECURSION: 
We break the problem in the smallest chunks as possible. And we call that a base case. For example in the largest element problem, the smallest chunk is the empty list and the list with only 1 element. Then we return that 1 element. 

Recursion needs to have a base case and we need to be careful about the basecase other wise we run into the stack overflow errors. And we run out of memory. Why? Recursion adds extra memory storage load on the memory stack. 

For eg say there is a function F1. F1 is calling some other function F2 and then recursively calling F1. 

With each recursive call of F1, we are also assigning memory for the instructions in F1 and F2. So if we are not careful with our basecase, the recursive call will happily eat up our working memory. 

