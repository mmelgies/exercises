order = []
price = []

menu = {
    "Baja Taco": 4.00,
    "Burrito": 7.50,
    "Bowl": 8.50,
    "Nachos": 11.00,
    "Quesadilla": 8.50,
    "Super Burrito": 8.50,
    "Super Quesadilla": 9.50,
    "Taco": 3.00,
    "Tortilla Salad": 8.00
}


def taking_order(order, price, menu):
    while True:
        dish = input('Type food from menu which you want to order: ').title()
        if len(dish) == 0:
            break
        order.append(dish)
        try:
            get_total_price(order, price, menu, dish)
        except:
            print('dishes do not exist')

    return order

def get_total_price(order, price, menu, dish):
    for j in menu:
        if dish == j:
            price.append(menu[j])
            total_price = sum(price)
            print(total_price)

    return total_price


taking_order(order, price, menu)

print(order)