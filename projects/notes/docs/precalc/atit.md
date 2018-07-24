# Solving triangles

## Law of Sines
$$\frac{a}{\sin(A)}=\frac{b}{\sin(B)}=\frac{c}{\sin(C)}$$

### Ambiguous Case (SSA)
![img](http://jwilson.coe.uga.edu/EMT668/EMAT6680.2001/Mealor/EMAT%206700/law%20of%20sines/Law%20of%20Sines%20ambiguous%20case/image4.gif)

* **No triangle**: If a angle is solved for and the calculator responds with an error, no triangle exists.
* **Two triangles**: 
	* Once A and \(B_1\) are found, calculate \(B_2=180-B_1\) 
	* If \(A+B_1<180^\circ\) and \(A+B_2<180^\circ\) is true, there are two triangles
	* Solve the triangle using both \(B_1\) and \(B_2\)

## Law of Cosines
$$a^2=b^2+c^2-2bc\cos(A)$$
$$\cos(A)=\frac{b^2+c^2-a^2}{2bc}$$
The law of cosines can be used to solve for SSS or SAS (with a included angle) triangles

## Heron's Area Formula
$$A=\sqrt{s(s-a)(s-b)(s-c)}$$
$$s=\frac{(a+b+c)}{2}$$

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

# DeMoivre's Theorem and nth Roots
## Absolute Value of a Complex Number
The **absolute value** of the complex number \(z=a+bi\) is given by:
$$|a+bi|=\sqrt{a^2+b^2}$$

## Trigonometric Form of a Complex Number
![img](https://learn.flvs.net/webdav/educator_precalc_v12/module06/imagmod6/06_05_02.gif)
\(a=r\cos(\theta)\) and \(b=r\sin(\theta)\)
$$a+bi=(r\cos(\theta))+(r\sin(\theta)i)=r(\cos(\theta)+i\sin(\theta))$$
$$\theta=\tan^{-1}(\frac{b}{a})$$
$$r=\sqrt{a^2+b^2}$$

## Raising a Complex Number to a Power
$$z^n=r^n(\cos(n\theta)+i\sin(n\theta)$$

## DeMoivre's Theorem for Roots

For a positive integer n, the complex number \(z=r(\cos(\theta)+i\sin(\theta))\) has exactly \(n\) distinct \(n\)th roots given by

$$\sqrt[n]{r}(\cos(\frac{\theta+2\pi k}{n})+i\sin(\frac{\theta+2\pi k}{n}))$$

$$k=0,1,2,...,n-1$$