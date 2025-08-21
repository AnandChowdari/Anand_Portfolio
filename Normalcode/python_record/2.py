# --------------------------------------------
# i) Arithmetic Operators
# --------------------------------------------
a = 10
b = 3
print("Arithmetic Operators:")
print("a + b =", a + b)
print("a - b =", a - b)
print("a * b =", a * b)
print("a / b =", a / b)
print("a % b =", a % b)
print("a ** b =", a ** b)
print("a // b =", a // b)
print()

# --------------------------------------------
# ii) Relational (Comparison) Operators
# --------------------------------------------
print("Relational Operators:")
print("a > b:", a > b)
print("a < b:", a < b)
print("a == b:", a == b)
print("a != b:", a != b)
print("a >= b:", a >= b)
print("a <= b:", a <= b)
print()

# --------------------------------------------
# iii) Assignment Operator
# --------------------------------------------
print("Assignment Operators:")
x = 5
x += 3  # x = x + 3
print("x after x += 3:", x)
x *= 2  # x = x * 2
print("x after x *= 2:", x)
print()

# --------------------------------------------
# iv) Logical Operators
# --------------------------------------------
print("Logical Operators:")
x = True
y = False
print("x and y:", x and y)
print("x or y:", x or y)
print("not x:", not x)
print()

# --------------------------------------------
# v) Membership Operators
# --------------------------------------------
print("Membership Operators:")
list1 = [1, 2, 3, 4]
print("2 in list1:", 2 in list1)
print("5 not in list1:", 5 not in list1)
print()

# --------------------------------------------
# vi) Identity Operators
# --------------------------------------------
print("Identity Operators:")
p = [1, 2, 3]
q = [1, 2, 3]
r = p
print("p is q:", p is q)
print("p is r:", p is r)
print("p == q:", p == q)
print()

# --------------------------------------------
# Quadratic Equation Solver
# --------------------------------------------

print("Quadratic Equation Solver: ax² + bx + c = 0")

import math

# Input values for a, b, c
a = float(input("Enter value of a: "))
b = float(input("Enter value of b: "))
c = float(input("Enter value of c: "))

# Calculate discriminant
d = b**2 - 4*a*c

if d > 0:
    root1 = (-b + math.sqrt(d)) / (2*a)
    root2 = (-b - math.sqrt(d)) / (2*a)
    print("Roots are real and different.")
    print("Root 1 =", root1)
    print("Root 2 =", root2)
elif d == 0:
    root = -b / (2*a)
    print("Roots are real and equal.")
    print("Root =", root)
else:
    real = -b / (2*a)
    imag = math.sqrt(-d) / (2*a)
    print("Roots are complex and different.")
    print("Root 1 =", complex(real, imag))
    print("Root 2 =", complex(real, -imag))
