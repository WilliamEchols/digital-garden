---
title: "Proposition 2.1.12"
date: "2023-08-15"
tags:
---

*For all real numbers $a, b \in \mathbb{R}$ with $b\geq 0$, $|a|\leq b$ if and only if $-b\leq a\leq b$.*
**Proof.** Let $a,b \in \mathbb{R}$ be arbitrary with $b\geq 0$. We prove that $|a| \leq b$ iff $-b\leq a\leq b$.
- ($\implies$) Assume that $|a| \leq b$. We show that $-b\leq a\leq b$. We consider two cases.
	- **Case I:** $a\geq 0$
		- Then $|a|=a$ by Definition 2.1.11, and so $a\leq b$ by our assumption that $|a|\leq b$. Also, since $b\geq 0$, we have $-b\leq 0\leq a$; i.e., $-b\leq a$ by the transitive property. Since $-b\leq a$ and $a\leq b$, we have $-b\leq a\leq b$, as desired
	- **Case II:** $\neg(a \geq 0)$
		- Then $a\leq 0$ and hence $|a|=-a$, by Definition 2.1.11. So $-a\leq b$ by our assumption that $|a|\leq b$. But then $a\geq-b$ by an order property and so $-b\leq a<0\leq b;$
		- i.e., $-b\leq a\leq b$, as desired
- ($\impliedby$) Assume that $-b\leq a\leq b$. We show that $|a|\leq b$ by again considering two cases.
	- **Case I:** $a\geq 0$
		- Then $|a|=a$ by Definition 2.1.11, and hence $|a|\leq b$ by our assumption that $a\leq b$.
	- **Case II:** $a\leq 0$
		- Then $|a|=-a$ by Definition 2.1.11. Since $-b\leq a$ by our assumption, we have $b\geq-a$ by an order property. Thus $|a|<-b$, as desired.
