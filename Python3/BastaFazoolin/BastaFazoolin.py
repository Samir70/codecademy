class Menu:
    def __init__(self, name, items, start_time, end_time):
        self.name = name
        self.items = items
        self.start_time = start_time
        self.end_time = end_time
    def __repr__(self):
        return f"{self.name} Menu, available from {self.start_time}:00 to {self.end_time}:00"
    def calculate_bill(self, purchased_items):
        total = 0
        for item in purchased_items:
            if item in self.items:
                total += self.items[item]
            else:
                print(f"ERROR::: {item} has no price in this menu")
                print(self.items)
        return total
                

brunch = Menu(
  "Brunch", 
  {'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50, 'coffee': 1.50, 'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50},
  11, 16
  )

early_bird = Menu(
    "Early Bird",
    {'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00, 'pizza with quattro formaggi': 9.00, 'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 1.50, 'espresso': 3.00},   
    15, 18
)

dinner = Menu(
    "Dinner",
  {'crostini with eggplant caponata': 13.00, 'caesar salad': 16.00, 'pizza with quattro formaggi': 11.00, 'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00,},
  17, 23
)

kids = Menu(
    "Kids",
    {'chicken nuggets': 6.50, 'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00},
    11, 21
)

print(kids)
brunch_bill = brunch.calculate_bill(["pancakes", "home fries", "coffee"])
early_bill = early_bird.calculate_bill(["salumeria plate", "mushroom ravioli (vegan)"])
print(f"brunch bill is {brunch_bill}")
print(f"early bill is {early_bill}")



class Franchise:
    def __init__(self, address, menus):
        self.address = address
        self.menus = menus
    def __repr__(self):
        return f"Restuarant is at: {self.address}"
    def available_menus(self, time):
        out = []
        for menu in self.menus:
            if time >= menu.start_time and time <= menu.end_time:
                out.append(menu)
            # else:
            #     print(f"{menu} is not available at {time}")
        return out
                

flagship = Franchise("1232 West End Road", [brunch, dinner, early_bird, kids])
new_store = Franchise("12 East Mulberry Street", [brunch, dinner, early_bird, kids])
for m in flagship.available_menus(12):
    print(m)
for m in flagship.available_menus(17):
    print(m)










class Business:
    def __init__(self, name, franchises):
        self.name = name
        self.franchises = franchises

b_faz = Business("Basta Fazoolin' with my Heart", [flagship, new_store])

arepas_menu = Menu(
    "Arepas", 
    {'arepa pabellon': 7.00, 'pernil arepa': 8.50, 'guayanes arepa': 8.00, 'jamon arepa': 7.50},
    10, 20
)

arepas_place = Franchise("189 Fitzgerald Avenue", [arepas_menu])
arepa_business = Business("Take a' Arepa", arepas_place)
