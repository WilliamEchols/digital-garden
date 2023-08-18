---
title: "Exercises 2.1"
date: "2023-08-15"
tags:
---

1. Let $a,b,$ and $c$ be integers. Prove that for all integers $m$ and $n$, if $a|b$ and $a|c$, then $a|(bm+cn)$.
	1. As $a|b$ there exists $m \in \mathbb{Z}$ such that $b=am$
	2. As $a|c$ there exists $n \in \mathbb{Z}$ such that $c=an$
	3. Thus, 
	4. #review 
2. Prove that for all real numbers $a$ and $b$, if $0<a<b$, then $0<a^2<b^2$.
	1. ($0<a<b$) $\to$ ($0<ab<b^2$)
	2. ($0<a<b$) $\to$ ($0<a^2<ab$)
	3. $\implies 0<a^2<b^2$
3. Prove that for all integers $m$, if $m$ is odd, then there exists $k \in \mathbb{Z}$ such that $m^2=8k+1$
	1. $m = 2n +1$ for arbitrary $n \in \mathbb{Z}$
	2. $m^2=(2n+1)^2=4n^2+4n+1$
		1. $\implies 8k = 4n^2+4n$
		2. $k=\frac{n^2+n}{2}$
		3. $k \in \mathbb{Z}$ $\iff$ $2|(n^2+n)$
			1. Case I: $2 \mid n$
				1. $n = 2j$ for arbitrary $j \in \mathbb{Z}$
				2. $n^2+n=(2j)^2+2j=4j^2+2j=2(j^2+j)$
				3. $\therefore$ $2|(n^2+n)$
			3. Case II: $2 \nmid n$
				1. $n=2l+1$ for arbitrary $j \in \mathbb{Z}$
				2. $n^2+n=(2l+1)^2+2l+1=4l^2+4l+1+2l+1=2(2l^2+3l+1)$
				3. $\therefore$ $2|(n^2+n)$
			4. $\therefore$ $2 \mid (n^2+n)$ by proof by cases
		4. $\therefore$ $k \in \mathbb{Z}$ by binconditional
	3. $\therefore$ $k \in \mathbb{Z}$ exists such that $m^2=8k+1$
4. Using definitions, prove by cases that for every integer $n$, $n^2+n+5$ is odd.
	1. Case I: $2 \mid n$
		1. $n = 2i$ for arbitrary $i \in \mathbb{Z}$
		2. $n^2+n+5=(2i)^2+(2i)+5=4i^2+2i+5=2(2i^2+2+2)+1$ which is odd by definition
	2. Case II: $2 \nmid n$
		1. $n = 2i+j$ for arbitrary $j \in \mathbb{Z}$
		2. $n^2+n+5=(2j+1)^2+(2j+1)+5=4j^2+4j+1+2j+1+5=2(2j^2+3j+3)+1$ which is odd by definition
