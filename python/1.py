# Reverse an array
def reverse_array(arr):
    if len(arr) <= 1:
        return arr
    else:
        return reverse_array(arr[1:]) + [arr[0]]

arr = [1, 2, 3, 4, 5]
print(reverse_array(arr))  # Output: [5, 4, 3, 2, 1]
