# Hack the Burgh V Code Golf Challenge


## Problem

The problem below in any language of your choice in as few characters as possible.

Your program should take input from stdin, and print the correct result to stdout.

Everyone knows the lovely fibonacci sequence: 1 1 2 3 5 8 ...


Did you know you can make different sequences by changing the starting number?

For example, the next fib sequence starts with 1 and 2, like so: 1 2 3 5 8 13 ...

And the third, 1 3 4 7 ...

And the fourtsolveh, 1 4 5 9 ...

The nth sequence is denoted: 1 n n+1 n+n+1 ... and so on

A final sequence, the fibfib sequence, can be created by taking the nth term of the nth sequence, so: 1 2 4 9 ...

The sum of this sequence as you go along is: 1 3 7 16 ...

Your program should take an integer n and produce the sum of the first n terms of the fibfib sequence.

Remember, in real languages, arrays start at zero!

As such, the input 0 should produce 1, input 1 should produce 3, input 2 should produce 7

Go!


## Solution

See Solution.hs for 70 bytes solution in Haskell!

Edit: 50 bytes solution in Solution_improved.hs – this was found after the hackathon
