---
title: "Proposition 3.1.3"
date: "2023-08-15"
tags:
---

*For all $n\in\mathbb{Z}^{+}$,*
$$
\sum_{k=1}^{n}k=\frac{n(n+1)}{2}
$$
**Proof.** Given $n\in\mathbb{Z}^{+}$, let $P(n)$ denote the statement
$$
\sum_{k=1}^{n}k=\frac{n(n+1)}{2}
$$
We prove $(\forall n\in\mathbb{Z}^{+})P(n)$ by induction on $n$

**Base Case:** We must show that $P(1)$ is true

Note that $P(1)$ is the statement
$$
\sum_{k=1}^{1}k=\frac{1(1+1)}{2}
$$
Since $\sum_{k=1}^{1}k=1$ by definition and since $\frac{1(1+1)}{2}=\frac{2}{2}=1$, we see that $\sum_{k=1}^{1}k=\frac{1(1+1)}{2}$. Hence $P(1)$ is true

**Inductive Step:** Let $m\in\mathbb{Z}^{+}$ and assume that $P(m)$ is true; i.e., assume the Inductive Hypothesis
$$
\sum_{k=1}^{m}k=\frac{m(m+1)}{2}
$$
We must show that $P(m+1)$ is true; i.e., we must show that
$$
\sum_{k=1}^{m+1}k=\frac{(m+1)((m+1)+1)}{2}=\frac{(m+1)(m+2)}{2}
$$
Note that
$$
\sum_{k=1}^{m+1}k=(1+2+\dots+m)+(m+1)
$$
$$
=(\sum_{k=1}^{m}k)+(m+1)
$$
$$
=\frac{m(m+1)}{2}+(m+1) \text{ by the Inductive Hypothesis}
$$
Thus, by adding fractions,
$$
\sum_{k=1}^{m+1}k=\frac{m(m+1)+2(m+1)}{2}
$$
$$
=\frac{(m+1)(m+2)}{2} \text{ (factoring $(m+1)$ in the numerator)}
$$
as desired. Hence $P(m+1)$ is true

Thus, by the Principle of Mathematical Induction, we have proved that for all $n\in\mathbb{Z}^{+}$,
$$
\sum_{k=1}^{n}k=\frac{n(n+1)}{2}
$$