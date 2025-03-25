def armstrong(sum,num):
    a=num%100   #121/100
    b=num%10
    c=num%1
    if sum==a**3+b**3+c**3:
        return "Armstrong number"
    else:
        return "Not Armstrong number"
    n=int(input("Enter a number:"))
print(armstrong(n))

