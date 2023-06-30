# Write your word_length_dictionary function here:
def word_length_dictionary(word_list):
    out = {}
    for word in word_list:
        out[word] = len(word)
    return out
# Uncomment these function calls to test your  function:
print(word_length_dictionary(["apple", "dog", "cat"]))
# should print {"apple":5, "dog": 3, "cat":3}
print(word_length_dictionary(["a", ""]))
# should print {"a": 1, "": 0}



#######################################################
# Write your frequency_dictionary function here:
def frequency_dictionary(word_list):
    out = {}
    for word in word_list:
        if not word in out:
            out[word] = 0
        out[word] += 1
    return out
# Uncomment these function calls to test your  function:
print(frequency_dictionary(["apple", "apple", "cat", 1]))
# should print {"apple":2, "cat":1, 1:1}
print(frequency_dictionary([0,0,0,0,0]))
# should print {0:5}



#######################################################
# Write your unique_values function here:
def unique_values(my_dictionary):
  vals = set()
  for key in my_dictionary:
      vals.add(my_dictionary[key])
  return len(vals)
# Uncomment these function calls to test your  function:
print(unique_values({0:3, 1:1, 4:1, 5:3}))
# should print 2
print(unique_values({0:3, 1:3, 4:3, 5:3}))
# should print 1



#######################################################
# Write your count_first_letter function here:
def count_first_letter(names):
    out = {}
    for name in names:
        if not name[0] in out:
            out[name[0]] = 0
        out[name[0]] += len(names[name])
    return out
# Uncomment these function calls to test your  function:
print(count_first_letter({"Stark": ["Ned", "Robb", "Sansa"], "Snow" : ["Jon"], "Lannister": ["Jaime", "Cersei", "Tywin"]}))
# should print {"S": 4, "L": 3}
print(count_first_letter({"Stark": ["Ned", "Robb", "Sansa"], "Snow" : ["Jon"], "Sannister": ["Jaime", "Cersei", "Tywin"]}))
# should print {"S": 7}