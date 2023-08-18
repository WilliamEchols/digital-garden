---
title: "Proposition 2.1.9"
date: "2023-08-15"
tags:
---

*For all integers $a, a(a+1)$ is even*
**Proof.** Let $a \in \mathbb{Z}$. We show that $a(a+1)$ is even by considering two cases.
- **Case I:** $a$ is even
	- Then $2 |a$, by Definition 1.2.1. Since $a | a(a+1)$ by Definition 2.1.1, we have that $2 | a(a+1)$ since the divisibility relation is transitive (Proposition 2.1.3). Hence $a(a+1)$ is even
- **Case II:** $a$ is not even
	- Since $a$ is not even, we know that $a$ is odd. Then $a+1$ is even by Exercise 1.2.2.b. Then, using an argument similar to that of Case I, we have that $2 | (a+1)$ and $(a+1)|a(a+1)$, and hence $2 | (a(a+1))$ by Proposition 2.1.3. Thus $a(a+1)$ is even.