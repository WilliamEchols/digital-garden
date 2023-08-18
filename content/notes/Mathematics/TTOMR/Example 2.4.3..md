---
title: "Example 2.4.3"
date: "2023-08-15"
tags:
---

Let
$$
f(x)=
\begin{cases}
\ 4x-3 & \text{if } x \ne 2,\\
\ 1 & \text{if } x =2 \\
\end{cases}
$$
Prove that $\lim_{ x \to 2 }f(x)=5$.

[[notes/Mathematics/TTOMR/Definition 2.4.2.|Definition 2.4.2.]] tells us what the Given-Goal diagram should look like

| Given | Goal |
| --- | --- |
| $\epsilon>0$ arbitrary | $(\exists \delta > 0)(\forall x)[0<\|x-a\|<\delta\implies\|f(x)-L\|<\epsilon]$

So, given $\epsilon>0$, we must find a real number $\delta>0$ such that
$$
(\forall x)[0<|x-2|<\delta\implies|f(x)-5|<\epsilon]
$$
We'll work backwards. Suppose $x\in\mathbb{R}$ is arbitrary. We want $|f(x)-5|<\epsilon$. We may assume that $x\ne2$, since we will ultimately be assuming that $0<|x-2|$. Hence, we may assume that $f(x)=4x-3$. This means that we want
$$
|(4x-3)-5|<\epsilon; \quad \text{i.e.,}
$$
$$
\tag{2.18}
|4x-8|<\epsilon
$$
We want the $\delta$ we are looking for to satisfy $|x-2|<\delta\implies|f(x)-5|<\epsilon$. This tells us to look for an express involving $|x-2|$. Equation (2.18) is equivalent to $|4(x-2)|<\epsilon$, or $4|x-2|<\epsilon$, by [[notes/Mathematics/TTOMR/Exercises 2.1|Exercises 2.1]] \#13b. Thus, we need $|x-2|< \frac{\epsilon}{4}$, and we should try $\delta = \frac{\epsilon}{4}$.
**Proof.** We prove that $\lim_{ x \to 2 }f(x)=5$. Let $\epsilon > 0$ be arbitrary. We show
$$
(\exists \delta>0)(\forall x)[0<|x-2|<\delta\implies|f(x)-5|<\epsilon]
$$
Consider $\delta = \frac{\epsilon}{4}$, which is positive, since $\epsilon$ is. We must show
$$
(\forall x)[0<|x-2|<\delta\implies|f(x)-5|<\epsilon]
$$
Let $x\in\mathbb{R}$ be arbitrary, and assume that $0<|x-2|<\delta$; i.e., $0>|x-2|< \frac{\epsilon}{4}$. We must show $|f(x)-5|<\epsilon$. To see this, note that since $x\ne 2$.
$$
|f(x)-5|=|(4x-3)-5|
$$
$$
\quad \quad =|4x-8|
$$
$$
\quad \quad =|4(x-2)|
$$
$$
\quad \quad =4|x-2|
$$
by properties of absolute value. Thus, since $|x-2|< \frac{\epsilon}{4}$
$$
|f(x)-5|=4|x-2|
$$
$$
\quad \quad \quad \quad <4( \frac{\epsilon}{4})
$$
by an order property. Hence $|f(x)-5|<\epsilon$, as desired. It follows that $\lim_{ x \to 2 }f(x)=5$, by [[notes/Mathematics/TTOMR/Definition 2.4.2.|Definition 2.4.2.]]

The formal study of limits is part of a course in real analysis. 