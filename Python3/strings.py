def username_generator(first_name, last_name):
    return first_name[:3] + last_name[:4]
print(username_generator("Ab", "Simpson"))

def password_generator(user_name):
    return user_name[-1] + user_name[:-1]
print(password_generator("AbeSimp"))
