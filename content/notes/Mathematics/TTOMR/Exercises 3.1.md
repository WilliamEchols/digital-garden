---
title: "Exercises 3.1"
date: "2023-08-15"
tags:
---

All exercises should be proved using induction
1. Prove that for all positive integers $n$,
	1. $\sum_{k=1}^{n}k^2=1^2+2^2+3^2+\dots+n^2=\frac{n(n+1)(2n+1)}{6}$
2. Prove that for all integers $n\geq 0$,
	1. $\sum_{k=0}^{n}2^k=1+2+2^2+\dots+2^n=2^{n+1}-1$
3. Prove that for al positive integers $n$,
	1. $\sum_{k=1}^{n}(2k-1)=1+3+5+\dots+(2n-1)=n^2$
4. Prove that for all positive integers $n$,
	1. $\sum_{k=1}^{n} \frac{1}{k(k+1)}=\frac{1}{1(2)}+\frac{1}{2(3)}+\frac{1}{3(4)}+\dots+\frac{1}{n(n+1)}=\frac{n}{n+1}$
5. Prove that for all positive integers $n$,
	1. $\sum_{k=1}^{n}(2k-1)^2=(1)^2+(3)^2+(5)^2+\dots+(2n-1)^2=\frac{4n^3-n}{3}$
6. Conjecture a formula for $\sum_{k=1}^{n}(-1)^kk^2$, and then prove the formula is correct using induction
7. Prove that for all positive integers $n,n<10^n$
8. Prove that for all positive integers $n\geq 5,n^2<2^n$
9. Prove that for all positive integers $n\geq 7,(\frac{4}{3})^n>n$
10. Prove that for all positive integers $n\geq 4,2^n<n!$
11. Prove that for all positive integers $n,n^3+8n+9$ is divisible by 3
12. Prove that for all positive integers $4^{n}-1$ is divisible by 3
13. Prove that for all positive integers $n,3^{2n}-1$ is divisible by 8
14. Let $a_{1}=2$, and let $a_{n+1}=\frac{1}{2}(a_{n}+3)$ for all $n\geq 1$. (We are essentially defining a function $a(n)=a_{n}$ for $n\in\mathbb{Z}^{+}$ by recursion)
	1. a) Prove that for all positive integers $n, a_{n}<a_{n+1}$
	2. b) Without using part (c) below, prove that for all positive integers $n, a_{n}<3$
	3. c) Prove that for all positive integers $n, a_{n}=3- \frac{1}{2^{n-1}}$
15. Let $r\in\mathbb{R}$ with $r\ne 1$. Prove that
	1. $\sum_{k=0}^{n-1}r^k=1+r+\dots+r^{n-1}=\frac{1-r^n}{1-r}$
	2. (For this notation to make sense, we "bend the rules" and declare $0^0=1$.)
16. Prove Bernoulli's Inequality: Let $x>-1$. Then for all $n\in\mathbb{Z}^{+}, (1+x)^n\geq 1+nx$
17. The *Fibonacci numbers* $f_{n}, n\in\mathbb{Z}^{+}$, are defined recursively by the formulas $f_{1}=1,f_{2}=1,$ and $f_{n}=f_{n-1}+f_{n-2}$ for all $n\geq 3$
	1. a) Find the first ten Fibonacci numbers $f_{1},\dots,f_{10}$
	2. b) Compute $f_{1}+f_{2},f_{1}+f_{2}+f_{3},f_{1}+f_{2}+f_{3}+f_{4},f_{1}+f_{2}+f_{3}+f_{4}+f_{5}$
	3. c) Conjecture a formula for the sum $f_{1}+\dots+f_{n}$ of the first $n$ Fibonacci numbers, where $n\geq 1$, and then prove the formula is correct using induction
	4. d) Use induction to prove that for all integers $k\geq 1,5\mid f_{5k}$
18. Given integers $k,n\geq 0$ with $k\leq n$, we define the *binomial coefficient* $\begin{pmatrix}n \\ k \end{pmatrix}$ by
	1. $$\begin{pmatrix}n \\ k \end{pmatrix}= \frac{n!}{k!(n-k)!} $$
	2. a) Prove that for all integers $n,k$ with $1\leq k\leq n,\begin{pmatrix}n+1 \\ k \end{pmatrix}=\begin{pmatrix}n \\ k \end{pmatrix}+\begin{pmatrix}n \\ k-1 \end{pmatrix}$. (This part does not require induction)
	3. b) Use part (a) to prove by induction on $n$ that for all integers $n\geq 0$, for all integers $k$ with $0\leq k\leq n,\begin{pmatrix}n \\ k \end{pmatrix}$ is an integer
19. Let $x,y\in\mathbb{R}$. Prove the *binomial theorem*: for all integers $n\geq 1$,
	1. $$(x+y)^n=\sum_{k=0}^{n}\begin{pmatrix}n \\ k \end{pmatrix}x^{n-k}y^k$$
	2. $$=\begin{pmatrix}n \\ k \end{pmatrix}x^n+\begin{pmatrix}n \\ 1 \end{pmatrix}x^{n-1}y+\begin{pmatrix}n \\ 2 \end{pmatrix}x^{n-2}y^2 + \dots + \begin{pmatrix}n \\ n-2 \end{pmatrix}x^2y^{n-2}+\begin{pmatrix}n \\ n-1 \end{pmatrix}xy^{n-1}+\begin{pmatrix}n \\ n \end{pmatrix}y^n$$
20. The following is a well-known example of a "proof" that all horses are the same color.
	1. Let $P(n)$ denote the statement. "For every set of $n$ horses, all the horses in the set are the same color." We "prove" $(\forall n\in\mathbb{Z}^{+})P(n)$ by indication on $n$. Note that $P(1)$ is true, since for any set containing a single horse, all the horses in that set have the same color, namely the color of that single horse. Next, let $m\geq 1$ and assume that $P(m)$ is true, i.e., that for any set of $m$ horses, all the horses in the set are the same color. We prove that $P(m+1)$ is true. Let $S$ be a set of $m+1$ horses named $x_{1},x_{2},\dots,x_{m+1}$. Now the horses $x_{1},x_{2},..,x_{m}$ are a set of $m$ horses, so by the Inductive Hypothesis, all the horses $x_{1},x_{2},\dots,x_{m}$ in this set have the same color. Furthermore, the horses $x_{1},x_{3},\dots,x_{m+1}$ (i.e., all the horses except for horse $x_{2}$) are a set of $m$ horses, so by the Inductive Hypothesis, all the horses $x_{1},x_{3},\dots,x_{m+1}$ in this set have the same color. It follows that all of the $m+1$ horses $x_{1},x_{2},\dots,x_{m+1}$ are the same color, since they are all the same color as horse $x_{1}$. Thus, $P(m+1)$ is true. It follows by PMI that $P(n)$ is true for all $n\in\mathbb{Z}^{+}$; i.e., all horses have the same color. What's wrong with this proof?