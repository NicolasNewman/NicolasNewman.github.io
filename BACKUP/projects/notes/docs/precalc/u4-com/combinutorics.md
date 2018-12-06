# Combinutorics
**Combination** is when order doesn't matter. **Permutation** is when order matters.

## Combination
### Repetition is allowed
### No repetition
Lottery numbers are drawn and if you have the same numbers, you win!

## Permutation
There are two types of permutations
### Repetition is allowed
A lock can have the combo 333

When a thing has n different types, we have n choices each time

Choosing 3 of something, the permutations are  \(n*n*n\)

Choosing r of something that has n different types, the permutations are \(n*n*n...(r times) = n^r\)

#### Example
If a lock has 10 (n) numbers to choose from and we pick 3 (r) numbers, there are \(n^r=10^3=1000\) combinations.
### No repetition
A runner in a race can't be first and second

#### Example
How many orders could 16 pool balls be in?

Our first choice could be 1 of 16 pool balls. Our second choice could be 1 of 15 pool balls.
\(16*15*14*...1=20,922,789,888,000\) or just \(16!\)

What if we wanted just 3 of them?
\(16*15*14=3360\)

This is simplified to $$P(n,r)=_nP_r\frac{n!}{(n-r)!}$$

## Overview
* **Combinations**: order doesn't matter
    * Repetition is allowed (coins in your pocket)
    * No repetition (lottery numbers)
* **Permutations**: order matters
    * Repetition is allowed (lock combo)
        * Choosing r of something that has n types
        * \(n^r\)
        * 3 (r) digit password with 10 (n) numbers to choose from is \(10^3=1000\)
    * No repetition (racer can't win 1st and 2nd place)
        * The number of combinations needs to be reduced each time
        * \(n!\)
            * Different number of orders 16 poolballs could be arranged is \(16!\)
        * \(P(n,r)=_nP_r=\frac{n!}{(n-r)!}\)
            * Different number of orders 16 poolballs can be arranged if you choose 3 is \(\frac{16!}{(16-3)!}\)