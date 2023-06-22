# Create a function named in_range() that has three parameters named num, lower, and upper.

# The function should return True if num is greater than or equal to lower and less than or equal to upper. Otherwise, return False.

# Write your in_range function here:
def in_range(num, lower, upper):
    return num >= lower and num <= upper

# Uncomment these function calls to test your in_range function:
print(in_range(10, 10, 10))
# should print True
print(in_range(5, 10, 20))
# should print False


#  ***************************************
# Create a function named same_name() that has two parameters named your_name and my_name.
# If our names are identical, return True. Otherwise, return False.

# Write your same_name function here:
def same_name(your_name, my_name):
    return your_name == my_name

# Uncomment these function calls to test your same_name function:
print(same_name("Colby", "Colby"))
# should print True
print(same_name("Tina", "Amber"))
# should print False


#  ***************************************
# Write your always_false function here:
def always_false(num):
    return num < 0 and num > 0

# Uncomment these function calls to test your always_false function:
print(always_false(0))
# should print False
print(always_false(-1))
# should print False
print(always_false(1))
# should print False



#  ***************************************
# Create a function named movie_review() that has one parameter named rating.

# If rating is less than or equal to 5, return "Avoid at all costs!". If rating is between 5 and 9, return "This one was fun.". If rating is 9 or above, return "Outstanding!"

# Write your movie_review function here:
def movie_review(rating):
    if rating <= 5:
        return "Avoid at all costs!"
    elif rating < 9:
        return "This one was fun."
    else:
        return "Outstanding!"

# Uncomment these function calls to test your movie_review function:
print(movie_review(9))
# should print "Outstanding!"
print(movie_review(4))
# should print "Avoid at all costs!"
print(movie_review(6))
# should print "This one was fun."



#  ***************************************
# Write your max_num function here:
def max_num(a, b, c):
    if (a > b and a > c):
        return a
    if (b > a and b > c):
        return b
    if (c > b and c > a):
        return c
    return "It's a tie!"

# Uncomment these function calls to test your max_num function:
print(max_num(-10, 0, 10))
# should print 10
print(max_num(-10, 5, -30))
# should print 5
print(max_num(-5, -10, -10))
# should print -5
print(max_num(2, 3, 3))
# should print "It's a tie!"
