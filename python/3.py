def _palindrome(n):
    if str(n) == str(n)[::-1]:
        return "Palindrome"
    else:
        return "Not Palindrome"
    
num=int(input("Enter a number:"))
print(_palindrome(num))  # Output: Palindrome


