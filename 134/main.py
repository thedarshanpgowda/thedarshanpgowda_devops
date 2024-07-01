from addition import add
from subtraction import subtract
from multiplication import multiply
from division import divide

def main():
    print("Simple Calculator Program")
    
    a = int(input("Enter a number"))
    b = int(input("Enter another number"))
    
    add(a, b)
    subtract(a, b)
    multiply(a, b)
    divide(a, b)

if __name__ == "__main__":
    main()
