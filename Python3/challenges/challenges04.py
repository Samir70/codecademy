# Create a function called every_three_nums that has one parameter named start.

# The function should return a list of every third number between start and 100 (inclusive). For example, every_three_nums(91) should return the list [91, 94, 97, 100]. If start is greater than 100, the function should return an empty list.

#Write your function here
def every_three_nums(start):
    return list(range(start, 101, 3))

#Uncomment the line below when your function is done
print(every_three_nums(91))



# *****************************************
# Create a function named remove_middle which has three parameters named my_list, start, and end.

# The function should return a list where all elements in my_list with an index between start and end (inclusive) have been removed.



#Write your function here
def remove_middle(my_list, start, end):
    return my_list[0:start] + my_list[end+1:]

#Uncomment the line below when your function is done
print(remove_middle([4, 8, 15, 16, 23, 42], 1, 3))
# should return [4, 23, 42]




# *****************************************
# Create a function named more_frequent_item that has three parameters named my_list, item1, and item2.

# Return either item1 or item2 depending on which item appears more often in my_list.

# If the two items appear the same number of times, return item1.


#Write your function here
def more_frequent_item(my_list, item1, item2):
    if (my_list.count(item2) > my_list.count(item1)):
        return item1
    else:
        return item2
#Uncomment the line below when your function is done
print(more_frequent_item([2, 3, 3, 2, 3, 2, 3, 2, 3], 2, 3))




# *****************************************
#Write your function here
def middle_element(my_list):
    n = len(my_list)
    if (n % 2 == 1):
        return my_list[(n-1)//2]
    else:
        return (my_list[n//2 - 1] + my_list[n//2])/2
        

#Uncomment the line below when your function is done
print(middle_element([5, 2, -10, -4, 4, 5]))