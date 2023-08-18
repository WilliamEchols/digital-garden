---
title: "Proposition 2.1.10"
date: "2023-08-15"
tags:
---

*For all positive real numbers $x, \frac{x}{x+1} < \frac{x+1}{x+2}$.*
**Proof.** Let $x \in \mathbb{R}$ be arbitrary with $x > 0$. We must show that
$$
\frac{x}{x+1} < \frac{x+1}{x+2}
$$
First note that by an order property,
$$
x^2+2x <(x^2+2x)+1
$$
and hence, by factoring
$$
x(x+2) <(x+1)^2
$$
Since $x>0$, we know that $(x+1)(x+2)>0$, and hence we may divide both sides of the statement by $(x+1)(x+2)$ to obtain
$$
\frac{x(x+2)}{(x+1)(x+2)}<\frac{(x+2)^2}{(x+1)(x+2)}
$$
by another order property. Thus we may remove a factor of 1 on each side of the inequality to obtain
$$
\frac{x}{x+1}<\frac{x+1}{x+2}
$$
as desired.

> *The scratch work is* **not** *the proof*

Second, note that the proof makes no mention of how we got our inspiration to start with $x^2+2x <(x^2+2x)+1$.