---
title: "Example 2.4.1"
date: "2023-08-15"
tags:
---

Prove that
$$
\tag{2.16}
(\forall x\in\mathbb{R})(\exists y\in\mathbb{R})[x+y=0]
$$
is a true statement and that
$$
\tag{2.17}
(\exists y\in\mathbb{R})(\forall x\in\mathbb{R})[x+y=0]
$$
is a false statement.

**Proof.** First note that statement (2.16) is one of our [[notes/Mathematics/TTOMR/Basic Properties of Real Numbers 2.1.4|Basic Properties of Real Numbers 2.1.4]] and hence a true statement. More formally, when $x\in\mathbb{R}$ is arbitrary, $y=-x=(-1)x$ satisfies $x+y=x+(-x)=0$. Hence $(\forall x\in\mathbb{R})(\exists y\in\mathbb{R})[x+y=0]$ is a true statement.

Next, we prove (2.17) is false; i.e., we prove $(\forall y \in\mathbb{R})(\exists x\in\mathbb{R})[x+y\ne 0]$ is true. Let $y\in\mathbb{R}$ be arbitrary. We must prove that $(\exists x\in\mathbb{R})[x+y\ne 0]$. Note that if we let $x=-y+1$, which is a real number, then
$$
x+y=(-y+1)+y=1\ne 0
$$
as desired. Hence $(\exists y\in\mathbb{R})(\forall x\in\mathbb{R})[x+y=0]$ is false.

Given a formula $(Q_{1}x_{1})(Q_{2}x_{2})\dots(Q_{k}x_{k})P(x_{1},x_{2},\dots,x_{k})$, where the predicate $P(x_{1},x_{2},\dots,x_{k})$ is quantifier-free, an *alternation* of quantifiers means a change from $\forall$ to $\exists$ or vice versa within $(Q_{1}x_{1})(Q_{2}x_{2})\dots(Q_{k}x_{k})$. In a way that can be made mathematically precise (see \[16]), the more alternations of quantifiers such a statement has, the more complicated the statement is. Mathematical concepts whose definitions involve mixed quantifiers are very common in calculus and real analysis. For example, the statement that there is a rational number between any two distinct real numbers is expressed as follows:
$$
(\forall x,y\in\mathbb{R})(\exists z\in\mathbb{Q})[x<y\implies x<z<y]
$$
An important concept involving mixed quantifiers that is studied in calculus is the notion of *limit*. Working informally for the moment, beginning students in calculus often think of the statement $\lim_{ n \to a }f(x)=L$ as meaning that the values of the function $f$ get "closer and closer" to the number $L$ when the value $x$ gets "closer and closer" to the number $a$. Unfortunately, this way of thinking about a limit is not only imprecise, it is incorrect. The precise definition of a limit, which has a daunting two alternations of quantifiers, is given below.

[[notes/Mathematics/TTOMR/Definition 2.4.2.|Definition 2.4.2.]]