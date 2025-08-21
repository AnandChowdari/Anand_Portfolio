# 5a) Demonstrate the following functions/methods which operate on strings in Python

s = "  Hello, Python Programming!  "

# i) len()
print("Length:", len(s))

# ii) strip()
print("Strip:", s.strip())

# iii) rstrip()
print("Right Strip:", s.rstrip())

# iv) lstrip()
print("Left Strip:", s.lstrip())

# v) find()
print("Find 'Python':", s.find("Python"))

# vi) rfind()
print("Right Find 'o':", s.rfind("o"))

# vii) index()
print("Index of 'Python':", s.index("Python"))

# viii) rindex()
print("Right Index of 'o':", s.rindex("o"))

# ix) count()
print("Count of 'o':", s.count("o"))

# x) replace()
print("Replace 'Python' with 'Java':", s.replace("Python", "Java"))

# xi) split()
print("Split by space:", s.split())

# xii) join()
words = ["Learn", "Python", "Now"]
print("Join with '-':", "-".join(words))

# xiii) upper()
print("Upper:", s.upper())

# xiv) lower()
print("Lower:", s.lower())

# xv) swapcase()
print("Swapcase:", s.swapcase())

# xvi) title()
print("Title:", s.title())

# xvii) capitalize()
print("Capitalize:", s.capitalize())

# xviii) startswith()
print("Starts with '  Hello':", s.startswith("  Hello"))

# xix) endswith()
print("Ends with '!  ':", s.endswith("!  "))

# 5b) Demonstrate the following functions/methods which operate on numbers in Python

import math
import random
import statistics

nums = [3, 7, 2, 9, 5]

# i) sqrt()
print("Square root of 16:", math.sqrt(16))

# ii) size() - Not a standard function in Python (Skipping)

# iii) min()
print("Minimum:", min(nums))

# iv) max()
print("Maximum:", max(nums))

# v) count() - works on list
print("Count of 2 in list:", nums.count(2))

# vi) round()
print("Round 4.678 to 2 decimal places:", round(4.678, 2))

# vii) ceil()
print("Ceil of 4.2:", math.ceil(4.2))

# viii) floor()
print("Floor of 4.8:", math.floor(4.8))

# ix) random()
print("Random number between 0 and 1:", random.random())

# x) range() - Example
print("Range 1 to 5:", list(range(1, 6)))

# xi) log()
print("Log base e of 10:", math.log(10))

# xii) sum()
print("Sum of list:", sum(nums))

# xiii) mean()
print("Mean of list:", statistics.mean(nums))

# xiv) split() - Not applicable for numbers, only strings

# xv) type()
print("Type of 5.5:", type(5.5))
