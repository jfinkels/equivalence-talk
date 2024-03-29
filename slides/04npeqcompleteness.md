<!SLIDE bullets incremental small>

# Consequences of completeness in \\( \mathsf{NPEq} \\) #

* \\(\\{((G, k), (H, k)) | G\\) is isomorphic to \\(H\\) or \\(G\\) and \\(H\\)
  both have a clique of size \\(k\\}\\)
* is in \\( \mathsf{NPEq} \\)
* is \\( \mathsf{NP} \\)-complete (from \\(\mathsf{CLIQUE}\\)):
* \\((G, k) \mapsto ((G,k), (K\_k, k))\\)

<!SLIDE bullets incremental small>

# \\(\mathsf{NPEq}\\)-completeness implies \\(\mathsf{NP}\\)-completeness #

* previous problem reduces to any \\(\mathsf{NPEq}\\)-complete problem
* if \\(\mathsf{GI}\\) is \\(\mathsf{NPEq}\\)-complete, then it is also
  \\(\mathsf{NP}\\)-complete
  * \\(\mathsf{PH}=\mathsf{\Sigma\_2P\cap\Pi\_2P}\\)

<!SLIDE bullets incremental>

# 1-1 completeness #
.notes Make a point about the size of equivalence classes of this problem...

* \\(B=\\{((G, k), (H, k)) |\\)
  * \\(G\\) is isomorphic to \\(H\\) or
  * (\\(G\\) and \\(H\\) both have a clique of size \\(k\\)
  * and \\(|V(G)|=|V(H)|) \\}\\)
* restriction of previous problem
* \\(\mathsf{NP}\\)-complete by reduction which enforces \\(|V(G)|=|V(H)|\\)

<!SLIDE bullets incremental small>

# Sizes of equivalence classes #

* consider \\(R = \\{(x,y)|x\,\\) and \\(y\\) have the same number of
  \\(1\\)s\\(\\}\\)
* infinite number of equivalence classes
  * \\([\lambda], [1], [11], \ldots\\)
* infinite number of elements in each equivalence class
  * \\( w, 0w, 00w, \ldots  \\)

<!SLIDE bullets incremental>

* in \\(B\\), given a graph \\(G\\) and a natural number \\(k\\), consider \\([(G, k)]\_B\\)
* finite number of isomorphic graphs
* finite number of graphs \\( H \\) such that \\(|V(G)|=|V(H)|\\)
* and even fewer with a clique of size \\( k \\)
* so \\([(G, k)]\\) is finite

<!SLIDE bullets incremental>

* if \\(B\\) were \\(\mathsf{NPEq}\\)-complete, then \\( R\leq\_{ker} ^ P B \\)
* \\( [w]\_R \\) infinite, \\( [(G, k)]\_B \\) finite
* pigeonhole principle implies reduction not injective