5. Determine whether each statement is true or false. If true, then prove it. If false, then provide a counter example.
	1. a) For all positive integers $n$, $n$ is divisible by 3 is necessary for $n$ to be divisible by $6$
		1. $(\forall n \in \mathbb{Z^{+}})(6 \mid n \implies 3 \mid n)$
		2. $6 \mid n \implies n=6m$ for some $m \in \mathbb{Z}^{+}$
		3. $3 \mid 6m$ as each shares the common factor of 3
		4. Therefore by transitive property, $6 \mid n \implies 3 \mid n$ meaning that $3 \mid n$ is necessary for $6 \mid n$ $\to$ the statement is true
	2. b) For all positive integers $n$, $n$ is divisible by 3 is sufficient for $n$ to be divisible by 6
		1. $(\forall n \in \mathbb{Z}^{+})(3 \mid n \implies 6 \mid n)$
		2. $3 \mid n \implies n = 3m$ for some $m \in \mathbb{Z}^{+}$
		3. However, $6 \mid n \implies6 \mid 3m \implies 2 \mid m$ which is not a property of $m$ for all $m \in \mathbb{Z}^{+}$
		4. Therefore, the statement is false
	3. c) For all real numbers $x$, $x^2-2x-3=0$ only if $x=3$
		1. ($\forall x \in \mathbb{R}$)($x^2-2x-3=0\implies x=3$)
		2. $x=\frac{-b \pm \sqrt{ b^2-4ac }}{2a} \to x=\frac{2 \pm \sqrt{ (-2)^2-4(-3) }}{2}$
		3. $x=\frac{2 \pm \sqrt{ 16 }}{2} \to x=\frac{2 \pm 4}{2} \to x=1 \pm 2$
		4. $x = 3, -1$
		5. Therefore, the statement is false
	4. d) For all real numbers $x$, $x^2-2x-3=0$ if $x=3$
		1. ($\forall x \in \mathbb{R}$)($x=3 \implies x^2-2x-3=0$)
		2. For $x=3$, $x^2-2x-3=(3)^2-2(3)-3=9-6-3=0$
		3. Therefore, the statement is true
	5. e) For all integers $a, b,c$ if $a \mid bc$, then $a \mid b$ or $a \mid c$
		1. $(a \mid bc) \implies bc=an$ for some $n \in \mathbb{Z}$
		2. $[(a \mid b) \lor (a \mid c)] \implies [(ac \mid bc) \lor (ab \mid bc)]$
		3. $[(ac \mid an) \lor (ab \mid an)] \implies [(c \mid n) \lor (b \mid n)]$
		4. #review 
	6. f) For all integers $a,b,c,$ if $a \mid (b+c),$ then $a \mid b$ or $a | c$
		1. $[a \mid (b+c))] \implies (b+c)=an$ for some $n \in \mathbb{Z}$
		2. #review 
	7. g) For all even integers $m$ and $n$, $4 \mid mn$
		1. $m=2i,n=2j$ for some $i,j \in \mathbb{Z}$
		2. $[4 \mid mn] \implies [4 \mid (2i)(2j)] \implies [4 \mid 4ij]$
		3. Therefore the statement is true
	8. h) For all integers $n$, if $n^2$ is a multiple of 4, then $n$ is a multiple of 4
		1. $(\forall n \in \mathbb{Z})(4 \mid n^2 \implies 4 \mid n)$
		2. $[4 \mid n^2] \implies n^2=4m$ where some $m \in \mathbb{Z}$
		3. $n=\pm\sqrt{ n^2 }=\pm\sqrt{ 4m }=\pm 2 \sqrt{ m }$
		4. $[4 \mid \pm 2 \sqrt{ m } \ ] \implies [2 \mid \pm \sqrt{ m } \ ]$ which is not true for all $m \in \mathbb{Z}$
		5. Therefore, the statement is false
	9. i) There exist integers $m$ and $n$ such that $15m+12n=-6$
		1. $[15m+12n=-6]\implies[5m+4n=-2]$
		2. #review 
6. Prove that for all real numbers $x, x^2\geq 0$
	1. $(\forall x \in\mathbb{R})(x^2\geq0)$
	2. Case I: $x\geq 0$
		1. $x = n$ for arbitrary $n \in \mathbb{Z}^{+}$
			1. Does $\mathbb{Z}^{+}$ include 0?
		2. $x^2=n^2=(n)(n)$ where $n\geq 0 \implies (pos)(pos)\implies positive$
		3. Therefore, Case I $\to$ $x^2\geq 0$
	3. Case II: $x<0$
		1. $x = m$ for arbitrary $n \in \mathbb{Z}^{-}$
		2. $x^2=m^2=(m)(m)$ where $n < 0 \implies (neg)(neg)\implies positive$
		3. Therefore, Case II $\to$ $x^2\geq 0$
	4. Therefore $x \in\mathbb{R}\implies x^2\geq 0$
7. Prove that for all real numbers $x$ and $y$, if $xy=0$, then $x=0$ or $y=0$
	1. $(x,y \in\mathbb{R})(xy=0\implies x=0 \lor y=0)$
	2. #review 
8. Prove that for all real numbers $x$ and $y$, $x^2+xy+y^2\geq 0$. (HINT: Complete the square in $x$)
	1. $[x^2+xy+y^2\geq 0]\implies[(x^2+xy)+y^2\geq 0] \implies [x^2+xy+(\frac{1}{2}y)^2-(\frac{1}{2}y)^2 +y^2\geq 0]$
	2. $[(x+\frac{1}{2}y)^2-(\frac{1}{4}y)^2+y^2\geq 0]$
	3. As in 6), $x \in \mathbb{R}\implies x^2\geq 0$
	4. And $\mathbb{Z}^{+}$ is closed under addition,
	5. Therefore, $x,y \in\mathbb{R}\implies x^2+xy+y^2\geq 0$
9. Prove that for all real numbers $x$ and $y$, if $x^2=y^2$, then $x=y$ or $x=-y$; i.e., $x=\pm y$. (Your proof should not mention anything called a "square root".)
	1. $(\forall x,y\in\mathbb{R})[(x^2=y^2)\implies(x=y \lor x=-y)]$
	2. #review 
10. Prove that for all $x,b\in\mathbb{R}^{+}$, $\sqrt{ ab }=\sqrt{ a }\sqrt{ b }$ and $\sqrt{ \frac{a}{b} }=\frac{\sqrt{ a }}{\sqrt{ b }}$
	1. #review 
