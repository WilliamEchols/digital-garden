---
title: "Theorem 3.2.1 (Principle of Strong Mathematical Induction (PSMI)"
date: "2023-08-15"
tags:
---

*Let $P(n)$ be a statement about the positive integer $n$*

**Suppose the following:**
(PSMI 1) *The statement $P(1)$ is true*
(PSMI 2) *For all positive integers $m$*
$$
\tag{3.5}
\text{if for all integers } k \text{ with } 1\leq k\leq m, P(k) \text{ is true, then } P(m+1) \text{ is true}
$$
**Then**, *for all positive integers $n, P(n)$ is true*

Statement (3.5) is complicated, so let's see what it says for various values of $m$. When $m=1$, the statement (3.5) says that
$$
\text{if for all integers } k \text{ with } 1\leq k\leq 1, P(k) \text{ is true, then } P(2) \text{ is true}
$$
Given the base case, it follows that
$$
\tag{3.6}
P(2) \text{ is true}
$$
When $m=2$, statement (3.5) says that
$$
\text{if for all integers } k \text{ with } 1\leq k\leq 2, P(k) \text{ is true, then } P(3) \text{ is true}
$$
i.e.,
$$
\text{if } P(1) \text{ and } P(2) \text{ are true, then } P(3) \text{ is true}
$$
Given the base case and statement (3.6), it follows that
$$
\tag{3.7}
P(3) \text{ is true}
$$
When $m=3$, statement (3.5) says that
$$
\text{if for all integers } k \text{ with } 1\leq k\leq 3, P(k) \text{ is true, then } P(4) \text{ is true}
$$
i.e.,
$$
\text{if } P(1),P(2), \text{ and } P(3) \text{ are true, then } P(4) \text{ is true}
$$
Given the base case and statements (3.6) and (3.7), it follows that
$$
P(4) \text{ is true}
$$
We can see from these examples that is is reasonable to accept PSMI as an axiom. If we can prove statements (PSMI 1) and (PSMI 2), then it is reasonable to conclude that for all positive integers $n,P(n)$ is true. Furthermore, just as with PMI, the "starting integer" can be any integer $n_{0}$ rather than 1.