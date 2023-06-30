letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
def unique_english_letters(str):
    found_letters = set()
    for letter in str:
        found_letters.add(letter)
    return len(found_letters)

# Write your unique_english_letters function here:

# Uncomment these function calls to test your function:
print(unique_english_letters("mississippi") == 4)
# should print 4
print(unique_english_letters("Apple") == 4)
# should print 4


#############################################################
# Write your count_char_x function here:
def count_char_x(word, char):
    return word.count(char)
# Uncomment these function calls to test your tip function:
print(count_char_x("mississippi", "s") == 4)
# should print 4
print(count_char_x("mississippi", "m") == 1)
# should print 1


############################################################
# Write your count_multi_char_x function here:
def count_multi_char_x(word, substr):
    return word.count(substr)
# Uncomment these function calls to test your function:
print(count_multi_char_x("mississippi", "iss") == 2)
# should print 2
print(count_multi_char_x("apple", "pp") == 1)
# should print 1


############################################################
# Write your substring_between_letters function here:
def substring_between_letters(str, start, end):
    i = 0
    while i < len(str) and str[i] != start:
        i += 1
    out = ""
    i += 1
    while i < len(str) and str[i] != end:
        out += str[i]
        i += 1
    return out if i < len(str) else str
# Uncomment these function calls to test your function:
print(substring_between_letters("apple", "p", "e") == "pl")
# should print "pl"
print(substring_between_letters("apple", "p", "c") == "apple")
# should print "apple"



############################################################
# Write your x_length_words function here:
def x_length_words(sentence, word_length):
    words = sentence.split(" ")
    for word in words:
        if len(word) < word_length:
            return False
    return True
# Uncomment these function calls to test your tip function:
print(x_length_words("i like apples", 2) == False)
# should print False
print(x_length_words("he likes apples", 2) == True)
# should print True