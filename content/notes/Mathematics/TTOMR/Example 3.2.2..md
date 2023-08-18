---
title: "Example 3.2.2"
date: "2023-08-15"
tags:
---

Let us now go back to the sequence that motivated our discussion:
$$
a_{1}=1
$$
$$
a_{2}=5
$$
$$
\text{for all } n>-2, a_{n+1}=a_{n}+2a_{n-1_{2}}
$$
We will prove by strong induction on $n$ that for all $n\in\mathbb{Z}^{+},a_{n}=2^n+(-1)^n$. We will not provide any scratch work, since we already know how to set up induction proofs, but rather we'll simply indicate how the framework will change. As before, we will have a base case and an inductive step. However, because this *particular* recursive definition has two base cases, our induction proof will also have two base cases. For the inductive step, (PSMI 2) tells us to begin with an arbitrary integer $m\geq 2$ (2 rather than 1 because of the two base cases), and assume the strong induction hypothesis that is indicatated in statement (3.5).

**Proof.** For $n\in\mathbb{Z}^{+}$, let $P(n)$ denote the statement
$$
a_{n}=2^n+(-1)^n
$$
We prove $(\forall n\in\mathbb{Z}^{+})P(n)$ by strong induction on $n$.

**Base Case:** We show $P(1)$ and $P(2)$

Since $2^1+(-1)^1=2-1=1$ and $a_{1}=1$ by definition of the sequence, $P(1)$ is true.

Since $2^2+(-1)^2=4+1=5$ and $a_{2}=5$ by definition of the sequence, $P(2)$ is true.

**Induction Step:** Let $m\in\mathbb{Z}$ with $m\geq 2$, and assume that for integers $k$ with $1\leq k\leq m, P(k)$ is true; i.e., we assume that for all integers $k$ with $1\leq k\leq m,a_{k}=2^k+(-1)^k$. We must prove that $P(m+1)$ is true, i.e., that $a_{m+1}=2^{m+1}+(-1)^{m+1}$.

Note that $a_{m+1}=a_{m}+2a_{m-1}$ by definition, since $m\geq 2$. Thus
$$
a_{m+1}=a_{m}+2a_{m-1}
$$
$$
= 2^m+(-1)^m+2(2^{m-1}+(-1)^{m-1})
$$
by the inductive hypothesis for $k=m=1,m$. Hence,
$$
a_{m+1}=2^m+(-1)^m+2(2^{m-1}+(-1)^{m-1})
$$
$$
=2^m+(-1)^m+2^m+2(-1)^{m-1})
$$
$$
=2\cdot 2^m+(-1)^{m-1}(-1+2)
$$
$$
=2^{m+1}+(-1)^{m-1}
$$
$$
=2^{m+1}+(-1)^{m-1}(-1)^2
$$
$$
=2^{m+1}+(-1)^{m+1}
$$
as desired.

Hence, by PSMI, we have that for all integers $n\geq 1$,
$$a_{n}=2^n+(-1)^n$$