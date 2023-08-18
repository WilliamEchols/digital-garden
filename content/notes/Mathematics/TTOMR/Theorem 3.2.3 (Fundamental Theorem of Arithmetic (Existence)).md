---
title: "Theorem 3.2.3 (Fundamental Theorem of Arithmetic (Existence))"
date: "2023-08-15"
tags:
---

[[notes/Mathematics/TTOMR/Theorem 2.3.3 (Fundamental Theorem of Arithmetic)|Theorem 2.3.3 (Fundamental Theorem of Arithmetic)]]
*Every positive integer $n>1$ can be written as a product of primes; i.e., for every positive integer $n>1$, there exists $s\in\mathbb{Z}^{+}$ and primes $p_{1},p_{2},\dots,p_{s}$ such that $n=p_{1}p_{2}\dots p_{s}$.*

**Proof.** We prove the result by strong induction on $n$, where $n\geq 2$
**Base Case:** Note that $2$ is prime, and hence $2=p_{1}$, where $p_{1}$ is prime.
**Inductive Step:** Let $m\in\mathbb{Z}$ with $m\geq 2$ and assume that for all integers $k$ with $2\leq k\leq m$, $k$ is a product of primes. We must prove that $m+1$ is a product of primes.

**Case I:** $m+1$ is prime.
- Then, $m+1$ is a product of primes, as in the Base Case
**Case II:** $m+1$ is not prime
- Then, by [[notes/Mathematics/TTOMR/Definition 2.1.7.|Definition 2.1.7.]], we may fix $a,b\in\mathbb{Z}^{+}$ such that
$$
m+1=ab \text{, where neither } a \text{ nor } b \text{ is 1}
$$
- Note that $1<a<m+1$, so $2\leq a\leq m$, and also $2\leq b\leq m$. Thus, by the Inductive Hypothesis applied to each of $a$ and $b$, $a$ is a product of primes
$$
a=p_{1}p_{2}\dots p_{i},
$$
- and b is a product of primes
$$
b=q_{1}q_{2}\dots q_{j},
$$
- where $i,j>1$ and $p_{1},\dots,p_{i},q_{1},\dots,q_{j}$ are all primes. Hence
$$
ab=p_{1}p_{2}\dots p_{i}q_{1}q_{2}\dots q_{j},
$$
- and so $ab$ is a product of primes

Hence by PSMI, every positive integer $n>1$ is a product of primes