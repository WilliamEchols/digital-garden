---
title: "Integer by Whole Number Percentages"
date: "2023-08-17"
tags:
---

If you want to represent age by percentage of current age, under what conditions can current age be found?

Inspiration: [https://twitter.com/derlukasg/status/1687828346187460608?s=46](https://twitter.com/derlukasg/status/1687828346187460608?s=46)

I.e. 12, 23, 43, 75, 100% are all percentages of an age, what is the value (age) for 100%?



## Representation

For
$$A = \{12, 23, 43, 75, 100\},$$
$$(\exists a \in \mathbb{Z})(\forall n \in A)(an \mid 100)$$

## Simplest Case

$a$ for $A = \{12\}$

$12n \mid 100 => n \mid 100/12 =>$
$n = k(100/12)$ for some $k \in \mathbb{Z} \mid [k(100/12) \mid 1]$