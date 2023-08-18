---
title: "Example 2.1.8"
date: "2023-08-15"
tags:
---

Is the following statement true or false? If it is true, then prove it. If it is false, then disprove it.
$$
\text{For all integers } n, n^{2} + n + 41 \text{ is prime}
$$
We begin by computing $n^{2} + n + 41$ for several values of $n$:
$$
1^{2} + 1 + 41 = 43 \text{ is prime}
$$
$$
2^{2} + 2 + 41 = 47 \text{ is prime}
$$
$$
3^{2} + 3 + 41 = 53 \text{ is prime}
$$
$$
4^{2} + 4 + 41 = 61 \text{ is prime}
$$
Having many examples does not constitute a proof. 

The negation of
$$
(\forall n \in \mathbb{Z}^{+})(n^2 + n + 41 \text{ is prime})
$$
is
$$
(\exists n \in  \mathbb{Z})(n^2 + n + 41 \text{ is not prime})
$$
and this what we wish to prove. The second statement is an existential statement, so we know that we must find an example of a *particular* positive integer $n$ such that $n^2 + n + 41$ is not prime. 

**Proof.** We should that the statement
$$
\text{for all positive integers } n, n^2 + n + 41 \text{ is prime}
$$
is false by providing a counterexample. Note that when $n = 41$,
$$
n^2+n+41=(41)^2+41+41=41(41+1+1)=(41)(43)
$$
Hence $(42)^2 + 41 + 41$ is not prime, by [[notes/Mathematics/TTOMR/Definition 2.1.7.|Definition 2.1.7.]]