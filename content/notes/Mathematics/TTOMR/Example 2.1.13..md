---
title: "Example 2.1.13"
date: "2023-08-15"
tags:
---

In [[notes/Mathematics/TTOMR/Basic Properties of Real Numbers 2.1.4|Basic Properties of Real Numbers 2.1.4]] and [[notes/Mathematics/TTOMR/Basic Properties of Integers 1.2.3|Basic Properties of Integers 1.2.3]], we have assumed (both implicitly and explicitly) a bit more than we needed in order to not belabor these assumptions too much. For example, Basic Properties of Real Numbers 2.1.4 statements that for all $a \in \mathbb{R}$, $a + 0 = a = 0 + a$ and, implicitly, that 0 is the only element of $\mathbb{R}$ with this property. Let's keep this assumption and the assumption that addition of real numbers is commutative.

[[notes/Mathematics/TTOMR/Basic Properties of Real Numbers 2.1.4|Basic Properties of Real Numbers 2.1.4]] also states that for all $a \in \mathbb{R}$, there exists a unique real number $-a$ such that $a + (-a) = 0 = (-a) + a$.

It's possible to replace this axiom by the weaker assumption
$$
\tag{2.8}
(\forall a\in\mathbb{R})(\exists b \in \mathbb{R})[a+b=0=b+a]
$$
and then *prove*
$$
\tag{2.9}
(\forall a\in\mathbb{R})(\exists!b \in \mathbb{R})[a+b=0=b+a]
$$
Then, given $a \in \mathbb{R}$, we can *define* $-a$ to be the unique $b \in \mathbb{R}$ with $a+b=0$.
*Scratch work:* Let $a \in \mathbb{R}$. By statement (2.7), a Given-Goal diagram for the uniqueness part of statement (2.9) is

| Given | Goal |
| --- | --- |
| all axioms in [[notes/Publish/Mathematics/TTOMR/Basic Properties of Real Numbers 2.1.4|Basic Properties of Real Numbers 2.1.4]], with (Additive inverses) replaced by statement (2.8) | |
| $a \in \mathbb{R}$ arbitrary | |
| $b_{1}, b_{2} \in \mathbb{R}$ arbitrary | |
| $a + b_{1} = 0 = b_{1} + a$ | |
| $a + b_{2} = 0 = b_{2} + a$ | $b_{1} = b_{2}$ |

**Proof of statement (2.9).** Let $a \in \mathbb{R}$
(Existence): Assumption (2.8) establishes the fact that there exists $b \in \mathbb{R}$ such that $a+b=0$
(Uniqueness): Let $b_{1}, b_{2} \in \mathbb{R}$ and assume that $a+b_{1}=0=b_{1}+a$ and $a+b_{2}=0=b_{2}+a$. We prove that $b_{1}=b_{2}$. We have
$$
a+b_{1}=0
$$
so
$$
b_{2} + (a+b_{1})=b_{2}+0
$$
By associativity of addition and the fact that 0 is the additive identity, we have
$$
(b_{2} + a) + b_{1} = b_{2}
$$
Since $b_{2}+a=0$, this gives
$$
0+b_{1}=b_{2},
$$
or
$$
b_{1}=b_{2}
$$
as desired.
Hence, there is a unique $b \in \mathbb{R}$ such that $a+b=0$
