import string
text = input("Text: ").lower()


def words(text):
    count_of_words = len(text.split())
    return count_of_words


def average_number_of_letters_per_100_words(text):
    count_of_words = words(text)
    count = 0
    text = text.translate(str.maketrans('', '', string.punctuation))
    for i in range(len(text)):
        if (text[i] != ' '):
            count = count + 1

    average_of_letters = round(count/count_of_words*100, 2)
    return average_of_letters


def average_of_the_sentences(text):
    count_of_words = words(text)
    count = 0
    for i in range(len(text)):
        if (text[i] == '.' or text[i] == '!' or text[i] == '?'):
            count = count + 1
    average_of_sentences = round(count/count_of_words*100, 2)
    return average_of_sentences


def Coleman_Liau_index(text):
    L = average_number_of_letters_per_100_words(text)
    S = average_of_the_sentences(text)
    Coleman_Liau_index = round(0.0588 * L - 0.296 * S - 15.8)
    return Coleman_Liau_index

def result_of_coleman_Liau_index(text):
    Coleman_Liau = Coleman_Liau_index(text)
    if Coleman_Liau > 16:
        print('Grade 16+')
    elif Coleman_Liau < 1:
        print("Before Grade 1")
    else:
        print('Grade ', Coleman_Liau)

result_of_coleman_Liau_index(text)