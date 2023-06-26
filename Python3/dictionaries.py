user_ids = {"teraCoder": 9018293, "proProgrammer": 119238}
user_ids.update({"theLooper": 138475, "stringQueen": 85739})
print(user_ids)

user_ids.keys() # returns an immutable dict_keys object
list(user_ids.keys()) # turns it into an ordinary list
# sim .values() returns a dict_values object
# .items() returns a (key, value) tuple

pct_women_in_occupation = {"CEO": 28, "Engineering Manager": 9, "Pharmacist": 58, "Physician": 40, "Lawyer": 37, "Aerospace Engineer": 9}

for job, per in pct_women_in_occupation.items():
  print(f"Women make up {per} percent of {job}s.")

##############################

drinks = ["espresso", "chai", "decaf", "drip"]
caffeine = [64, 40, 0, 120]

zipped_drinks = zip(drinks, caffeine)
drinks_to_caffeine = {drink:caff for drink, caff in zipped_drinks}

#####################
songs = ["Like a Rolling Stone", "Satisfaction", "Imagine", "What's Going On", "Respect", "Good Vibrations"]
playcounts = [78, 29, 44, 21, 89, 5]

plays = {
  song:playcount for song, playcount in zip(songs, playcounts)
}
print(plays)

plays["Purple Haze"] = 1
plays.update({"Respect": 94})

############################

user_ids = {"teraCoder": 100019, "pythonGuy": 182921, "samTheJavaMaam": 123112, "lyleLoop": 102931, "keysmithKeith": 129384}

# avoid errors when trying to access keys that are not in the dictionary
tc_id = user_ids.get("teraCoder", 100000)
print(tc_id)
stack_id = user_ids.get("teraCsuperStackSmashoder", 100000)
print(stack_id) # returns default of 100000


###########################################

available_items = {"health potion": 10, "cake of the cure": 5, "green elixir": 20, "strength sandwich": 25, "stamina grains": 15, "power stew": 30}
health_points = 20

health_points += available_items.pop("stamina grains", 0)
print(health_points)
health_points += available_items.pop("power stew", 0)
print(health_points)
health_points += available_items.pop("mystic bread", 0)
print(available_items, health_points)
