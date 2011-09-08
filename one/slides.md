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

<!SLIDE bullets incremental transition=uncover>

# Equivalence relations and computation #

* \\(\mathsf{NPEq}\\): equivalence relations in \\(\mathsf{NP}\\)
  * graph isomorphism is in \\(\mathsf{NPEq}\\)
  * 