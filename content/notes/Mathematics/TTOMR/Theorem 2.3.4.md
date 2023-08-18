---
title: "Theorem 2.3.4"
date: "2023-08-15"
tags:
---

(Euclid). *There are infinitely many prime numbers.*
**Proof.** Suppose for the sake of contradiction that there do not exist infinitely many prime numbers, i.e., that there exist finitely many prime numbers. This means that we can form a complete list of the prime numbers:
$$
p_{1},p_{2},\dots,p_{k},
$$
where $k\in\mathbb{Z}^{+}$ is the number of primes and $1<p_{1}<p_{2}<\dots<p_{k}$. (Note that, for example, $p_{1}=2,p_{2}=3,p_{3}=5,\text{etc.}$)

Consider the positive integer
$$
n=p_{1}\cdot p_{2} \cdot ... \cdot p_{k}+1
$$
Note that $n>p_{k}>1$ by the order axioms. Thus $n$ is not prime, by our assumption that $p_{1}<p_{2}<\dots<p_{k}$ yields a complete list of all prime numbers. By the Fundamental Theorem of Arithmetic ([[notes/Mathematics/TTOMR/Theorem 2.3.3 (Fundamental Theorem of Arithmetic)|Theorem 2.3.3 (Fundamental Theorem of Arithmetic)]]), some prime must divide $n$, since $n$ is a product of primes. Hence we can fix an integer $j,1\leq j\leq k$, such that $p_{j}$ divides $n$, and it then follows by definition that we may fix $m\in\mathbb{N}$ such that $n=p_{j}m$.

Thus we have $p_{j}m=p_{1} \cdot p_{2} \cdot ... \cdot p_{k}+1$. Rewriting this gives
$$
p_{j}m=p_{1} \cdot p_{2} \cdot ... \cdot p_{k} =1, \quad \text{or}
$$

$$
p_{j}m-p_{j}l=1,
$$
where $l$ is the product of all the primes in the list $p_{1},p_{2},\dots,p_{k}$ except for $p_{j}$ (note that if $k=1$, then $l=1$). Thus
$$
p_{j}(m-l)=1,
$$
and hence $p_{j} \mid 1$, which is a contradiction, since $p_{j}>1$.

Hence there must exist infinitely many prime numbers.