---
title: "Theorem 2.3.1."
date: "2023-08-15"
tags:
---

*$\sqrt{ 2 }$ is irrational*
**Proof.** Assume for the sake of a contradiction that $\sqrt{ 2 }$ is rational. By definition, we may fix $p,q\in\mathbb{Z}^{+}$ such that $\frac{p}{q}=\sqrt{ 2 }$, and by removing common factors if necessary, we may also assume that $p$ and $q$ do not have any common positive integer factors other than 1. (Hence we are assuming that every fraction can be put in "least terms".) Then $\frac{p^2}{q^2}=2$, and hence
$$
\tag{2.13}
p^2=2q^2
$$
Hence the integer $p^2$ is even, by [[notes/Mathematics/TTOMR/Definition 1.2.1.|Definition 1.2.1.]] It follows by [[notes/Mathematics/TTOMR/Proposition 2.2.4.|Proposition 2.2.4.]] that $p$ is also even. Thus, again by [[notes/Mathematics/TTOMR/Definition 1.2.1.|Definition 1.2.1.]], we may fix $k\in\mathbb{Z}$ such that $p=2k$. Substituting into (2.13), we have $(2k)^2=2q^2$, or $4k^2=2q^2$. By cancellation in $\mathbb{Z}$ (see [[notes/Mathematics/TTOMR/Basic Properties of Integers 1.2.3|Basic Properties of Integers 1.2.3]]), we have $2k^2=q^2$.

Hence $q^2$ is even, by definition, and again by [[notes/Mathematics/TTOMR/Proposition 2.2.4.|Proposition 2.2.4.]], $q$ is also even. But then $p$ and $q$ are both even, and so $p$ and $q$ have 2 as a common factor. This is a contradiction, since we assumed that $p$ and $q$ had no common positive integer factors other than 1.

Hence $\sqrt{ 2 }$ is irrational.