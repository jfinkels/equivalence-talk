<!SLIDE title-slide>

# On polynomial time kernel reductions among equivalence relations #

Jeffrey Finkelstein

Ben Hescott

<!SLIDE bullets incremental small transition=uncover>

# Polynomial time whats are in the what now? #
.notes Here's some motivation...

* the graph isomorphism problem: are the two graphs \\(G\\) and \\(H\\) isomorphic?
* one of the few possible candidates for \\(\mathsf{NP}\backslash\mathsf{P}\\)
* what other isomorphism or equivalence problems in \\(\mathsf{NP}\\) reduce to the graph isomorphism problem?
* more importantly, *how* do they reduce to it? $$\langle X, Y\; \rangle \mapsto \langle G, H\, \rangle $$

<!SLIDE bullets incremental small transition=uncover>

# A more natural notion of reduction for problems of equivalence #

* instead map each structure \\(X\\) to a graph \\(G\\) (which depends on \\(X\\)) by some polynomial time computable function \\(f\\)
* this is how most reductions from equivalence problems to graph isomorphism work anyway!
* this is a polynomial time *kernel reduction*

<!SLIDE bullets incremental smaller transition=uncover>

# Reminder of definitions... #

* An *equivalence relation* \\(R\\) is a set of pairs of strings satisfying:
1. *reflexivity*: for all strings \\(x\\),  
\\((x, x)\in R\\)
2. *symmetry*: for all strings \\(x\\) and \\(y\\),  
\\((x,y)\in R\implies (y, x)\in R\\)
3. *transitivity*: for all strings \\(x\\), \\(y\\), and \\(z\\),  
\\((x,y)\in R\\) and \\((y,z)\in R \implies (x,z)\in R\\)
* generalization of the idea of equality

<!SLIDE bullets incremental smaller transition=uncover>

# Equivalence relations and computation #

