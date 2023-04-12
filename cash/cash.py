# TODO
#from cs50 import get_float


def main():
    while True:
        dollars = float(input("Change owed: "))
        if dollars > 0:
            break
    cents = int(dollars * 100)
    quarters = int(calculate_quarters(dollars, cents))
    cents = cents - int(quarters) * 25
    dimes = int(calculate_dimes(dollars, cents))
    cents = cents - int(dimes) * 10

    nickels = int(calculate_nickels(cents))
    cents = cents - nickels * 5

    pennies = int(calculate_pennies(cents))
    cents = cents - pennies * 1
    coins = int(quarters + dimes + nickels + pennies)
    print(coins)


def calculate_quarters(dollars, cents):
    x = cents / 25
    quarters = x
    return x

def calculate_dimes(dollars, cents):

    x = cents / 10
    dimes = x
    return x


def calculate_nickels(cents):

    x = cents / 5
    nickels = x
    return x


def calculate_pennies(cents):
    x = cents / 1
    pennies = x
    return x


if __name__ == "__main__":
    main()
