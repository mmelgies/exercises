credit_card_number = input("number of credit card: ")
for_luhns_array = list(credit_card_number)

def luhn():
    for_luhns_array.reverse()
    sum_every_other_digit_from_second_to_last = []
    for x in for_luhns_array[1::2]:
        other_digit_from_second_to_last = int(x)
        other_digit_from_second_to_last *= 2
        if other_digit_from_second_to_last < 10:
            sum_every_other_digit_from_second_to_last.append(other_digit_from_second_to_last)
        else:
            second_digit = other_digit_from_second_to_last%10
            first_digit = int(other_digit_from_second_to_last/10)
            sum_every_other_digit_from_second_to_last.append((second_digit + first_digit))

    sum_every_other_digit = []
    for i in for_luhns_array[::2]:
        every_other_digit = int(i)
        sum_every_other_digit.append(every_other_digit)
    total = int((sum(sum_every_other_digit_from_second_to_last))+sum(sum_every_other_digit))

    return total

def is_total_valid(total):
   return total % 10 == 0


def check_length(credit_card_number):
    return (len(str(credit_card_number)) == 13 or 15 or 16)

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
    if is_total_valid(luhn()) == False:
        print("INVALID")
        return is_total_valid
    if check_length(credit_card_number) == False:
        print("INVALID")
        return check_length
    print_card_type(credit_card_number)



main()