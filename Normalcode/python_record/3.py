#a) Largest among three numbers
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))

if a >= b and a >= c:
    print("Largest number is:", a)
elif b >= a and b >= c:
    print("Largest number is:", b)
else:
    print("Largest number is:", c)

#b) Display corresponding day using if-elif-else

day = int(input("Enter a number (1-7): "))

if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
elif day == 3:
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
elif day == 6:
    print("Saturday")
elif day == 7:
    print("Sunday")
else:
    print("Invalid day number")

#c) Menu using match-case (Python 3.10+)

print("Menu:")
print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")

choice = int(input("Enter your choice (1-4): "))
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))

match choice:
    case 1:
        print("Result:", a + b)
    case 2:
        print("Result:", a - b)
    case 3:
        print("Result:", a * b)
    case 4:
        if b != 0:
            print("Result:", a / b)
        else:
            print("Cannot divide by zero.")
    case _:
        print("Invalid choice")

#d) Calculate marks and display grade

marks = float(input("Enter your percentage: "))

if marks >= 90:
    grade = 'A'
elif marks >= 80:
    grade = 'B'
elif marks >= 70:
    grade = 'C'
elif marks >= 60:
    grade = 'D'
else:
    grade = 'F'

print("Grade:", grade)
