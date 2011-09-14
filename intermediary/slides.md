<!SLIDE subsection>

# \\( \mathsf{NPEq} \\) intermediary problems #

<!SLIDE bullets incremental transition=uncover>

# Ladner's theorem #

* \\( \mathsf{P}\neq\mathsf{NP} \\)
* \\( \implies \exists L\in\mathsf{NP}\colon L\notin \mathsf{P} \land
  L\notin\mathsf{NPC} \\)
* does it extend to \\( \mathsf{PEq} \\) and \\( \mathsf{NPEq} \\)?

<!SLIDE bullets incremental transition=uncover>

# Sort of... #

* if there are \\( \mathsf{NPEq} \\) complete problems

<!SLIDE bullets incremental small transition=uncover>

# Uniform diagonalization theorem (regular version) #

* if \\( L\_1, L\_2 \\) decidable languages, \\( \mathcal{C}\_1, \mathcal{C}\_2 \\) classes of decidable languages, such that
  * \\( L\_1\notin\mathcal{C}\_1, L\_2\notin\mathcal{C}\_2 \\)
  * \\( \mathcal{C}\_1, \mathcal{C}\_2 \\) are computably enumerable
  * \\( \mathcal{C}\_1, \mathcal{C}\_2 \\) are closed under finite variations
* then there exists a decidable language \\( L \\) such that
  * \\( L\notin\mathcal{C}\_1, L\notin\mathcal{C}\_2 \\)
  * \\( L\leq\_{m} ^ P (L\_1 \oplus L\_2) \\)
* set \\( L\_1 = \mathsf{SAT}, L\_2 = \emptyset, \mathcal{C}\_1 = \mathsf{NPC},
  \mathcal{C}\_2 = \mathsf{P} \\)

<!SLIDE bullets small>

# Uniform diagonalization theorem (eq. rel. version) #

* if \\( R\_1, R\_2 \\) decidable eq. rels., \\( \mathcal{C}\_1, \mathcal{C}\_2 \\) classes of decidable eq. rels., such that
  * \\( R\_1\notin\mathcal{C}\_1, R\_2\notin\mathcal{C}\_2 \\)
  * \\( \mathcal{C}\_1, \mathcal{C}\_2 \\) are computably enumerable
  * \\( \mathcal{C}\_1, \mathcal{C}\_2 \\) are closed under finite variations
* then there exists a decidable eq. rel. \\( R \\) such that
  * \\( R\notin\mathcal{C}\_1, R\notin\mathcal{C}\_2 \\)
  * \\( R\leq\_{m} ^ P (R\_1 \overset{ker}{\oplus} R\_2) \\)
* set \\( R\_1 = \mathsf{NPEq}\\)-complete problem, \\( R\_2 = \emptyset,
  \mathcal{C}\_1 = \mathsf{NPEqC}, \mathcal{C}\_2 = \mathsf{PEq} \\)

<!SLIDE bullets incremental transition=uncover>

# Proof idea (original version) #

* enumerate languages \\( A\_1, A\_2, \ldots \\) and \\( B\_1, B\_2, \ldots \\)
* find strings which witness \\( A\_i\neq L\_1 \\) and \\( B\_i\neq L\_2 \\)
  for each \\( i \\)

<!SLIDE bullets>

# Proof idea (eq. rel. version) #

* enumerate eq. rels. \\( S\_1, S\_2, \ldots \\) and \\( T\_1, T\_2, \ldots \\)
* find a *pair* of strings which witness \\( S\_i\neq R\_1 \\) and \\( T\_i\neq
  R\_2 \\) for each \\( i \\)
