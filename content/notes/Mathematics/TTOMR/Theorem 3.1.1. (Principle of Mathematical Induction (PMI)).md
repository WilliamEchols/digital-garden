---
title: "Theorem 3.1.1. (Principle of Mathematical Induction (PMI))"
date: "2023-08-15"
tags:
---

# Updated Definition in [[notes/Mathematics/TTOMR/Theorem 3.1.4. (Principle of Mathematical Induction (modified))|Theorem 3.1.4. (Principle of Mathematical Induction (modified))]]

*Let $P(n)$ be a statement about the positive integer $n$, so that $n$ is a free variable in $P(n)$.*
**Suppose the following:**
(PMI 1) *The statement $P(1)$ is true*
(PMI 2) *For all positive integers $m$,*
$$
\text{if } P(m) \text{ is true, then } P(m+1) \text{ is true}
$$
**Then,** *for all positive integers $n$, $P(n)$ is true.*

Notice that, given the statement $P(n)$, a proof of $(\forall n\in\mathbb{Z}^{+})P(n)$ consists of *first* proving the two statements (PMI 1) and (PMI 2) and then *concluding* (by conduction) the statement $(\forall n\in\mathbb{Z}^{+})P(n)$. Why should this conclusion be logically valid?

Well, (PMI 1) establishes that $P(1)$ is true, and (PMI 2) establishes that
$$
P(1)\implies P(2)
$$
Thus by *modus ponens*, by $P(2)$ is true. But (PMI 2)  also establishes that
$$
P(2)\implies P(3)
$$
Thus, from $P(2)$ and $P(2)\implies P(3)$, we can conclude $P(3)$ os true, etc.

PMI says that the "etc." is valid; i.e., it says that we can reach any positive integer $n$ starting at 1. and successively adding 1. This is quite a reasonable statement about the positive integers. However, one can show that it is impossible to prove PMI from the [[notes/Mathematics/TTOMR/Basic Properties of Real Numbers 2.1.4|Basic Properties of Real Numbers 2.1.4]]. Thus, we will accept PMI as an additional axiom for $\mathbb{Z}^{+}$ (in fact, we are adding infinitely many axioms, one for each statement $P(n)$). It *is* possible to prove PMI from other statements about the positive integers, such as the *Well-Ordering Principle*, which we discuss in Section 6.1, but then we would need to assume *those* statements as axioms.

Several of the mathematical statements we will prove by induction are familiar summation formulas, which we will want to express using "sigma notation".