---
title: "Proof of Proposition 2.2.5."
date: "2023-08-15"
tags:
---

[[notes/Mathematics/TTOMR/Proposition 2.2.5.|Proposition 2.2.5.]]

Let $a,b\in\mathbb{R}$ be arbitrary with $b\geq 0$, and assume that $a^2\geq b$. We prove that $a\geq \sqrt{ b }$ or $a\leq-\sqrt{ b }$ (note that $\sqrt{ b }$ makes sense since $b\geq 0$). If $a\geq \sqrt{ b }$, then we're done, so assume that $a \ngeq \sqrt{ b }$; i.e., $a<\sqrt{ b }$

Since $a^2\geq b$, we know that $a^2-b^2\geq 0$, and hence $(a-\sqrt{ b })(a+\sqrt{ b })\geq 0$. Since $a<\sqrt{ b }$, we know $a-\sqrt{ b }<0$. Since $(a-\sqrt{ b })(a+\sqrt{ b })\geq 0$ and $a-\sqrt{ b }<0$, it follows that $a+\sqrt{ b }\leq 0$. To see this, note that if $a+\sqrt{ b }>0$, then $(a-\sqrt{ b })(a+\sqrt{ b })<0$ by an order property, a contradiction. Hence $a\leq-\sqrt{ b }$ as desired.