---
title: "Theorem 3.1.4. (Principle of Mathematical Induction (modified))"
date: "2023-08-15"
tags:
---

*Let $P(n)$ be a statement about the integer $n$, where $n$ is free in $P(n)$*

**Suppose that there is an integer $n_{0}$ such that:**
(PMI 1) *The statement $P(n_{0})$ is true*
(PMI 2) *For all integers $m\geq n_{0}$*
$$
\text{if } P(m) \text{ is true, then } P(m+1) \text{ is true}
$$
**Then**, *for all integers $n\geq n_{0}, P(n)$ is true*

For our next example, we will prove that
$$
\boxed{\text{for all integers } n\geq 10,n^3\leq 2^n}
$$
The fact that $2^n,n\geq 0,$ is defined by recursion on $n$ tells us that it is reasonable to try induction on $n\geq 10$. We do the scratch work for the inductive step; you should verify for yourself why we chose $n=10$ as the base case.

*Scratch work:* The Given-Goal diagram for the Inductive Step is below; we have identified the Inductive Hypothesis by (IH)

| Given | Goal |
| --- | --- |
| $m\in\mathbb{Z}^{+}$ | |
| $m\geq 10$ | |
| $m^3\leq 2^m$ (IH) | $(m+1)^3\leq 2^{m+1}$ |

We begin by examining $(m+1)^3$ and $2^{m+1}$
$$
2^{m+1}=2 \cdot 2^m \geq 2m^3 \quad \text{ by the Inductive Hypothesis, and}
$$
$$
(m+1)^{3}=m^3+3m^2+3m+1
$$
Working backwards, we want to argue that
$$
\tag{3.3}
2m^3\geq m^3+3m^2+3m+1,
$$
so it will suffice to argue that
$$
\tag{3.4}
m^3\geq 3m^2+3m+1
$$
Throughout we'll make use of the order properties in [[notes/Mathematics/TTOMR/Basic Properties of Integers 1.2.3|Basic Properties of Integers 1.2.3]]. Note that since $1\leq m$, we have $1\leq m\leq m^2$, and hence
$$
3m^2+3m+1\leq 3m^2+3m^2+m^2=7m^2
$$
Also, $7\leq m$ and $m^2\geq 0$, so $7m^2\leq m^3$. Thus we have
$$
3m^2+3m+1\leq 3m^2+3m^2+m^2=7m^2\leq m^3
$$
establishing (3.4).

We are ready to write down the formal proof.

![[notes/Mathematics/TTOMR/Proposition 3.1.5.|Proposition 3.1.5.]]