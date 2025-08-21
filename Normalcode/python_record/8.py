# 8a) Demonstrate following on tuples

# i) Creation
my_tuple = (10, 20, 30, 40, 20)
print("Tuple created:", my_tuple)

# ii) Searching using membership operators
print("Is 30 in tuple?", 30 in my_tuple)
print("Is 50 not in tuple?", 50 not in my_tuple)

# iii) Count the occurrences of an element
print("Count of 20:", my_tuple.count(20))

# iv) index()
print("Index of first occurrence of 40:", my_tuple.index(40))


# 8b) Demonstrate following on sets

set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# i) union()
print("Union of sets:", set1.union(set2))

# ii) intersection()
print("Intersection of sets:", set1.intersection(set2))

# iii) difference()
print("Difference (set1 - set2):", set1.difference(set2))
print("Difference (set2 - set1):", set2.difference(set1))

# iv) symmetric_difference()
print("Symmetric Difference:", set1.symmetric_difference(set2))

# v) issubset()
print("Is set1 a subset of set2?", set1.issubset(set2))

# vi) issuperset()
print("Is set1 a superset of set2?", set1.issuperset(set2))