* \\(\mathsf{NPEq}\\): equivalence relations in \\(\mathsf{NP}\\)
* contains graph isomorphism
* can construct various others from common problems in \\(\mathsf{NP}\\):
* \\(\\{((G, k), (H, k)) | G\\) is isomorphic to \\(H\\) or \\(G\\) and \\(H\\) both have a clique of size \\(k\\}\\)
* what do we know about the clique problem? (we'll return to this)

<!SLIDE bullets incremental smaller transition=uncover>

# Kernel reductions #

* many-one reduction: \\(f((x, y)) = (x', y')\\)
* access to both \\(x\\) and \\(y\\)
* kernel reduction: \\(f(x) = x'\\), so \\( (f(x), f(y)) = (x', y')\\)
* access to one at a time
* kernel reduction induces a many-one reduction
  1. \\( (x,y)\mapsto (f(x), f(y))\\)

<!SLIDE bullets incremental small transition=uncover>

# Kernel reductions #

* \\(R \leq\_{ker} ^ {P} S \\) if there exists a \\(f\in\mathsf{FP}\colon\\)
  1. \\( (x,y)\in R\\) if and only if \\( (f(x), f(y))\in S \\)

<!SLIDE bullets incremental small transition=uncover>

# Basic facts about kernel reductions #

* kernel reductions preserve equivalence classes:
  1. *\\( R\leq\_{ker} ^ P S \implies f([w]_R) \subseteq [f(w)]\_S \\)*
* number of equivalence classes is important:
  1. *if \\(R\\) has more eq. classes than \\(S\\) then \\(R \nleq\_{ker} S \\)*

<!SLIDE bullets incremental smaller transition=uncover>

# Polynomial time kernel vs. many-one reductions in \\(\mathsf{P}\\) #

* consider \\(R\_n=\\{(x,y)|x\equiv y\pmod{n}\\}\\)
* \\( R\_3 \leq\_m ^ P R\_2 \\) : if \\( x\equiv y\pmod{3} \\) output
  \\( (0, 0) \\) else output \\( (0, 1) \\)
* \\( R\_3 \nleq\_{ker} ^ P R\_2 \\)

<!SLIDE transition=uncover>

# What about in \\(\mathsf{NP}\\)? #

<!SLIDE bullets incremental transition=uncover>

# Completeness #

* [Fortnow and Grochow][1]
  * Are there \\(\mathsf{PEq}\\)-complete problems?
* [Buss et al.][2]
  * If \\(\mathsf{E}=\mathsf{NE}\\) then \\(\mathsf{PEq}\\) has a complete
    problem.
  * If \\(\mathsf{NP}=\mathsf{coNP}\\) then \\(\mathsf{NPEq}\\) has a complete
    problem.
* Ouch!

[1]: www.cs.uchicago.edu/~fortnow/papers/equiv.pdf
[2]: http://www.crm.es/Publications/11/Pr1009.pdf

<!SLIDE bullets incremental transition=uncover>

* Can we eliminate the assumption?
* Can we generalize the result?

<!SLIDE bullets incremental small transition=uncover>

# Sort of... #

* Using technique of Buss et al., we can provide a complete problem for a
  \\(\mathcal{C}\mathsf{Eq}\\) as long as the class \\(\mathcal{C}\\)...
* is a subset of \\(\mathsf{PSPACE}\\)
* is closed under complement
* is closed under universal quantification
* contains the problem of deciding whether two strings are equal

<!SLIDE bullets incremental transition=uncover>

# Classes with complete problems #

* \\(\mathsf{(\Sigma\_kP\cap\Pi\_kP)Eq}\\), for all \\(k\geq 1\\)
* \\(\mathsf{PSPACEEq}\\)
* \\(\mathsf{PHEq}\\)

<!SLIDE bullets incremental transition=uncover>

# Building a complete problem #

* Canonical many-one complete problem
  * \\(\\{(M, x, 1 ^ t) | M \\) accepts \\( x \\) within \\( t \\) steps \\( \\} \\)
* How can we turn this into an equivalence relation?

<!SLIDE bullets incremental>

* \\(\\{((M, x, 1 ^ t), (M, y, 1 ^ t)) | M \\) accepts \\( (x, y) \\) in \\(
  \leq t \\) steps \\( \\} \\)
* Not reflexive

<!SLIDE bullets incremental>

* \\(\\{(u,v)|u=v\\} \cup \\{((M, x, 1 ^ t), (M, y, 1 ^ t)) | M \\) accepts \\(
  (x, y) \\) within \\( t \\) steps \\( \\} \\)
* Not symmetric or transitive
* Especially not for arbitrary machines!

<!SLIDE bullets incremental small transition=uncover>

* Suppose there is a machine, \\( A \\), which on input \\((M, n)\\) decides
  whether \\(L(M)\\) restricted to strings of length at most \\(n\\) is an
  equivalence relation.
* \\(\\{(u,v)|u=v\\} \cup \\{((M, x, 1 ^ {t\_x}), (M, y, 1 ^ {t\_y})) |\\)
  * \\( M \\) is a polynomially clocked \\(\mathcal{C}\\) machine
  * \\( M \\) accepts \\( (x, y) \\)
  * \\( A \\) accepts \\( (M, |x|) \\) within \\(t\_x\\) steps
  * \\( A \\) accepts \\( (M, |y|) \\) within \\(t\_y\\) steps

<!SLIDE bullets incremental transition=uncover>

## What is such an algorithm? ##

* reflexive, symmetric, transitive
* for all \\(x\in\Sigma ^ {\leq n}\\), \\(M \\) accepts \\((x,x)\\)
* for all \\(x,y\in\Sigma ^ {\leq n}\\), \\(M \\) accepts \\((x,y)\\) implies
  \\(M \\) accepts \\((y, x)\\)
* for all \\(x,y,z\in\Sigma ^ {\leq n}\\), \\(M \\) accepts \\((x,y)\\) and
  \\(M\\) accepts \\((y,z)\\) implies \\(M \\) accepts \\((x, z)\\)

<!SLIDE bullets>

## What is such an algorithm? ##

* reflexive, symmetric, transitive
* for all \\(x\in\Sigma ^ {\leq n}\\), \\(M \\) accepts \\((x,x)\\)
* for all \\(x,y\in\Sigma ^ {\leq n}\\), \\(M \\) rejects \\((x,y)\\) or \\(M
  \\) accepts \\((y, x)\\)
* for all \\(x,y,z\in\Sigma ^ {\leq n}\\), \\(M \\) rejects \\((x,y)\\) or
  \\(M\\) rejects \\((y,z)\\) or \\(M \\) accepts \\((x, z)\\)
