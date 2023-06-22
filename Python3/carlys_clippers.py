hairstyles = ["bouffant", "pixie", "dreadlocks", "crew", "bowl", "bob", "mohawk", "flattop"]

prices = [30, 25, 40, 20, 20, 35, 50, 35]

last_week = [2, 3, 5, 8, 4, 4, 6, 2]

total_price = 0
for p in prices:
    total_price += p
average_price = total_price / len(prices)
print(f"Average haircut price: {average_price}")
new_prices = [p - 5 for p in prices]
print(new_prices)
print(hairstyles)


total_revenue = 0
for i in range(len(hairstyles)):
    total_revenue += prices[i] * last_week[i]
print(f"Total Revenue: {total_revenue}")
average_daily_revenue = total_revenue / 7
print(f"Daily average: {average_daily_revenue}")


cuts_under_30 = [hairstyles[i] for i in range(len(hairstyles)) if new_prices[i] < 30]
print("Cuts under 30:", cuts_under_30)

