---
title: "Theorem 2.3.3 (Fundamental Theorem of Arithmetic)"
date: "2023-08-15"
tags:
---

*Every positive integer greater than $1$ can be written as a product of primes. Furthermore, this product of primes is unique, except for the order in which the factors appear.*

Note that we consider a prime number itself to be a "product of primes" with a single factor. As another example, note that the unique prime factorization of 1119250 is
$$
1119250=2\cdot 5\cdot 5\cdot 5\cdot 11 \cdot 11 \cdot 37
$$
The only prime factors of 1119250 are 2, 5, 11, and 37, and the only factorization of 1119250 in terms of these primes, written in nondecreasing order, is the one given above.

Recall from our discussion in [[notes/Mathematics/TTOMR/2.1.5. Uniqueness proofs|2.1.5. Uniqueness proofs]] that a proof of the Fundamental Theorem of Arithmetic will have two parts: a proof of existence and a proof of uniqueness. We will prove the existence part of Theorem 2.3.3. (Fundamental Theorem of Arithmetic) (i.e., the fact that every positive integer great than 1 *can* be written as a product of primes) in Section 3.2. We prove the uniqueness (which is not needed her) in Section 6.3.

We should note why we may postpone this proof. We are in essence making a promise that the proof of Theorem 2.3.3. (Fundamental Theorem of Arithmetic) does not depend on the statement we are currently proving in this case, [[notes/Mathematics/TTOMR/Theorem 2.3.4|Theorem 2.3.4]]. If it did, then we would have what is known as a "circular argument", which is not logically valid and hence is not a proof at all. In fact, the proof of the existence part of Theorem 2.3.3. requires a proof technique called *strong induction*, and we could stop and present this proof technique now. By choosing to wait until [[notes/Mathematics/TTOMR/Theorem 3.2.3 (Fundamental Theorem of Arithmetic (Existence))|Theorem 3.2.3 (Fundamental Theorem of Arithmetic (Existence))]] to prove the existence part of the Fundamental Theorem of Arithmetic, we are focusing on the result we are currently interested in, namely, Euclid's theorem that there are infinitely many primes.

Our proof will be an indirect proof by contradiction and will emphasize the relationship between primality and factorization. 

![[notes/Mathematics/TTOMR/Theorem 3.2.3 (Fundamental Theorem of Arithmetic (Existence))|Theorem 3.2.3 (Fundamental Theorem of Arithmetic (Existence))]]