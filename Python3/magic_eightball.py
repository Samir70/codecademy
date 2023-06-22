import random
options = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']
name = "God"
question = "Do I exist?"
answer = options[random.randint(0, 7)]
# print(answer)
print(f"{name} asks {question}")
print(f"Magic 8-Ball's answer: {answer}")