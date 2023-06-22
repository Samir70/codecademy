# Create a function named divisible_by_ten() that takes a list of numbers named nums as a parameter.

# Return the count of how many numbers in the list are divisible by 10.


#Write your function here
def divisible_by_ten(nums):
    out = 0
    for n in nums:
        if n % 10 == 0:
            out += 1
    return out


#Uncomment the line below when your function is done
print(divisible_by_ten([20, 25, 30, 35, 40]))



#Write your function here
def add_greetings(names):
    return [f"Hello, {name}" for name in names]

#Uncomment the line below when your function is done
print(add_greetings(["Owen", "Max", "Sophie"]))









#Write your function here
def delete_starting_evens(nums):
    while (len(nums) > 0 and nums[0] % 2 == 0):
        nums.pop(0)
    return nums

#Uncomment the lines below when your function is done
print(delete_starting_evens([4, 8, 10, 11, 12, 15]))
print(delete_starting_evens([4, 8, 10]))






#Write your function here
def odd_indices(nums):
    return [nums[i] for i in range(1, len(nums), 2)]

#Uncomment the line below when your function is done
print(odd_indices([4, 3, 7, 10, 11, -2]))










#Write your function here
def exponents(bases, powers):
    out = []
    for base in bases:
        for power in powers:
            out.append(base**power)
    return out

#Uncomment the line below when your function is done
print(exponents([2, 3, 4], [1, 2, 3]))



#Write your function here
def larger_sum(nums1, nums2):
    if sum(nums2) > sum(nums1):
        return nums2
    else:
        return nums1

#Uncomment the line below when your function is done
print(larger_sum([1, 9, 5], [2, 3, 7]))



#Write your function here
def same_values(nums1, nums2):
    out = []
    for i in range(len(nums1)):
        if (nums1[i] == nums2[i]):
            out.append(i)
    return out

#Uncomment the line below when your function is done
print(same_values([5, 1, -10, 3, 3], [5, 10, -10, 3, 5]))





#Write your function here
def reversed_list(nums1, nums2):
    for i in range(len(nums1)):
        if nums1[i] != nums2[-(i+1)]:
            return False
    return True

#Uncomment the lines below when your function is done
print(reversed_list([1, 2, 3], [3, 2, 1]))
print(reversed_list([1, 5, 3], [3, 2, 1]))