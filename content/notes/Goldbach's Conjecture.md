---
title: "Goldbach's Conjecture"
date: "2023-08-14"
tags:
---

Can every even integer greater than 2 be written as the sum of two primes?

$n=2i=p_{1}+p_{2}$ where $i>1,\in\mathbb{Z^{+}}$ and $p_{1},p_{2}$ prime

## Heuristic 

Attempting to find $p_{1}$ and $p_{2}$ closest to $i= \frac{n}{2}$

| $n$ | $i$ |  $p_{1}$ | $p_{2}$ | $\mid p_{\dots}-i \mid$ |
| --- | --- | --- | --- | --- |
| 4 | 2 | 2 | 2 | (0, 0) |
| 6 | 3 | 3 | 3 | (0, 0) |
| 8 | 4 | 3 | 5 | (1, 1) |
| 10 | 5 | 5 | 5 | (0, 0) |
| 12 | 6 | 5 | 7 | (1, 1) |
| 14 | 7 | 7 | 7 | (0, 0) |
| 16 | 8 | 5 | 11 | (3, 3) |
| 18 | 9 | 7 | 11 | (2, 2) |
| 20 | 10 | 7 | 13 | (3, 3) |
| 22 | 11 | 11 | 11 | (0, 0) |
| 24 | 12 | 11 | 13 | (1, 1) |
| 26 | 13 | 13 | 13 | (0, 0) |
| 28 | 14 | 11 | 17 | (3, 3) |
| 30 | 15 | 13 | 17 | (2, 2) |
| 32 | 16 | 13 | 19 | (3, 3) |
| 34 | 17 | 17 | 17 | (0, 0) |
| 36 | 18 | 17 | 19 | (1, 1) |
| 38 | 19 | 19 | 19 | (0, 0) |
| 40 | 20 | 17 | 23 | (3, 3) |
| 42 | 21 | 19 | 23 | (2, 2) |
| 44 | 22 | 13 | 31 | (9, 9) |
| 46 | 23 | 23 | 23 | (0, 0) |
| 48 | 24 | 19 | 29 | (5, 5) |
| 50 | 25 | 19 | 31 | (6, 6) |
| 52 | 26 | 23 | 29 | (3, 3) |
| 54 | 27 | 23 | 31 | (4, 4) |
| 56 | 28 | 19 | 37 | (9, 9) |
| 58 | 29 | 29 | 29 | (0, 0) |
| 60 | 30 | 29 | 31 | (1, 1) |
| 62 | 31 | 31 | 31 | (0, 0) |
| 64 | 32 | 23 | 41 | (9, 9) |
| 66 | 33 | 29 | 37 | (4, 4) |
| 68 | 34 | 31 | 37 | (3, 3) |
| 70 | 35 | 29 | 41 | (6, 6) |
| 72 | 36 | 31 | 41 | (5, 5) |
| 74 | 37 | 37 | 37 | (0, 0) |
| 76 | 38 | 29 | 47 | (9, 9) |
| 78 | 39 | 37 | 41 | (2, 2) |
| 80 | 40 | 37 | 43 | (3, 3) |
| 82 | 41 | 41 | 41 | (0, 0) |
| 84 | 42 | 41 | 43 | (1, 1) |
| 86 | 43 | 43 | 43 | (0, 0) |
| 88 | 44 | 41 | 47 | (3, 3) |
| 90 | 45 | 43 | 47 | (2, 2) |
| 92 | 46 | 31 | 61 | (15, 15) |
| 94 | 47 | 47 | 47 | (0, 0) |
| 96 | 48 | 43 | 53 | (5, 5) |
| 98 | 49 | 37 | 61 | (12, 12) |
| 100 | 50 | 47 | 53 | (3, 3) |

Observations: $p_{1} \leq \frac{n}{2} \leq p_{2}$
$n=p_{1}+p_{2}$ by definition
$\frac{n}{2}=\frac{p_{1}+p_{2}}{2} \implies i=\frac{p_{1}+p_{2}}{2}$

Also, $\mid p_{2}-i\mid=\mid p_{1}-i\mid$, additionally appears to follow a wavelike pattern
\# separated by 0 which may itself be a wave-like pattern of prime numbers?

![[notes/images/Pasted image 20230815035041.png]]

It also appears that there are pair groups of shapes that are mirrored, such as ~20 and ~30, as well as ~50 and ~70

Increasing the even number axis makes the pattern appear more complex
![[notes/images/Pasted image 20230815035453.png]]