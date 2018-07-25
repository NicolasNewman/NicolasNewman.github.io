# Sequences

## Arithmetic Sequence

An **arithmetic seuqnces** is a sequence in which each successive term has a common difference

An arithmetic sequence can be defined explicity with the formula
$$a_n=a_1+d(n-1)$$

Or recursively through the formula

$$a_1=x$$
$$a_n=a_{n-1}+d$$

## Geometric Sequence

A **geometric sequence** is a sequence in which each successive term has a common ratio

A geometric sequence can be defined explicity with the formula
$$a_n=a_1+(r)^{n-1}$$

Or recursively though the formula

$$a_1=x$$
$$a_n=a_{n-1}\times r$$

## Fibonacci Sequence

$$a_1=1$$
$$a_2=1$$
$$a_n=a_{n-2}+a_{n-1}$$

## Sums

|          | Arithmetic                   | Geometric                      |
|----------|------------------------------|--------------------------------|
| Finite   | \(S_n=\frac{n}{2}(a_1+a_2)\) | \(S_n=a_1(\frac{1-r^n}{1-r})\) |
| Infinite | N/A                          | \(S=\frac{a_1}{1-r}\)          |

# Mathmatical Induction

1. Show that the formula holds true for n=1
2. Subsitute n with k
3. Substitute k with k+1 and solve

## Examples

### Example One
Show that \(n^2+n\) is divisible by 2 for all natural numbers \(n\)

1. Holds true for n=1
	$$a_1=1^2+1$$
	$$a_1=2$$
	$$\frac{2}{2} = 1$$
2. Assume n=k
	$$k^2+k$$
3. Solve for k+1
	$$(k+1)^2+(k+1)$$
	$$k^2+2k+1+k+1$$
	$$k^2+k+2k+2$$
	$$k^2+k+2(k+1)$$
	$$\frac{k^2+k}{2} = 1$$
	$$\frac{2(k+1)}{2} = k+1$$
