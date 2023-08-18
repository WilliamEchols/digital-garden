---
title: "Definition 4.1.4."
date: "2023-08-15"
tags:
---

Let $A$ and $B$ be sets. Then $A$ is a *subset* of $B$ (in notation, $A \subseteq$ B) if every element of $A$ is also an element of $B$. Symbolically, $A \subseteq B$ if
$$
\tag{4.4}
(\forall x)[x\in A\implies x\in B]
$$
We'll write $A \nsubseteq B$ if $A$ is not a subset of $B$.

We can denote an arbitrary set as the interior of a circle, so that the following diagram illustrates that $A \subseteq B$.

```tikz
\begin{document}
\begin{tikzpicture}
  % Circle B
  \begin{scope}[shift={(0,0)}]
    \draw (0,0) circle (3cm) node[midway] {};
    \node at (1,1) {B};
  \end{scope}

  % Circle A
  \begin{scope}[shift={(-0.8,-0.8)}]
    \draw (0,0) circle (1.5cm) node[midway] {};
    \node at (0,0) {A};
  \end{scope}
\end{tikzpicture}
\end{document}
```
