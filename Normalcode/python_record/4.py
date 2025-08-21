#a) Check if a number is palindrome or not

num = int(input("Enter a number: "))
original = num
reverse = 0

while num > 0:
    digit = num % 10
    reverse = reverse * 10 + digit
    num = num // 10

if original == reverse:
    print("The number is a palindrome.")
else:
    print("The number is not a palindrome.")

#b) Print prime numbers in a given range

start = int(input("Enter the start of range: "))
end = int(input("Enter the end of range: "))

print("Prime numbers between", start, "and", end, "are:")

for num in range(start, end + 1):
    if num > 1:
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                break
        else:
            print(num, end=" ")
print()

#c) Print numbers from 10 to 100, skip numbers divisible by 5

print("Numbers from 10 to 100 skipping numbers divisible by 5:")
for i in range(10, 101):
    if i % 5 == 0:
        continue
    print(i, end=" ")
print()
