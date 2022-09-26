from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import time
time.clock = time.time

bot = ChatBot("Veronica")
main_data = open(r"C:\Users\ASUS\bot.txt","r", encoding="utf-8")
input_data = open(r"C:\Users\ASUS\insert.txt","r", encoding="utf-8")
output_data = open(r"C:\Users\ASUS\out.txt","w", encoding="utf-8")
temp = main_data.readlines()
bot.storage.drop()
con = temp[:10]
coll = ListTrainer(bot)
coll.train(con)

def calling_veronica():
    query = input_data.readline()
    bot_output = bot.get_response(query)
    print(bot_output)
    output_data.write(str(bot_output))

calling_veronica()