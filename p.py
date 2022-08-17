n=int(input())
for i in range(1,n+1):
    for j in range(1,n+1):
        if n+1-i<=j:
            print("*",end=" ")
        else:
            print(" ",end=" ")
    print()