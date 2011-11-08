<!SLIDE bullets incremental small>

# Polynomial time whats are in the what now? #
.notes Here's some motivation...

* the graph isomorphism problem: are the two graphs \\(G\\) and \\(H\\) isomorphic?
* one of the few possible candidates for \\(\mathsf{NP}\backslash\mathsf{P}\\)
* what other isomorphism or equivalence problems in \\(\mathsf{NP}\\) reduce to the graph isomorphism problem?
* more importantly, *how* do they reduce to it? $$\langle X, Y\; \rangle \mapsto \langle G, H\, \rangle $$

<!SLIDE bullets incremental small>

# A more natural notion of reduction for problems of equivalence #

* instead map each structure \\(X\\) to a graph \\(G\\) (which depends on \\(X\\)) by some polynomial time computable function \\(f\\)
* this is how most reductions from equivalence problems to graph isomorphism work anyway!
* this is a polynomial time *kernel reduction*

<!SLIDE bullets incremental smaller>

# Reminder of definitions... #

* An *equivalence relation* \\(R\\) is a set of pairs of strings satisfying:
1. *reflexivity*: for all strings \\(x\\),  
\\((x, x)\in R\\)
2. *symmetry*: for all strings \\(x\\) and \\(y\\),  
\\((x,y)\in R\implies (y, x)\in R\\)
3. *transitivity*: for all strings \\(x\\), \\(y\\), and \\(z\\),  
\\((x,y)\in R\\) and \\((y,z)\in R \implies (x,z)\in R\\)
* generalization of the idea of equality

<!SLIDE bullets incremental smaller>

# Equivalence relations and computation #

* \\(\mathsf{NPEq}\\): equivalence relations in \\(\mathsf{NP}\\)
* contains graph isomorphism
* can construct various others from common problems in \\(\mathsf{NP}\\):
* \\(\\{((G, k), (H, k)) | G\\) is isomorphic to \\(H\\) or \\(G\\) and \\(H\\) both have a clique of size \\(k\\}\\)
* what do we know about the clique problem? (we'll return to this)

<!SLIDE bullets incremental smaller>

# Kernel reductions #

* many-one reduction: \\(f((x, y)) = (x', y')\\)
* access to both \\(x\\) and \\(y\\)
* kernel reduction: \\(f(x) = x'\\), so \\( (f(x), f(y)) = (x', y')\\)
* access to one at a time
* kernel reduction induces a many-one reduction
  * \\( (x,y)\mapsto (f(x), f(y))\\)

<!SLIDE bullets incremental small>

# Kernel reductions #

* \\(R \leq\_{ker} ^ {P} S \\) if there exists a \\(f\in\mathsf{FP}\colon\\)
  * \\( (x,y)\in R\\) if and only if \\( (f(x), f(y))\in S \\)

<!SLIDE bullets incremental small>

# Basic facts about kernel reductions #

* kernel reductions preserve equivalence classes:
  * *\\( R\leq\_{ker} ^ P S \implies f([w]_R) \subseteq [f(w)]\_S \\)*
* number of equivalence classes is important:
  * *if \\(R\\) has more eq. classes than \\(S\\) then \\(R \nleq\_{ker} S \\)*
