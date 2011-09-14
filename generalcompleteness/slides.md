<!SLIDE subsection transition=uncover>

# Completeness #

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

* Using technique of Buss et al., we can provide a complete problem for a class
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

<!SLIDE bullets incremental small transition=uncover>

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
  * \\(\cup \\{((M, x, 1 ^ t), (M, y, 1 ^ t)) | M \\) accepts
  * \\((x, y) \\) within \\( t \\) steps \\( \\} \\)
* Not symmetric or transitive
* Especially not for arbitrary machines!

<!SLIDE bullets incremental small>

* Suppose there is a machine, \\( A \\), which on input \\((M, n)\\) decides
  whether the pairs of strings which \\( M \\) accepts define an equivalence
  relation on strings of length at most \\(n\\).
* \\(\\{(u,v)|u=v\\} \cup \\{((M, x, 1 ^ {t\_x}), (M, y, 1 ^ {t\_y})) |\\)
  * \\( M \\) is a polynomially clocked \\(\mathcal{C}\\) machine
  * \\( M \\) accepts \\( (x, y) \\)
  * \\( A \\) accepts \\( (M, |x|) \\) within \\(t\_x\\) steps
  * \\( A \\) accepts \\( (M, |y|) \\) within \\(t\_y\\) steps\\( \\} \\)
* want \\( A \\) in \\( \mathcal{C} \\)

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

<!SLIDE bullets incremental transition=uncover>

# The algorithm \\( A \\) #

* universally guess \\(x, y, z \in\Sigma ^ {\leq n}\\)
* simulate \\(M\\) on pairs of inputs as required above
* if any of the rules is violated, reject, else accept

<!SLIDE bullets incremental small transition=uncover>

# The complete problem #

* \\(\\{(u,v)|u=v\\} \cup \\{((M, x, 1 ^ {t\_x}), (M, y, 1 ^ {t\_y})) |\\)
  * \\( M \\) is a polynomially clocked \\(\mathcal{C}\\) machine
  * \\( M \\) accepts \\( (x, y) \\)
  * \\( A \\) accepts \\( (M, |x|) \\) within \\(t\_x\\) steps
  * \\( A \\) accepts \\( (M, |y|) \\) within \\(t\_y\\) steps
* Not tricky

<!SLIDE bullets incremental transition=uncover>

* Does \\(\mathsf{NPEq}\\) have a complete problem?
* Does \\(\mathsf{PEq}\\) have a complete problem?