11. Prove that for all real numbers $x$ and $y$, if $x<y$, then $x<\frac{x+y}{2}<y$
	1. $(x<y)\implies(x+y<y+y)\implies(x+y<2y)$
	2. $(x<y)\implies(x+x<x+y)\implies(2x<x+y)$
	3. Therefore, $[2x<x+y<2y] \implies [x < \frac{x+y}{2}<y]$
12. Let $a\in\mathbb{R}$. Prove that:
	1. a) $|a|=|-a|$. (HINT: Consider three cases)
		1. Case I: $a<0$
			1. $a=-n$ for arbitrary $n\in\mathbb{Z}^{+}$
			2. $|-n|=|n|\implies n=n$
		2. Case II: $a=0$
			1. $a = 0$
			2. $|0|=|-0|\implies|0|=|0|\implies 0=0$
		3. Case III: $a>0$
			1. $a = n$ for arbitrary $n \in\mathbb{Z}^{+}$
			2. $|n|=|-n|\implies n=n$
	2. b) $-|a|\leq a\leq|a|$
		1. #review for best writing
	3. c) $|a|=0$ if and only if $a=0$
		1. $(\forall a \in \mathbb{R})(|a|=0 \iff a=0)$
		2. If $a=(n>0)$, then $|a|=n>0 \therefore a \ne 0$
		3. If $a=(n<0)$, then $|a|=n>0 \therefore a \ne 0$
		4. If $a = 0$, then $|a|=0$
		5. Therefore $|a|=0$ if and only if $a=0$
13. Let $a,b\in\mathbb{R}.$ Prove that:
	1. a) If $|a|=|b|$, then $a=b$ or $a=-b$
	2. b) $|ab|=|a| | b|$
	3. c) $|a-b|=|b-a|$
14. Let $a, b \in\mathbb{R}$. Prove that:
	1. a) (Triangle Inequality) $|a+b|\leq |a|+|b|$ (HINT: Use Exercise 2.1.12b and Proposition 2.1.12, or a proof by cases)
	2. b) $|a+b|=|a|+|b|$ if and only if $a$ and $b$ have the same sign
	3. c) $| |a| - |b| | \leq |a-b|$
	4. d) $|a-b|\leq|a|+|b|$
15. Prove that for all positive real numbers $x$, the sum of $x$ and its reciprocal is greater than or equal to 2
16. Prove that for all negative real numbers $x$, then sum of $x$ and it reciprocal is less than or equal to $-2$
17. Prove that for all $x,y \in\mathbb{R}^{+}$, $\sqrt{ xy }\leq \frac{x+y}{2}$, with equality occurring if and only if $x=y$. (This result is a special case of the *Arithmetic-Geometric Mean Inequality*)
18. Prove that for all nonnegative real numbers $\frac{2 |x-3|}{x+1}\leq 7$. (HINT: Consider two cases, based on the definition of absolute value.)
19. Prove that for all real numbers $a,b,c$ with $a\ne0$, the equation $ax^2+bx+c=0$ has a solution $u\in\mathbb{R}$ if and only if $b^2-4ac\geq 0$ and $u=\frac{-b\pm \sqrt{ b^2-4ac }}{2a}$. (Recall that a real number $u$ is a *solution* of the equation $ax^2+bx+c=0$ if and only if $au^2+bu+c=0$.)
20. A $2 \times 2$ (real) *matrix* is a table of the form $\begin{bmatrix}  a & b \\ c & d \end{bmatrix}$, where $a,b,c,d\in\mathbb{R}$. Given two $2 \times 2$ matrices (the plural of "matrix" is "matrices") $A$ = $\begin{bmatrix}  a & b \\ c & d \end{bmatrix}$ and $A$ = $\begin{bmatrix} x & y \\ z & w \end{bmatrix}$, the matrix product $AB$ is defined by. 
	1. $$AB=\begin{bmatrix}  a & b \\ c & d \end{bmatrix}\begin{bmatrix}  x & y \\ z & w \end{bmatrix} = \begin{bmatrix} xa+bz & ay+bw \\ cx+dz & cy+dw \end{bmatrix}$$
	2. a) Compute the matrix product $\begin{bmatrix} 2 & -3 \\ -1 & 4 \end{bmatrix}\begin{bmatrix} 5 & -1 \\ 2 & -2 \end{bmatrix}$
	3. b) Prove that for all $2 \times 2$ matrices $A,B,$ and $C, A(BC)=(AB)C$ (i.e., matrix multiplication is associative)
	4. c) Prove that there exist $2 \times 2$ matrices $A$ and $B$ with $AB\ne BA$ (i.e., in general, matrix multiplication is not commutative)
21. Let $a,b,c\in\mathbb{R}$ with $a\ne 0$. Prove that the equation $ax+b=c$ has a unique solution in $\mathbb{R}$; i.e., prove that $(\exists!x\in\mathbb{R})[ax+b=c]$