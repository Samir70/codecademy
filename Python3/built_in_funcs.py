print(round(5.345, 1)) #5.3

# ******* strings ********
"hello WORLD".lower() # "hello world"
"HELLO world".upper() # "HELLO WORLD"
"HELLO wORLD".title() # "Hello World"

# string_name.split(delimiter = " ")
# strip, join, replace, find

god_wills_it_line_one = "The very earth will disown you"

disown_placement = god_wills_it_line_one.find("disown")


def poem_title_card(title, poet):
  return "The poem \"{}\" is written by {}.".format(title, poet)



highlighted_poems = "Afterimages:Audre Lorde:1997,  The Shadow:William Carlos Williams:1915, Ecstasy:Gabriela Mistral:1925,   Georgia Dusk:Jean Toomer:1923,   Parting Before Daybreak:An Qi:2014, The Untold Want:Walt Whitman:1871, Mr. Grumpledump's Song:Shel Silverstein:2004, Angel Sound Mexico City:Carmen Boullosa:2013, In Love:Kamala Suraiyya:1965, Dream Variations:Langston Hughes:1994, Dreamwood:Adrienne Rich:1987"

# print(highlighted_poems)
highlighted_poems_list = highlighted_poems.split(",")
# print(highlighted_poems_list)

highlighted_poems_stripped = [poem.strip() for poem in highlighted_poems_list]

# print(highlighted_poems_stripped)

highlighted_poems_details = []
for poem in highlighted_poems_stripped:
  highlighted_poems_details.append(poem.split(":"))

titles = []
poets = []
dates = []

for [title, poet, date] in highlighted_poems_details:
  titles.append(title)
  poets.append(poet)
  dates.append(date)

for i in range(len(titles)):
  print("The poem {} was published by {} in {}".format(titles[i], poets[i], dates[i]))