toppings = ["pepperoni",   "pineapple",   "cheese",   "sausage",   "olives",   "anchovies",   "mushrooms"]
num_pizzas = len(toppings)
print(f"We sell {num_pizzas} different kinds of pizza!")

prices = [2, 6, 1, 3, 2, 7, 2]
num_two_dollar_slices = prices.count(2)

pizza_and_prices = [[2, "pepperoni"], [6, "pineapple"], [1, "cheese"], [3, "sausage"], [2, "olives"], [7, "anchovies"], [2, "mushrooms"]]
pizza_and_prices.sort()
print(pizza_and_prices)
cheapest_pizza = pizza_and_prices[0]
priciest_pizza = pizza_and_prices[-1]
pizza_and_prices.pop()
pizza_and_prices.append([2.5, "peppers"])
pizza_and_prices.sort()
print(pizza_and_prices)
three_cheapest = pizza_and_prices[:3]
print(three_cheapest)

