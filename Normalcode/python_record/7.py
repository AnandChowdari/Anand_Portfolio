# 7a) Access, insert, replace, delete elements

lst = [10, 20, 30, 40, 50]

# Access
print("Element at index 2:", lst[2])

# Insert
lst.insert(3, 35)
print("After inserting 35 at index 3:", lst)

# Replace
lst[1] = 25
print("After replacing index 1 with 25:", lst)

# Delete
del lst[4]
print("After deleting element at index 4:", lst)

# 7b) Linear Search

def linear_search(lst, target):
    for i in range(len(lst)):
        if lst[i] == target:
            return i
    return -1

lst = [5, 10, 15, 20, 25]
target = int(input("Enter number to search (linear): "))
result = linear_search(lst, target)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")


# 7c) Binary Search (list must be sorted)

def binary_search(lst, target):
    low = 0
    high = len(lst) - 1
    
    while low <= high:
        mid = (low + high) // 2
        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

lst = sorted([3, 7, 1, 9, 5])
print("Sorted list for binary search:", lst)
target = int(input("Enter number to search (binary): "))
result = binary_search(lst, target)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found")


# 7d) Bubble Sort

def bubble_sort(lst):
    n = len(lst)
    for i in range(n):
        for j in range(n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]

lst = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(lst)
print("Sorted list using Bubble Sort:", lst)


# 7e) Selection Sort

def selection_sort(lst):
    n = len(lst)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if lst[j] < lst[min_idx]:
                min_idx = j
        lst[i], lst[min_idx] = lst[min_idx], lst[i]

lst = [29, 10, 14, 37, 14]
selection_sort(lst)
print("Sorted list using Selection Sort:", lst)


# 7f) Permutations of a list

from itertools import permutations

lst = [1, 2, 3]
perm = list(permutations(lst))
print("All permutations of [1, 2, 3]:")
for p in perm:
    print(p)
