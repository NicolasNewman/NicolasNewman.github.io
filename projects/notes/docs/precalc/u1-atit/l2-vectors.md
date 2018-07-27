# Vectors
A **two-dimensional vector v** is an ordered pair of real numbers, denoted in component form as \(\langle a,b \rangle\). The numbers \(a\) and \(b\) are the **components** of the vector **v**. The **standard representation** of the vector \(\langle a,b \rangle\) is the arrow from the origin to the point (a, b). The **magnitude** of **v** is the length of the arrow, and the **direction** of **v** is the direction in which the arrow is pointing.

## Magnitude
$$|v| = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$
if \(v = \langle a,b \rangle\ \) then \(|v| = \sqrt{a^2+b^2}\)

## Unit Vectors
A vector **u** with the length \(|u| = 1\) is a **unit vector**. If **v** is not the zero vector \(\langle 0,0 \rangle\), then the vector

$$u=\frac{v}{|v|}=\frac{1}{|v|}v$$

is a **unit vector in the direction of v**.

### Example

$$|v|=|\langle -3,2 \rangle |=\sqrt{(-3)^2+2^2}=\sqrt{13}$$
$$\frac{v}{|v|}=\frac{1}{\sqrt{13}} \langle -3,2 \rangle = \langle \frac{-3}{\sqrt{13}},\frac{2}{\sqrt{13}} \rangle$$

The magnitude of this vector will equal 1

## Direction Angles
Using trigonometry, the horizontal component can be found using \(|v|\cos(\theta)\) and the vertical component is \(|v|=\sin(\theta)\). Solving for these components is called **resolving the vector**

### Example
Find the magnitude and direction of the given vector: \(u=\langle3,2\rangle\)

$$|u|=\sqrt{3^2+2^2}=\sqrt{13}$$
if \(\alpha\) is the direction angle of u, then
$$u=\langle3,2\rangle=\langle|u|\cos(\alpha),|u|\sin(\alpha)$$
$$3=|u|\cos(\alpha)$$
$$3=\sqrt{13}\cos(\alpha)$$
$$\alpha=\cos^{-1}(\frac{3}{\sqrt{13}})\approx33.69^\circ$$

## Angle Between Vectors
$$\cos(\theta)=\frac{u \centerdot v}{|u||v|}$$

## Orthogonal Vectors
The vectors **u** and **v** are **orthogonal** if and only if \(u \centerdot v=0\)