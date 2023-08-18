---
title: "sin(x) + cos(2ax) + tan(ax)"
date: "2023-08-17"
tags:
---

Playing with trig

<div>
<iframe src="https://www.desmos.com/calculator/5af01bs3vh?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</div>

$a=0$ to $10$
red: $y=\sin\left(x\right)+\cos\left(2ax\right)+\tan\left(ax\right)$
green: $y=\sin x+1$
purple: $y = \sin x+1.13488446$\* this is an approximation

Green and purple defines the bounds of the local min/max of red for any nonzero value of a

Appears to have an upper and lower sine wave formed by local maxima and minima

---

# Changing the Sine

<div>
<iframe src="https://www.desmos.com/calculator/ufjimjktil?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</div>

$a=10$
$b=-10$ to $10$
red: $y=\sin\left(bx\right)+\cos\left(2ax\right)+\tan\left(ax\right)$
green: $y=\sin bx+1$

It appears if you have a function of the form $f(x) = sin(bx)$, the shape of the graph can be represented by the local minima of the function $g(x)=f(x)+\cos(2ax)+\tan(ax)-1$ where $a$ can be any integer and increasing $a$ increases the number of local minima.

---

# Sin and Cos Case

<div>
<iframe src="https://www.desmos.com/calculator/hgayc6p0wg?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</div>

$a=5$
$b=-10$ to $10$
red: $y=\sin\left(bx\right)+\cos\left(2ax\right)-1$
green: $y=\sin bx$

The local maxima of the red function appears to always align with the value of green function for any $a$
