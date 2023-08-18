---
title: "Definition 2.4.2."
date: "2023-08-15"
tags:
---

Let $f$ be a function of a single variable defined for all real numbers in an open interval containing the real number $a$, except possibly at $a$ itself, and let $L$ be a real number. Then the $limit \ of \ f \ at \ a \ is \ L$, in notation, $\lim_{ n \to a }f(x)=L$ if
$$
(\forall \epsilon > 0)(\exists \delta > 0)(\forall x)[0<|x-a|<\delta\implies|f(x)-L|<\epsilon]
$$
(Here, all quantifiers range over the real numbers.)

To make sense of this definition, recall that the inequality $|x-a|<\delta$ says that the distance between the numbers $x$ and $a$ is less than $\delta$, i.e., that $x$ is within a distance of $\delta$ from $a$. Peeling off the quantifiers one at a time, [[notes/Mathematics/TTOMR/Definition 2.4.2.|Definition 2.4.2.]] says that for any (think: tiny) distance $\epsilon>0$, we can find a (think: small enough) distance $\delta>0$ such that if $x\ne a$ is any real number within a distance of $\delta$ from $a$, then the value of the function $f(x)$ is within a distance of $\epsilon$ of $L$.

$$
\text{Figure 2.1.} \lim_{ x \to a }f(x)=L
$$
```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\begin{document}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle,
  xmin=-2.5,xmax=8.5,
  ymin=-1.5,ymax=10,
  xtick=\empty,ytick=\empty,
  declare function={f(\x)= (\x<=3)*(-1/3)*pow(\x-3,2)+2 + (\x>3)*(1/3)*pow(\x-3,2)+2;},
]

\addplot[black,thick,domain=-2:8,samples=100] {f(x)} node[pos=1,above right] {$y=f(x)$};

\pgfmathsetmacro{\a}{3}
\pgfmathsetmacro{\L}{f(\a)}
\pgfmathsetmacro{\e}{2}
\pgfmathsetmacro{\d}{1}

\draw[dashed] ({\a-\d},\L-\e) -- ({\a+\d},\L-\e) node[pos=0.5,left=20mm] {$L-\epsilon$};
\draw[dashed] ({\a-\d},\L+\e) -- ({\a+\d},\L+\e) node[pos=0.5,left=20mm] {$L+\epsilon$};

\draw[dashed] ({\a-\d},0) -- ({\a-\d},10) node[pos=0.1,below=5mm] {$a-\delta$};
\draw[dashed] ({\a+\d},0) -- ({\a+\d},10) node[pos=0.1,below=5mm] {$a+\delta$};

\draw[black,thick] (axis cs:\a,0) -- (axis cs:\a,\L) node[pos=0.5,below=10.8mm] {$a$};
\draw[black,thick] (axis cs:0,\L) -- (axis cs:\a,\L) node[pos=0.5,left=10mm] {$L$};

\draw[dotted] ({\a-\d/2},0) -- ({\a-\d/2},\L);

\end{axis}
\end{tikzpicture}
\end{document}
```