from cs50 import get_int

credit_card_number = get_int("number of credit card: ")


def luhns_algorithm(credit_card_number):
    sum_last_digits = 0
    sum_second_last_digits = 0

    while credit_card_number > 0:
        last_digit_of_credit_card_num = int(credit_card_number % 10)
        credit_card_number = int(credit_card_number / 10)
        sum_last_digits = int(sum_last_digits + last_digit_of_credit_card_num)
        second_to_last_digit_of_credit_card_number = int(credit_card_number % 10)
        credit_card_number = int(credit_card_number / 10)
        second_to_last_digit_of_credit_card_number = int(
            second_to_last_digit_of_credit_card_number * 2)

        separate_two_digit_number_second = int(second_to_last_digit_of_credit_card_number % 10)
        separate_two_digit_number_first  = int(second_to_last_digit_of_credit_card_number / 10)
        sum_second_last_digits = int(sum_second_last_digits + separate_two_digit_number_second + separate_two_digit_number_first)

    total = sum_last_digits + sum_second_last_digits
    return total


def is_total_valid(total):
    total_check = total(credit_card_number)
    if total_check % 10 == 0:
        return True
    else:
        return False


def check_length(credit_card_number):
    length = len(str(credit_card_number))
    if length == 13 or length == 15 or length == 16:
        return True
    else:
        return False


def get_first_two_digits(credit_card_number):
    return int(str(credit_card_number)[:2])


def get_card_type(first_two_digits_of_credit_card):
    card = {
        (34, 37): 'AMEX',
        (51, 52, 53, 54, 55): 'MASTERCARD',
        (40, 41, 42, 43, 44, 45, 46, 47, 48, 49): 'VISA'
    }

    for i in card.keys():
        for j in i:
            if first_two_digits_of_credit_card == j:
                return (card.get(i))
    return 'INVALID'


def print_card_type(credit_card_number):
    first_two_digits = get_first_two_digits(credit_card_number)
    card_type = get_card_type(first_two_digits)
    print(card_type)


def main():
    if is_total_valid(luhns_algorithm) == False:
        print("INVALID")
        return is_total_valid
    if check_length(credit_card_number) == False:
        print("INVALID")
        return check_length
    print_card_type(credit_card_number)



main()
