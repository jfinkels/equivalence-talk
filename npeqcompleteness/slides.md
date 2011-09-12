<!SLIDE subsection>

# Consequences of completeness in \\( \mathsf{NPEq} \\) #

<!SLIDE bullets incremental transition=uncover>

* \\(\\{((G, k), (H, k)) | G\\) is isomorphic to \\(H\\) or \\(G\\) and \\(H\\)
  both have a clique of size \\(k\\}\\)
* \\( \mathsf{NPEq} \\) (equivalence relation in \\(\mathsf{NP}\\))
* \\( \mathsf{NP} \\)-complete (from \\(\mathsf{CLIQUE}\\)):
* \\((G, k) \mapsto ((G,k), (K\_k, k))\\)

<!SLIDE bullets incremental transition=uncover>

# \\(\mathsf{NPEq}\\)-completeness implies \\(\mathsf{NP}\\)-completeness #

* if \\(R\\) is \\(\mathsf{NPEq}\\)-complete, then the previous problem reduces
  to it
* if \\(\mathsf{GI}\\) is \\(\mathsf{NPEq}\\)-complete, then it is
  \\(\mathsf{NP}\\)-complete
  * \\(\mathsf{PH}=\mathsf{\Sigma\_2P\cap\Pi\_2P}\\)

<!SLIDE bullets incremental transition=uncover>

# 1-1 completeness #

* \\(\\{((G, k), (H, k)) |\\)
  * \\(G\\) is isomorphic to \\(H\\) or
  * (\\(G\\) and \\(H\\) both have a clique of size \\(k\\)
  * and \\(|V(G)|=|V(H)|) \\}\\)
* restriction of previous problem
* \\(\mathsf{NP}\\)-complete by reduction which enforces \\(|V(G)|=|V(H)|\\)

<!SLIDE bullets incremental transition=uncover>

# Sizes of equivalence classes #

* consider \\(R = \\{(x,y)|x\\) and \\(y\\) have the same number of
  \\(1\\)s\\(\\}\\)
* infinite number of equivalence classes
  * \\([\lambda], [1], [11], \ldots\\)
* infinite number of elements in each equivalence class
  * \\( [w], [0w], [00w], \ldots  \\)

<!SLIDE bullets incremental transition=uncover>

# Sizes of equivalence classes #

* consider \\(R = \\{(x,y)|x\\) and \\(y\\) have the same number of
  \\(1\\)s\\(\\}\\)
* infinite number of equivalence classes
  * \\( [\lambda], [1], [11], \ldots \\)
* infinite number of elements in each equivalence class
  * \\( [w], [0w], [00w], \ldots  \\)

