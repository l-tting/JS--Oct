




num1 = float(input("Enter num1"))
num2 = float(input("Enter num2"))
num3 = float(input("Enter num3"))


if num1 > num2 and num1 > num3:
    print("Num1 is the largest")
elif num2 > num1 and num2 > num3:
    print("Num2 is the largest")
else:
    print("Num3 is the largest")



marks = float(input("Enter marks"))

if marks >= 0 and marks <= 100:
    if marks > 79:
        print("A")
    elif marks >= 60 and marks <= 79:
        print("B")
    elif marks > 49 and marks <= 59:
        print("B")
    elif marks >= 40 and marks <= 49:
        print("B")
    else:
        print("E")
else:
    print("Invalid marks entered , enter marks between 0 and 100")
            



prods = [['omo','30kshs','300'], ['milk','50kshs','200'],['bread','45kshs','359'], ['coffee','5kshs','79']]

total_stock = 0
for i in prods:
    stock = float(prods[i][2])
    total_stock += stock

print(stock)
