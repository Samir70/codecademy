with open("strings.py") as text_file:
  text_data = text_file.read()
print(text_data)

with open("strings.py") as text_file:
  for line in text_file.readlines():
    print(line)

with open("bad_bands.txt", "w") as bad_bands_doc:
  bad_bands_doc.write("asd")



import csv
with open('files.csv', newline='') as data_csv:
  data_object = csv.DictReader(data_csv, delimiter='@')
  for row in data_object:
    print(row['name'])

big_list = [{'name': 'Fredrick Stein', 'userid': 6712359021, 'is_admin': False}, {'name': 'Wiltmore Denis', 'userid': 2525942, 'is_admin': False}, {'name': 'Greely Plonk', 'userid': 15890235, 'is_admin': False}, {'name': 'Dendris Stulo', 'userid': 572189563, 'is_admin': True}] 
 
with open('files.csv', 'w') as output_csv:
  fields = ['name', 'userid', 'is_admin']
  output_writer = csv.DictWriter(output_csv, fieldnames=fields, delimiter="@")
 
  output_writer.writeheader()
  for item in big_list:
    output_writer.writerow(item)


###############################################################

import json

with open("files.json") as message_json:
  message = json.load(message_json) # use json.dump to write to a file
  print(message["text"])