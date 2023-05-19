import csv
import requests


def main():
    NUMBER_OF_TRACKED_DAYS = 14 
    # Read NYTimes Covid Database
    request = requests.get(
        "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv"
    )
    decoded_content = request.content.decode("utf-8")
    file = decoded_content.splitlines()
    reader = csv.DictReader(file)

    # Construct 14 day lists of new cases for each states
    new_cases = calculate(reader, NUMBER_OF_TRACKED_DAYS)

    print("Choose one or more states to view average COVID cases.")
    print("Press enter when done.\n")

    state = input("State: ")
    print(f"\nSeven-Day Averages")

    print_result(state, new_cases, NUMBER_OF_TRACKED_DAYS)


def calculate(reader, NUMBER_OF_TRACKED_DAYS):
    new_cases = dict()
    previous_cases = dict()

    for row in reader:
        state = row['state']
        today_cases = int(row['cases'])

        if state not in previous_cases:
            previous_cases[state] = []

        if len(previous_cases[state]) > NUMBER_OF_TRACKED_DAYS:
            previous_cases[state].pop(0)
        previous_cases[state].append(today_cases)

        for i in range(len(previous_cases[state])):

            if i <= NUMBER_OF_TRACKED_DAYS:
                subtraction = (previous_cases[state][i] - previous_cases[state][i-1])

            if state not in new_cases:
                    new_cases[state] = []

            if len(new_cases[state]) >= NUMBER_OF_TRACKED_DAYS:
                new_cases[state].pop(0)
            new_cases[state].append(subtraction)

    return new_cases

def percent(new_cases,state,NUMBER_OF_TRACKED_DAYS):
    average_current = averages(new_cases[state][7:NUMBER_OF_TRACKED_DAYS])
    average_previous = averages(new_cases[state][0:7])
    if average_current == average_previous:
        return 100.0
    try:
        return (abs(average_current - average_previous) / average_previous) * 100.0
    except ZeroDivisionError:
        return 0

def averages(cases_in_state):
    return sum(cases_in_state)/len(cases_in_state)

def calculate_trend(new_cases, state,NUMBER_OF_TRACKED_DAYS):
    average_current = averages(new_cases[state][7:NUMBER_OF_TRACKED_DAYS])
    average_previous = averages(new_cases[state][0:7])
    if average_current > average_previous:
        return 'increase'
    elif average_current < average_previous:
        return 'decrease'
    else:
        return 'constant level compared to the previous week'


def print_result(state, new_cases, NUMBER_OF_TRACKED_DAYS):
    print(f"{state} had a 7-day average of {int(averages(new_cases[state][7:NUMBER_OF_TRACKED_DAYS]))}, and a {calculate_trend(new_cases, state,NUMBER_OF_TRACKED_DAYS)} of {round(percent(new_cases,state,NUMBER_OF_TRACKED_DAYS),2)}%")

main()