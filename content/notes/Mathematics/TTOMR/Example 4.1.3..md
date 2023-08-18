---
title: "Example 4.1.3"
date: "2023-08-15"
tags:
---

1) A conditional definition of the set $A=\{1,2,3,\dots,10\}$ above is
$$
A=\{n\in\mathbb{Z}^{+} \mid 1\leq n\leq 10 \}
$$
Note here that we have made the underlying set explicit

2) As with our discussion of quantifiers, the underlying universal set matters,
The set
$$
D=\{x\in\mathbb{R} \mid 1\leq x\leq 10\}
$$
is certainly different from the set $A$ above, because $\pi\in D$, while $\pi\notin A$.

Recall that set $D$ is also denoted in interval notation by $[1,10]$. (With interval notation, the underlying universal set is always assumed to be $\mathbb{R}$, unless explicitly indicated otherwise. See [[notes/Mathematics/TTOMR/Notation 4.1.10|Notation 4.1.10]])

3) The set $C=\{2,4,6,\dots\}$ of even positive integers can be defined conditionally by
$$
\tag{4.1}
\{n\in\mathbb{Z}^{+}\mid n \text{ is even}\}
$$
or, making the quantifier complexity explicit
$$
\tag{4.2}
\{n\in\mathbb{Z}^{+} \mid (\exists k\in\mathbb{Z}^{+})[n=2k]\}
$$
We can also denote this set using what is sometimes called a *constructive definition*
$$
\tag{4.3}
\{2k \mid k\in\mathbb{Z}^{+}\}
$$
Hence, the notation indicates that the elements of the set are all integers of the form $2k$, where $k$ ranges through the set of positive integers. It is important to remember that
$$
\boxed{\text{the notation in (4.3) is an abbreviation for the set given in (4.2)}}
$$
While the notation in (4.3) is more concise, it is dangerous in the case that it hides the existential quantifier explicitly given in (4.2). Since we have already seen that knowing the logical form of a statement is essential when writing proofs, we must be sure to be aware of such hidden quantifiers. *Students who are learning about sets for the first time may wish, if given aconstructive definition of a set, to convert the definition into a conditional definition of that set*