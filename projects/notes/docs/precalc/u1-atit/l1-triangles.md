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