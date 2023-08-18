---
title: "brainf* Fibonacci Sequence"
date: "2023-08-17"
tags:
---

Works through single digits then unicode nonsense in [[notes/brainf*|brainf*]]

Github: [bf fib](https://github.com/WilliamEchols/Commit-A-Day/blob/main/21Aug22/fib.bf)
## One line
```
+>-[----->+<]>---.<-[----->>+<<]>>--<<<[>>[-<+>>>+<<]>[-<+>]>[-<<+>>]<<>-[----->+<]>---[-<<->>]<<.<[->>+<<]<]
```

## Annotated
```
INIT
endless counter+>
0-[----->+<]>---.
1<-[----->>+<<]>>--<

ADD LOOP
<<[>>
duplicate[-<+>>>+<<]
sum p1 >[-<+>]
sum p2 >[-<<+>>]<<
ASCII48 >-[----->+<]>---delete[-<<->>]<<.
reposition <[->>+<<]>
<<]
```
