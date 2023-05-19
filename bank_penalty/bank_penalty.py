import re
import string

greeting = input('Welcome the customer: ').lower()

def get_penalty(greeting):
    if greeting.startswith('hello'):
        return 0

    if greeting.startswith('h'):
        return 20
    
    return 100

print(get_penalty(greeting))