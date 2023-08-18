---
title: "Proposition 2.1.3"
date: "2023-08-15"
tags:
---

*For all integers, a, b, c if a | b and b | c, then a | c*

**Proof.** Let $a, b, c \in \mathbb{Z}$ be arbitrary and assume that $a | b$ and $b | c$. We must show that $a | c$; i.e, we must find an integer $k$ such that $c=ak$

Since $a | b$, by Definition 2.1.1 we may fix $n \in \mathbb{Z}$ such that $b=an$. Similarly, since $b | c$, we may fix $m \in \mathbb{Z}$ such that $c=bm$, again by Definition 2.1.1. Then
$$
c = bm
$$
$$
\ \ \ \ \ \ \ = (an)m
$$
$$
\ \ \ \ \ \ \ = a(nm)
$$
since multiplication of integers is associative ([[notes/Mathematics/TTOMR/Basic Properties of Integers 1.2.3|Basic Properties of Integers 1.2.3]]). Since $nm \in \mathbb{Z}$, we have proved that $a | c$, by Definition 2.1.1, as desired.