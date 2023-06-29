import csv
import json

compromised_users = []

with open("passwords.csv") as password_file:
    password_csv = csv.DictReader(password_file)
    for password_row in password_csv:
        # print(password_row["Username"])
        compromised_users.append(password_row["Username"])

with open("compromised_users.txt", "w") as compromised_users_txt:
    for user in compromised_users:
        compromised_users_txt.write(user + "\n")

with open("boss_message.json", "w") as boss_message:
    boss_message_dict = {
        "recipient": "The Boss",
        "message": "Mission Success"
    }
    json.dump(boss_message_dict, boss_message)

with open("new_passwords.csv", "w") as new_password_file:
    slash_null_sig = """ _  _     ___   __  ____             
/ )( \   / __) /  \(_  _)            
) \/ (  ( (_ \(  O ) )(              
\____/   \___/ \__/ (__)             
 _  _   __    ___  __ _  ____  ____  
/ )( \ / _\  / __)(  / )(  __)(    \ 
) __ (/    \( (__  )  (  ) _)  ) D ( 
\_)(_/\_/\_/ \___)(__\_)(____)(____/ 
        ____  __     __   ____  _  _ 
 ___   / ___)(  )   / _\ / ___)/ )( \\
(___)  \___ \/ (_/\/    \\___ \) __ (
       (____/\____/\_/\_/(____/\_)(_/
 __ _  _  _  __    __                
(  ( \/ )( \(  )  (  )               
/    /) \/ (/ (_/\/ (_/\             
\_)__)\____/\____/\____/
    """
    new_password_file.write(slash_null_sig)
