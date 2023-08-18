---
title: "TikZ Jax (plugin)"
date: "2023-08-17"
tags:
- plugin
---

Rendering of TikZ diagrams within notes

Formal definition of a limit
````
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
````