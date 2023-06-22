# numbers = [2, -1, 79, 33, -45]
# doubled = []
 
# for number in numbers:
#   doubled.append(number * 2)
 
# print(doubled)

numbers = [2, -1, 79, 33, -45]
doubled = [num * 2 for num in numbers]
print(doubled)

"""Only double negatives"""
# numbers = [2, -1, 79, 33, -45]
# only_negative_doubled = []
 
# for num in numbers:
#   if num < 0: 
#     only_negative_doubled.append(num * 2)
 
# print(only_negative_doubled) 

numbers = [2, -1, 79, 33, -45]
negative_doubled = [num * 2 for num in numbers if num < 0]
print(negative_doubled)


# othersiw triple the number
numbers = [2, -1, 79, 33, -45]
doubled_or_tripled = [num * 2 if num < 0 else num * 3 for num in numbers ]
print(doubled_or_tripled)