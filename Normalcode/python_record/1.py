# --------------------------------------------
# a) Demonstrating Input and Output operations
# --------------------------------------------

# i) input() and ii) print()
name = input("Enter your name: ")
print("Hello,", name)

# iii) sep attribute
print("Python", "is", "awesome", sep=" | ")

# iv) end attribute
print("This is the first part.", end=" ")
print("This is the second part.")

# v) split() and vi) map()
numbers = input("Enter numbers separated by space: ")
number_list = list(map(int, numbers.split()))
print("List of numbers:", number_list)

# --------------------------------------------
# b) Demonstrating built-in functions
# --------------------------------------------

# i) id()
x = 100
print("ID of x:", id(x))

# ii) type()
y = 23.5
print("Type of y:", type(y))

# iii) range()
print("Range from 1 to 5:")
for i in range(1, 6):
    print(i, end=" ")
print()  # for newline

# --------------------------------------------
# c) Demonstrating Type Conversion Functions
# --------------------------------------------

a = "123"          # str
b = int(a)         # str to int
c = float(b)       # int to float
d = str(c)         # float to str
e = bool(d)        # str to bool

print("Original string:", a)
print("Converted to int:", b)
print("Converted to float:", c)
print("Converted to str again:", d)
print("Converted to bool:", e)
