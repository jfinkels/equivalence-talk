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
