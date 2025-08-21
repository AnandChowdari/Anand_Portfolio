# 6a) Write a Python program to find factorial of a given number using functions

def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

num = int(input("Enter a number to find factorial: "))
print("Factorial of", num, "is", factorial(num))

# 6b i) Positional Parameters

def greet(name, age):
    print(f"Hello {name}, you are {age} years old.")

greet("Anand", 18)  # Positional parameters

# 6b ii) Default Parameters

def power(base, exponent=2):
    return base ** exponent

print("Power with default exponent (2):", power(5))
print("Power with custom exponent:", power(5, 3))

# 6b iii) Keyword Parameters

def student_info(name, branch):
    print(f"Name: {name}, Branch: {branch}")

student_info(branch="CSE", name="Anand")  # Keyword arguments

# 6b iv) Variable length Parameters

def add_all(*numbers):
    return sum(numbers)

print("Sum of multiple numbers:", add_all(5, 10, 15, 20))

# 6c) Write a Python program to return multiple values at a time using return statement

def calculate(a, b):
    sum_ = a + b
    diff = a - b
    prod = a * b
    return sum_, diff, prod

x, y = 10, 5
s, d, p = calculate(x, y)
print("Sum:", s)
print("Difference:", d)
print("Product:", p)

# 6d) Write a Python program to demonstrate Local and Global variables

x = 10  # Global variable

def demo_scope():
    global x  # Modifies global x
    x = 20
    y = 5     # Local variable
    print("Inside function - x (global):", x)
    print("Inside function - y (local):", y)

demo_scope()
print("Outside function - x (global):", x)
# print("Outside function - y (local):", y)  # This will cause an error if uncommented
