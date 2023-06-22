# Create a function named large_power() that takes two parameters named base and exponent.
# If base raised to the exponent is greater than 5000, return True, otherwise return False
# Write your large_power function here:
def large_power(base, exponent):
    return base**exponent > 5000

# Uncomment these function calls to test your large_power function:
print(large_power(2, 13))
# should print True
print(large_power(2, 12))
# should print False

# ********************************************
# Create a function called over_budget that has five parameters named budget, food_bill, electricity_bill, internet_bill, and rent.

# The function should return True if budget is less than the sum of the other four parameters — you’ve gone over budget! Return False otherwise.

# Write your over_budget function here:
def over_budget(budget, food_bill, electricity_bill, internet_bill, rent):
    return budget < food_bill + electricity_bill + internet_bill + rent

# Uncomment these function calls to test your over_budget function:
print(over_budget(100, 20, 30, 10, 40))
# should print False
print(over_budget(80, 20, 30, 10, 30))
# should print True


# ********************************************
# Create a function named twice_as_large() that has two parameters named num1 and num2.

# Return True if num1 is more than double num2. Return False otherwise.

# Write your twice_as_large function here:
def twice_as_large(num1, num2):
    return num1 > num2 * 2
# Uncomment these function calls to test your twice_as_large function:
print(twice_as_large(10, 5))
# should print False
print(twice_as_large(11, 5))
# should print True



# ********************************************
# Create a function called divisible_by_ten() that has one parameter named num.

# The function should return True if num is divisible by 10, and False otherwise. Consider using modulo operator % to check for divisibility.

# Write your divisible_by_ten() function here:
def divisible_by_ten(num):
    return num % 10 == 0


# Uncomment these print() function calls to test your divisible_by_ten() function:

print(divisible_by_ten(20))
# should print True
print(divisible_by_ten(25))
# should print False



# ********************************************
# Write your not_sum_to_ten function here:
def not_sum_to_ten(a, b):
    return a + b != 10
  
# Uncomment these function calls to test your not_sum_to_ten function:
print(not_sum_to_ten(9, -1))
# should print True
print(not_sum_to_ten(9, 1))
# should print False
print(not_sum_to_ten(5,5))
# should print False