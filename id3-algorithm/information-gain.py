import math

# compute the Entropy of a given node
# node example: [2, 5]
def entropy(root):
	h = 0.0
	for opt in root:
		if opt is 0:
			h += 0
		else:
			h += (opt / sum(root) * math.log(sum(root) / opt, 2))
	return h

# compute the Information Gain of a given subtree
# subtree example: root: [2, 5] and childreen: [[1, 4], [1, 1]]
def conditional_entropy(root, children):
	h = 0.0
	for node in children:
		h += (sum(node) / sum(root)) * entropy(node)
	return h

# compute the Information Gain of a given subtree
# subtree example: root: [2, 5] and childreen: [[1, 4], [1, 1]]
def information_gain(root, children):
	ig = entropy(root) - conditional_entropy(root, children)
	return ig

H = entropy([4, 3])
print("Entropy: ", H)

CH = conditional_entropy([2, 2], [[1, 1], [1, 1]])
print("Conditional Entropy: ", CH)

IG = information_gain([5, 3], [[1, 0], [4, 3]])
print("Information Gain1: ", IG)
