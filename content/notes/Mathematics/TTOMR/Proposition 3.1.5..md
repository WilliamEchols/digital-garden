---
title: "Proposition 3.1.5"
date: "2023-08-15"
tags:
---

*For all integers $n\geq 10,n^3\leq 2^n$*
**Proof.** Let $n\in\mathbb{Z}$ with $n\geq 10$, and let $P(n)$ denote the statement
$$
n^3\leq 2^n
$$
We prove by induction on $n$ that for all integers $n\geq 10, P(n)$ is true

**Base Case:** We must show that $10^3\leq 2^10$
Note that $10^3=1000$ and $2^{10}=1024$, so the Base Case holds; i.e., $10^3\leq 2^{10}$

**Inductive Step:** Let $m\in\mathbb{Z}$ with $m\geq 10$ and assume that $m^3\leq 2^m$. We must prove that $(m+1)^3\leq 2^{m+1}$.

To see this, first note that since $1\leq m,1\leq m\leq m^2$. In addition, $7m^2\leq m^3$, since $7\leq m$ and $m^2\geq 0$. Thus,
$$
(m+1)^3=m^3+3m^2+3m+1
$$
$$
\leq m^3+3m^2+3m^2+m^2
$$
$$
=m^3+7m^2
$$
$$
\leq m^3+m^3
$$
$$
=2m^3
$$
$$
\leq 2 \cdot 2^m, \text{ by the Inductive Hypothesis}
$$
Hence, $(m+1)^3\leq 2^{m+1}$, as desired

Thus, by PMI, we have that for all integers $n\geq 10,n^3\leq 2^n$