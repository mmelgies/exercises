import sys
from csv import DictReader


def main():

    n = sys.argv[1]
    sequences = sys.argv[2]

    with open(n, 'r') as f:
        dict_reader = DictReader(f)
        data = list(dict_reader)
        headers = dict_reader.fieldnames
    headers.pop(0)

    with open(sequences, 'r') as f:
        for line in f:
            sequence = line

    print(checking_to_whom_the_dna_belongs(data, headers, sequence))

    return


def counting_score_of_subsequences(headers, sequence):

    score_of_subsequences = {}

    for i in headers:
        subsequence = i
        score_of_subsequences[i] = longest_match(sequence, subsequence)

    return score_of_subsequences


def checking_to_whom_the_dna_belongs(data, headers, sequence):
    winner = {}
    x = 0
    score_of_subsequences = counting_score_of_subsequences(headers, sequence)

    for lenght in range(len(data)):
        winner[data[lenght]['name']] = x
        for i in headers:
            if int(score_of_subsequences[i]) == int(data[lenght][i]):
                winner[data[lenght]['name']] += 1
                if int(winner[data[lenght]['name']]) == int(len(headers)):
                    return data[lenght]['name']
    return 'No match'


def longest_match(sequence, subsequence):  # this def was alreade here
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):

        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:

            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


main()