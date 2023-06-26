letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]

letter_to_points = {
  letter:point for letter, point in zip(letters, points)
}

letter_to_points[" "] = 0
print(letter_to_points)

def score_word(word):
  point_total = 0
  for c in word.upper():
    point_total += letter_to_points.get(c, 0)
  return point_total

print(score_word("help!!!"))
brownie_points = score_word("BROWNIE")
print(brownie_points)

text = """
player1 wordNerd LexiCon ProfReader
BLUE EARTH ERASER ZAP
TENNIS EYES BELLY COMA
EXIT MACHINE HUSKY PERIOD
"""
data = [line.split(" ") for line in text.split("\n")][1:-1]

player_to_words = {}
col = 0
for player in data[0]:
  # print(player)
  # print([row[col] for row in data[1:]])
  player_to_words[player] = [row[col] for row in data[1:]]
  col += 1

print(player_to_words)

player_to_points = {}

for player, words in player_to_words.items():
  score = 0
  for word in words:
    score += score_word(word)
  player_to_points[player] = score

print(player_to_points)