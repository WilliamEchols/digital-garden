---
title: "Collatz Conjecture"
date: "2023-08-17"
tags:
---

Consider the following operation on an arbitrary positive integer:

- If the number is even, divide it by two.
- If the number is odd, triple it and add one.

The Collatz conjecture is: This process will eventually reach the number 1, regardless of which positive integer is chosen initially.

# Scratch work (Thu Jul 27, 2023)

Any integer $n = 2^x [0<=x]$ converges
Any integer $n$ such that $3n + 1 = 2^x$ converges ($=3n+1$)
Any integer $n$ such that $3(3n + 1) + 1 = 2^x$ converges ($=9n+4$) 
Any integer $n$ such that $3(3(3n + 1) + 1) + 1 = 2^x$ converges ($=27n+10$)

Any integer $n$ such that $3^a * n + (3^a - 1) / 2 = 2^x \implies n$ converges

Therefore conjecture can be written as
$$
(\forall n \in\mathbb{Z}^{+})(\exists a,b\in\mathbb{Z})[ 3^an+\frac{3^a-1}{2} =2^b]
$$
$$
(\forall n \in\mathbb{Z}^{+})(\exists a,b\in\mathbb{Z})[ 2n(3^a)+3^a=2(2^b)+1]
$$
$$
(\forall n \in\mathbb{Z}^{+})(\exists a,b\in\mathbb{Z})[ 3^a(2n+1)=(2^{b+1})+1]
$$
For $b>-1$, $2^{b+1}$ is even, and therefore $(2^{b+1})+1$ is odd by definition for $b>-1$. 

Work backwards from (a,b) to find n for points on a 2D plane?