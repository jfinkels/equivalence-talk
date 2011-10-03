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

* Using technique of Buss et al.
* suppose \\(\mathcal{C}\subseteq\mathsf{PSPACE}\\)
* construct a \\(\leq\_{ker} ^ P\\)-hard problem for
  \\(\mathcal{C}\mathsf{Eq}\\)
* that problem is in \\(\forall(\mathcal{C}\cup\mathsf{co}\mathcal{C})\\)

<!SLIDE bullets incremental transition=uncover>

* \\(\mathsf{PSPACEEq}\\) has a complete problem under \\(\leq\_{ker} ^ P\\)
  reductions
* \\(\mathsf{\Pi\_{k+1}PEq}\\) has a problem hard for
  \\(\mathsf{\Sigma\_kPEq}\\) and \\(\mathsf{\Pi\_kPEq}\\) under \\(\leq\_{ker}
  ^ P\\) reductions

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
  \\((x, y) \\) within \\( t \\) steps \\( \\} \\)
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

# The \\(\leq_{ker} ^ P\\)-hard problem #

* \\(\\{(u,v)|u=v\\} \cup \\{((M, x, 1 ^ {t\_x}), (M, y, 1 ^ {t\_y})) |\\)
  * \\( M \\) is a polynomially clocked \\(\mathcal{C}\\) machine
  * \\( M \\) accepts \\( (x, y) \\)
  * \\( A \\) accepts \\( (M, |x|) \\) within \\(t\_x\\) steps
  * \\( A \\) accepts \\( (M, |y|) \\) within \\(t\_y\\) steps
* No other tricks

<!SLIDE bullets incremental transition=uncover>

* Does \\(\mathsf{NPEq}\\) have a complete problem?
* Does \\(\mathsf{PEq}\\) have a complete problem?
