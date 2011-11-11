<!SLIDE bullets incremental>

# Completeness #

* [Fortnow and Grochow][1]
  * Are there \\(\mathsf{PEq}\\)-complete problems?
* [Buss et al.][2]
  * If \\(\mathsf{E}=\mathsf{NE}\\) then \\(\mathsf{PEq}\\) has a complete
    problem.
  * If \\(\mathsf{NP}=\mathsf{coNP}\\) then \\(\mathsf{NPEq}\\) has a complete
    problem.
* *Ouch!*

[1]: http://www.cs.uchicago.edu/~fortnow/papers/equiv.pdf
[2]: http://www.crm.es/Publications/11/Pr1009.pdf

<!SLIDE>

# eliminate assumptions? #
# generalize? #

<!SLIDE bullets incremental small>

# Sort of... #

* Using technique of Buss et al.
* suppose \\(\mathcal{C}\subseteq\mathsf{PSPACE}\\)
* construct a \\(\leq\_{ker} ^ P\\)-hard problem for
  \\(\mathcal{C}\mathsf{Eq}\\)
* that problem is in \\(\forall(\mathcal{C}\cup\mathsf{co}\mathcal{C})\\)

<!SLIDE bullets incremental>

# Under \\(\leq\_{ker} ^ P\\) reductions... #
* \\(\mathsf{PSPACEEq}\\) has a complete problem
* \\(\mathsf{\Pi\_{k+1}PEq}\\) has a problem hard for \\(\mathsf{\Sigma\_kPEq}\\)
* \\(\mathsf{\Pi\_{k+1}PEq}\\) has a problem hard for \\(\mathsf{\Pi\_kPEq}\\)
* etc.

<!SLIDE bullets incremental small>

# Building a complete problem #

* Canonical many-one complete problem
  * \\(\\{(M, x, 1 ^ t) | M \\) accepts \\( x \\) within \\( t \\) steps \\( \\} \\)
* How can we turn this into an equivalence relation?

<!SLIDE bullets incremental>

* \\(\\{((M, x, 1 ^ t), (M, y, 1 ^ t)) | M \\) accepts \\( (x, y) \\) in \\(
  \leq t \\) steps \\( \\} \\)
* Not reflexive

<!SLIDE bullets incremental>

* \\(\\{(u,v)|u=v\\}\\)
* \\(\cup \\)
* \\(\\{((M, x, 1 ^ t), (M, y, 1 ^ t)) | M \\) accepts
  \\((x, y)\, \\) within \\( t \\) steps \\( \\} \\)
* Not symmetric or transitive
* Especially not for arbitrary machines!

<!SLIDE>

# need to enforce that \\(L(M)\\) is an equivalence relation #

<!SLIDE bullets incremental small>

# How? #

* suppose algorithm \\( A \\)
* on input \\((M, n)\\)
  * (\\(M\\) takes pairs of strings)
* decides if \\( M \\) accepts an equivalence relation on \\(\Sigma ^ {\leq n}\\)

<!SLIDE bullets>

* \\(\\{(u,v)|u=v\\}\\)
* \\(\cup \\)
* \\(\\{((M, x, 1 ^ {t\_x}), (M, y, 1 ^ {t\_y})) |\\)
  * \\( M \\) is a polynomially clocked \\(\mathcal{C}\\) machine
  * \\( M \\) accepts \\( (x, y) \\)
  * \\( A \\) accepts \\( (M, |x|) \\) within \\(t\_x\\) steps
  * \\( A \\) accepts \\( (M, |y|) \\) within \\(t\_y\\) steps\\( \\} \\)

<!SLIDE bullets incremental>

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

<!SLIDE bullets incremental>

# The algorithm \\( A \\) #

* universally guess \\(x, y, z \in\Sigma ^ {\leq n}\\)
* simulate \\(M\\) on pairs of inputs as required above
* if any of the rules is violated, reject, else accept

<!SLIDE bullets incremental small>

# The \\(\leq_{ker} ^ P\\)-hard problem #

* \\(\\{(u,v)|u=v\\} \cup \\{((M, x, 1 ^ {t\_x}), (M, y, 1 ^ {t\_y})) |\\)
  * \\( M \\) is a polynomially clocked \\(\mathcal{C}\\) machine
  * \\( M \\) accepts \\( (x, y) \\)
  * \\( A \\) accepts \\( (M, |x|) \\) within \\(t\_x\\) steps
  * \\( A \\) accepts \\( (M, |y|) \\) within \\(t\_y\\) steps\\(\\}\\)
* No other tricks

<!SLIDE bullets incremental>

* Does \\(\mathsf{NPEq}\\) have a complete problem?
* Does \\(\mathsf{PEq}\\) have a complete problem?
  * - We have \\(\mathsf{coNPEq}\,\\) has a \\(\leq_{ker} ^ P\\)-hard problem
      for \\(\mathsf{PEq}\\)
  * - Buss et al. have \\(\mathsf{E}=\mathsf{NE}\\) implies a
      \\(\mathsf{PEq}\\)-complete problem
